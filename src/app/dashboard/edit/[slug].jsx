'use client'

import { useSession } from "next-auth/react";
import HeaderPage from "@/components/molecules/HeaderPage";
import { useRouter } from "next/router";
import { Menu, RadioGroup, Switch, Transition } from "@headlessui/react";

import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { XMarkIcon } from '@heroicons/react/20/solid'

import { Editor } from "novel";
import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDownIcon } from "@radix-ui/react-icons";

const URL_API = "/api/articles";

const settings = [
  { name: 'Acesso público', description: 'Este artigo esta avaliado para todos poderem acessar com o link', published: true },
  { name: 'Acesso privado', description: 'Somente você e mais ninguém tem acesso a este artigo', 'published': false},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function EditArticlePage() {
  const { query } = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  const [article, setArticle] = useState(null);
  const [title, setTitle] = useState("Artigo");


  const [mdContent, setMdContent] = useState({});
  const [htmlContent, setHtmlContent] = useState("");

  const [selected, setSelected] = useState(settings[0]);
  const [isSavedNotificationShow, setIsSavedNotificationShow] = useState(false)

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return router.replace("/login");
    },
  });

  useEffect(() => {
    setIsAdmin(session?.user?.role === "admin");
  }, [session]);

  async function fetchArticles() {
    if (isAdmin) {
      try {
        const res = await fetch(URL_API);
        const data = await res.json();

        if (!data) throw "Missing data...";

        const ALL_ARTICLES = data.articles;
        const find_article = ALL_ARTICLES.filter((currentArticle) => {
          if (currentArticle.id === query.slug) {
            return true;
          }
          return false;
        })[0];

        setArticle(find_article);
        setTitle(find_article?.title);
        setMdContent(find_article?.mdContent);
        setHtmlContent(find_article?.htmlContent);

        if(find_article.published){
          setSelected(settings[0]);
        }else{
          setSelected(settings[1]);
        }
      } catch (error) {
        console.log(error);
      }

      return;
    }

    const articles_from_localstorage = JSON.parse(
      localStorage.getItem("articles")
    ) ?? [];

    if (articles_from_localstorage && articles_from_localstorage?.length > 0) {
      const ALL_ARTICLES = articles_from_localstorage;
      const find_article = ALL_ARTICLES.filter((currentArticle) => {
        if (currentArticle.id === query.slug) {
          return true;
        }
        return false;
      })[0];

      setArticle(find_article);
      setTitle(find_article?.title);
      setMdContent(find_article?.mdContent);
      setHtmlContent(find_article?.htmlContent);
      if(find_article?.published){
        setSelected(settings[0]);
      }else{
        setSelected(settings[1]);
      }
    }
  }

  useEffect(() => {
    fetchArticles();
  }, [query.slug, isAdmin]);

  function setContent(event) {
    setMdContent(event.getJSON());
    setHtmlContent(event.getHTML());
  }

  async function updateArticle(event) {
    const updatedArticle = {
      ...article,
      title,
      published: selected.published,
      htmlContent: htmlContent,
      mdContent: mdContent,
    };

    if (isAdmin) {
      try {
        const response = await fetch(URL_API, {
          method: "PUT",
          body: JSON.stringify(updatedArticle),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (response.ok) {
          setIsSavedNotificationShow(true)
          fetchArticles();
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsSavedNotificationShow(false)
        }, 3000)
      }
    }

    const articles_from_localstorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articles_from_localstorage && articles_from_localstorage?.length > 0) {
      const ALL_ARTICLES = articles_from_localstorage;
      const new_list = ALL_ARTICLES.map((currentArticle) => {
        if (currentArticle.id === article.id) {
          return updatedArticle;
        }

        return currentArticle;
      });

      localStorage.setItem("articles", JSON.stringify(new_list));

      setIsSavedNotificationShow((prev) => {
        setTimeout(() => {
          setIsSavedNotificationShow(false)
        }, 3000)

        return true
      })
    }
  }

  return (
    <>
      <HeaderPage>
        <div className="flex flex-col items-center gap-2 w-full text-center">
          <input
            type="text"
            name=""
            id=""
            defaultValue={title}
            onChange={(event) => setTitle(event.target.value)}
            className="bg-transparent text-white w-10/12 border-none ring-0 outline-0 text-2xl font-bol text-center ring-none outline-none"
          />

          <div className="flex gap-2 items-center">
            <Link
              href="/dashboard"
              className="rounded px-2 py-1 text-xs font-semibold hover:underline text-white shadow-sm "
            >
              Voltar
            </Link>

            <Menu as="div" className="relative inline-block text-left w-max z-10">
              <div>
                <Menu.Button className="flex w-max justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                  Configurar
                  <ChevronDownIcon
                    className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 z-20 w-max origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <RadioGroup value={selected} onChange={setSelected}>
                      <RadioGroup.Label className="sr-only">
                        Configurações de privacidade
                      </RadioGroup.Label>
                      <div className="-space-y-px rounded-md bg-white">
                        {settings.map((setting, settingIdx) => (
                          <RadioGroup.Option
                            key={setting.name}
                            value={setting}
                            className={({ checked }) =>
                              classNames(
                                settingIdx === 0
                                  ? "rounded-tl-md rounded-tr-md"
                                  : "",
                                settingIdx === settings.length - 1
                                  ? "rounded-bl-md rounded-br-md"
                                  : "",
                                checked
                                  ? "z-10 border-blue-200 bg-blue-50"
                                  : "border-gray-200",
                                "relative flex cursor-pointer border p-4 focus:outline-none"
                              )
                            }
                          >
                            {({ active, checked }) => (
                              <>
                                <span
                                  className={classNames(
                                    checked
                                      ? "bg-blue-600 border-transparent"
                                      : "bg-white border-gray-300",
                                    active
                                      ? "ring-2 ring-offset-2 ring-blue-600"
                                      : "",
                                    "mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-full border flex items-center justify-center"
                                  )}
                                  aria-hidden="true"
                                >
                                  <span className="rounded-full bg-white w-1.5 h-1.5" />
                                </span>
                                <span className="ml-3 flex flex-col">
                                  <RadioGroup.Label
                                    as="span"
                                    className={classNames(
                                      checked
                                        ? "text-blue-900"
                                        : "text-gray-900",
                                      "block text-sm font-medium"
                                    )}
                                  >
                                    {setting.name}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className={classNames(
                                      checked
                                        ? "text-blue-700"
                                        : "text-gray-500",
                                      "block text-sm"
                                    )}
                                  >
                                    {setting.description}
                                  </RadioGroup.Description>
                                </span>
                              </>
                            )}
                          </RadioGroup.Option>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>

            <button
              disabled={isSavedNotificationShow}
              onClick={updateArticle}
              className="rounded bg-blue-100 inline-block px-2 py-1 text-xs font-semibold text-blue-600 disabled:bg-gray-200 disabled:text-gray-400 hover:text-blue-100 shadow-sm hover:bg-blue-500 transition-colors"
            >
              Salvar
            </button>
          </div>
        </div>
      </HeaderPage>
      <main className="relative flex h-[calc(100vh-242.59px)] overflow-y-auto p-4 flex-1 flex-col md:flex-col justify-center py-12 sm:px-6 lg:px-8">
        {article &&
          article.mdContent && ( // adicione essa condição
            <Editor
              className="absolute top-0"
              disableLocalStorage={true}
              defaultValue={article.mdContent}
              onUpdate={(event) => setContent(event)}
            />
          )}
      </main>

      {/* notificação ao salvar */}
      <div
        aria-live="assertive"
        className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
      >
        <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
          {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
          <Transition
            show={isSavedNotificationShow}
            as={Fragment}
            enter="transform ease-out duration-300 transition"
            enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
            enterTo="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="p-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                  </div>
                  <div className="ml-3 w-0 flex-1 pt-0.5">
                    <p className="text-sm font-medium text-gray-900">Salvo com sucesso! </p>
                    <p className="mt-1 text-sm text-gray-500">Seu arquivo foi atualizado.</p>
                  </div>
                  <div className="ml-4 flex flex-shrink-0">
                    <button
                      type="button"
                      className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      onClick={() => {
                        setIsSavedNotificationShow(false)
                      }}
                    >
                      <span className="sr-only">Close</span>
                      <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </>
  );
}
