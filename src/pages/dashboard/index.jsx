'use client'
import { useSession, signIn, signOut } from "next-auth/react";
import HeaderPage from "@/components/molecules/HeaderPage";
import Metadata from "@/components/molecules/Metadata";
import { useRouter } from "next/navigation";
import { useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const URL_API = "/api/articles";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState([]);

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return router.replace("/login");
    },
  });

  useEffect(() => {
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
    fetchArticles();
  }, []);

  async function postCreateArticleTemplate() {
    setLoading(true);

    try {
      const article = {
        id: uuidv4(),
        title: "Artigo-#" + articles.length,
        author: "Darlley Brasil de Brito Furtado",
        htmlContent: "<h1>Novo artigo</h1>",
        mdContent: "# Novo artigo",
        textContent: "Novo artigo",
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
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const isIndeterminate =
      selectedArticle.length > 0 && selectedArticle.length < articles.length;
    setChecked(selectedArticle.length === articles.length && articles.length != 0);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedArticle]);

  function toggleAll() {
    setSelectedArticle(checked || indeterminate ? [] : articles);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  async function deleteArticle(articlesFromDelete) {
    try {
      articlesFromDelete.map(async (currentArticle) => {
        const response = await fetch(URL_API, {
          method: "DELETE",
          body: JSON.stringify({
            id: currentArticle.id
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (response.ok) {
          setArticles((prev) => prev.filter((currentPrev) => {
            if(currentPrev.id === currentArticle.id){
              return false
            }

            return true
          }));
        }
      })

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <HeaderPage>
        <div className="flex flex-col items-center gap-2">
          <h1>Meu artigos</h1>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => signOut()}
              className="rounded bg-red-50 px-2 py-1 text-xs font-semibold text-red-600 shadow-sm hover:bg-red-100"
            >
              Sair de {session?.user?.email}
            </button>
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
                      <button
                        type="button"
                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteArticle(selectedArticle)}
                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
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
                      {articles.length <= 0 ? (
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
                          {articles.map((article) => (
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
                                <a href="" target="_blank">{article.title.slice(0, 30)}</a>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {article.textContent.slice(0, 20)}...
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Publish
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                16/06/1998 15:20
                              </td>
                              <td className="whitespace-nowrap gap-2 flex py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                <a
                                  href="#"
                                  className="text-blue-500 hover:text-blue-900"
                                >
                                  Editar
                                </a>
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
