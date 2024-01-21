"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import HeaderPage from "@/components/molecules/HeaderPage";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const URL_API = "/api/articles";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false)

  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState([]);

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return router.replace("/login");
    }
  });

  useEffect(() => {
    setIsAdmin(session?.user?.role === "admin")
  }, [session]);

  function getArticles(){
    if(isAdmin){
      const fetchArticles = async () => {
        try {
          setLoading(true);

          const res = await fetch(URL_API);
          const data = await res.json();

          if (!data) throw "Missing data...";

          setArticles(data.articles);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      return fetchArticles();
    }

    const articles_from_localstorage = JSON.parse(localStorage.getItem("articles"));

    if(articles_from_localstorage && articles_from_localstorage?.length > 0){
      setArticles(articles_from_localstorage);
      return
    }

    const article = {
      id: uuidv4(),
      title: `Artigo teste #${articles.length+1}`,
      published: false,
      author: "Curioso",
      htmlContent: "<p>Este artigo só é visivel para você.</p>",
      mdContent: {
        type: "doc",
        content: [
          {
            type: "text",
            text: "Este artigo só é visivel para você.",
          },
        ],
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setArticles([article]);
    localStorage.setItem("articles", JSON.stringify([article]));
  }

  useEffect(() => {
    getArticles()
  }, [isAdmin]);

  async function postCreateArticleTemplate() {
    if(isAdmin){
      try {
        const article = {
          id: uuidv4(),
          title: "Artigo-#" + articles.length,
          published: false,
          author: "Darlley Brasil de Brito Furtado",
          htmlContent: "<p>Hello World!</p>",
          mdContent: {
            type: "doc",
            content: [
              {
                type: "text",
                text: "Hello World!",
              },
            ],
          },
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const response = await fetch(URL_API, {
          method: "POST",
          body: JSON.stringify(article),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (response.ok) {
          setArticles((prev) => [article, ...prev]);
        }
      } catch (error) {
        console.log(error);
      }

      return
    }

    const article = {
      id: uuidv4(),
      title: `Artigo teste #${articles.length+1}`,
      published: false,
      author: "Curioso",
      htmlContent: "<p>Este artigo só é visivel para você.</p>",
      mdContent: {
        type: "doc",
        content: [
          {
            type: "text",
            text: "Este artigo só é visivel para você.",
          },
        ],
      },
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    setArticles((prev) => [article,...prev]);

    const articles_from_localstorage = JSON.parse(localStorage.getItem("articles"));
    articles_from_localstorage.push(article)
    localStorage.setItem("articles", JSON.stringify(articles_from_localstorage));
  }

  useEffect(() => {
    const isIndeterminate =
      selectedArticle.length > 0 && selectedArticle.length < articles.length;
    setChecked(
      selectedArticle.length === articles.length && articles.length != 0
    );
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedArticle]);

  function toggleAll() {
    setSelectedArticle(checked || indeterminate ? [] : articles);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  async function deleteArticle(articlesFromDelete) {
    if(isAdmin){
      try {
        articlesFromDelete.map(async (currentArticle) => {
          const response = await fetch(URL_API, {
            method: "DELETE",
            body: JSON.stringify({
              id: currentArticle.id,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          });

          if (response.ok) {
            setArticles((prev) =>
              prev.filter((currentPrev) => {
                if (currentPrev.id === currentArticle.id) {
                  return false;
                }

                return true;
              })
            );
          }
        });
      } catch (error) {
        console.log(error);
      }

      return;
    }

    const articles_from_localstorage = JSON.parse(localStorage.getItem("articles"));

    let setNewArticlesFromLocal = articles_from_localstorage.filter((currentLocal) => {
      let hasSameId = articlesFromDelete.some((article) => {
        return article.id === currentLocal.id;
      });
      // retorna false se tiver o mesmo id, true se não tiver
      return !hasSameId;
    });

    localStorage.setItem("articles", JSON.stringify(setNewArticlesFromLocal));
    setArticles(setNewArticlesFromLocal || [])
  }

  return (
    <>
      <HeaderPage>
        <div className="flex items-center w-full px-10 justify-between gap-2">
          {session?.user?.image && (
            <img
              src={session?.user?.image}
              alt="Profile image"
              className="h-14 rounded-full"
            />
          )}

          <div className="flex w-full flex-col md:flex-row justify-center items-center gap-2">
            <h1 className="md:ml-auto">Meu artigos</h1>
            <div className="flex gap-2 md:ml-auto">
              <button
                type="button"
                onClick={() => signOut()}
                className="rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-600 shadow-sm hover:bg-red-100"
              >
                Sair de {session?.user?.email}
              </button>
            </div>
          </div>
        </div>
      </HeaderPage>
      <main className="overflow-hidden h-[calc(100vh-240.9px)] flex p-4 flex-1 justify-center py-12 sm:px-6 lg:px-8 relative">
        <div className="px-4 sm:px-6 lg:px-8 overflow-x-auto">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">
                Artigos
              </h1>
              <p className="mt-2 text-sm text-gray-700">
                Listagem de todos os artigos criados
              </p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
              <button
                type="button"
                className="rounded bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 shadow-sm hover:bg-blue-100"
                onClick={postCreateArticleTemplate}
              >
                Criar novo artigo
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="relative">
                  {selectedArticle.length > 0 && (
                    <div className="absolute left-14 top-0 flex h-12 items-center space-x-3 bg-white sm:left-12">
                      {/* <button
                        type="button"
                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                      >
                        Editar
                      </button> */}
                      <button
                        type="button"
                        onClick={() => deleteArticle(selectedArticle)}
                        className="inline-flex items-center rounded bg-red-500 px-2 py-1 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-red-300 hover:bg-red-600 disabled:cursor-not-allowed disabled:opacity-30"
                      >
                        Deletar
                      </button>
                    </div>
                  )}
                  <table className="min-w-full table-fixed divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="relative px-7 sm:w-12 sm:px-6"
                        >
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            ref={checkbox}
                            checked={checked}
                            onChange={toggleAll}
                          />
                        </th>
                        <th
                          scope="col"
                          className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                        >
                          Title
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Content
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Data de publicação
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                        >
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {articles?.length <= 0 ? (
                        <tr>
                          <td colSpan={3} className="p-4 gap-4 w-full">
                            Nenhum artigo encontrado
                          </td>
                          <td colSpan={3}>
                            <button
                              type="button"
                              className="rounded bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 shadow-sm hover:bg-blue-100"
                              onClick={postCreateArticleTemplate}
                            >
                              Criar novo artigo
                            </button>
                          </td>
                        </tr>
                      ) : (
                        <>
                          {articles?.map((article) => (
                            <tr
                              key={article.id}
                              className={
                                selectedArticle.includes(article)
                                  ? "bg-gray-50"
                                  : undefined
                              }
                            >
                              <td className="relative px-7 sm:w-12 sm:px-6">
                                {selectedArticle.includes(article) && (
                                  <div className="absolute inset-y-0 left-0 w-0.5 bg-blue-600" />
                                )}
                                <input
                                  type="checkbox"
                                  className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                                  value={article.id}
                                  checked={selectedArticle.includes(article)}
                                  onChange={(e) =>
                                    setSelectedArticle(
                                      e.target.checked
                                        ? [...selectedArticle, article]
                                        : selectedArticle.filter(
                                            (p) => p !== article
                                          )
                                    )
                                  }
                                />
                              </td>
                              <td
                                className={classNames(
                                  "whitespace-nowrap py-4 pr-3 text-sm font-medium hover:text-blue-500",
                                  selectedArticle.includes(article)
                                    ? "text-blue-600 hover:underline"
                                    : "text-gray-900"
                                )}
                              >
                                <a
                                  href={`/dashboard/edit/${article.id}`}
                                >
                                  {article?.title?.slice(0, 30)}
                                </a>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {article?.htmlContent?.replace(/<.*?>/g, "").slice(0, 20)}...
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Publish
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                16/06/1998 15:20
                              </td>
                              <td className="whitespace-nowrap gap-2 flex py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                <Link
                                  href={`/dashboard/edit/${article?.id}`}
                                  className="text-blue-500 hover:text-blue-900"
                                >
                                  Editar
                                </Link>
                                <Link
                                  href={`/blog/${article?.id}`}
                                  target="_blank"
                                  className="text-blue-500 hover:text-blue-900"
                                >
                                  Ver
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </>
                      )}
                      {loading && (
                        <tr>
                          <td colSpan={6}>Carregando artigos</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
