import { useSession, signIn, signOut } from "next-auth/react";
import HeaderPage from "@/components/molecules/HeaderPage";
import Metadata from "@/components/molecules/Metadata";
import Login from "../login";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useRef, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";

const metadata = {
  title: "Darlley - Blog",
  description: "Um blog de pensamentos sobre tecnologia e filosofia.",
  image: "https://www.darlley.dev/lotr-1440x522.png",
};

const URL_API = "/api/articles";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  const checkbox = useRef()
  const [checked, setChecked] = useState(false)
  const [indeterminate, setIndeterminate] = useState(false)
  const [selectedArticle, setSelectedArticle] = useState([])

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

  useLayoutEffect(() => {
    const isIndeterminate = selectedArticle.length > 0 && selectedArticle.length < articles.length
    setChecked(selectedArticle.length === articles.length)
    setIndeterminate(isIndeterminate)
    checkbox.current.indeterminate = isIndeterminate
  }, [selectedArticle])

  function toggleAll() {
    setSelectedArticle(checked || indeterminate ? [] : articles)
    setChecked(!checked && !indeterminate)
    setIndeterminate(false)
  }


  return (
    <>
      <Metadata metadata={metadata} />
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
      <main className="flex h-[50svh] p-4 flex-1 justify-center py-12 sm:px-6 lg:px-8 relative">

        <div className="px-4 sm:px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-base font-semibold leading-6 text-gray-900">Artigos</h1>
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
                        Bulk edit
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center rounded bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-white"
                      >
                        Delete all
                      </button>
                    </div>
                  )}
                  <table className="min-w-full table-fixed divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                          <input
                            type="checkbox"
                            className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                            ref={checkbox}
                            checked={checked}
                            onChange={toggleAll}
                          />
                        </th>
                        <th scope="col" className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                          Title
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Author
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Content
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Status
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                         Data
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                          <span className="sr-only">Edit</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {articles.map((article) => (
                        <tr key={article.id} className={selectedArticle.includes(article) ? 'bg-gray-50' : undefined}>
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
                                    : selectedArticle.filter((p) => p !== article)
                                )
                              }
                            />
                          </td>
                          <td
                            className={classNames(
                              'whitespace-nowrap py-4 pr-3 text-sm font-medium',
                              selectedArticle.includes(article) ? 'text-blue-600' : 'text-gray-900'
                            )}
                          >
                            {article.title.slice(0,30)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{article.author.slice(0,12)}</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{article.textContent.slice(0,20)}...</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">Publish</td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">16/06/1998 15:20</td>
                          <td className="whitespace-nowrap gap-2 flex py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                            <a href="#" className="text-blue-500 hover:text-blue-900">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                              </svg>
                            </a>
                            <a href="#" className="text-red-500 hover:text-red-900">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                              </svg>
                            </a>
                          </td>
                        </tr>
                      ))}
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
