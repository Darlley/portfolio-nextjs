import { useSession, signIn, signOut } from "next-auth/react";
import HeaderPage from "@/components/molecules/HeaderPage";
import { useRouter } from "next/router";

import { Editor } from "novel";
import { useEffect, useLayoutEffect, useState } from "react";

const CREDENTIAL_USER_EMAIL = process.env.NEXT_PUBLIC_CREDENTIAL_USER_EMAIL
const URL_API = "/api/articles";

export default function EditArticlePage() {
  const { query } = useRouter();
  const [isAdmin, setIsAdmin] = useState(false)

  const [article, setArticle] = useState(null);
  const [title, setTitle] = useState('Artigo');

  const [mdContent, setMdContent] = useState({})
  const [htmlContent, setHtmlContent] = useState('')
  const [textContent, setTextContent] = useState('')

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return router.replace("/login");
    },
  });

  useEffect(() => {
    setIsAdmin(session?.user?.role === "admin")
  }, [session]);

  async function fetchArticles () {
    if(isAdmin){
      try {
        const res = await fetch(URL_API);
        const data = await res.json();

        if (!data) throw "Missing data...";

        const ALL_ARTICLES = data.articles;
        const find_article = ALL_ARTICLES.filter((currentArticle) => {
          if(currentArticle.id === query.slug){
            return true
          }
          return false
        })[0];

        setArticle(find_article);
        setTitle(find_article.title)
        setMdContent(find_article.mdContent)
        setHtmlContent(find_article.htmlContent)
        setTextContent(find_article.textContent)

      } catch (error) {
        console.log(error);
      }

      return
    }

    const articles_from_localstorage = JSON.parse(localStorage.getItem("articles"));

    if(articles_from_localstorage && articles_from_localstorage?.length > 0){
      const ALL_ARTICLES = articles_from_localstorage;
      const find_article = ALL_ARTICLES.filter((currentArticle) => {
        if(currentArticle.id === query.slug){
          return true
        }
        return false
      })[0];

      setArticle(find_article);
      setTitle(find_article?.title)
      setMdContent(find_article?.mdContent)
      setHtmlContent(find_article?.htmlContent)
      setTextContent(find_article?.textContent)
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [query.slug]);

  function setContent(event){
    console.log('editando')
    setMdContent(event.getJSON())
    setHtmlContent(event.getHTML())
    setTextContent(event.getHTML().replace (/<.*?>/g, ""))
  }

  async function updateArticle(event) {
    const updatedArticle = {
      ...article,
      title,
      "htmlContent": htmlContent ,
      "mdContent": mdContent,
      "textContent": textContent,
    }

    if(isAdmin){
      try {
        const response = await fetch(URL_API, {
          method: "PUT",
          body: JSON.stringify(updatedArticle),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        if (response.ok) {
          fetchArticles();
        }

      } catch (error) {
        console.log(error);
      }
    }

    const articles_from_localstorage = JSON.parse(localStorage.getItem("articles"));

    if(articles_from_localstorage && articles_from_localstorage?.length > 0){
      const ALL_ARTICLES = articles_from_localstorage;
      const new_list = ALL_ARTICLES.map((currentArticle) => {
        if(currentArticle.id === article.id){
          return updatedArticle
        }

        return currentArticle
      });

      localStorage.setItem("articles", JSON.stringify(new_list));

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
          className="bg-transparent text-white border-none ring-0 outline-0 text-2xl font-bol text-center ring-none outline-none"
          />

          <div className="flex gap-2">
            <a
              href="/dashboard"
              className="rounded px-2 py-1 text-xs font-semibold text-white shadow-sm "
            >
              Voltar
            </a>
            <button
              type="button"
              onClick={updateArticle}
              className="rounded block bg-blue-300 px-2 py-1 text-xs font-semibold text-blue-600 shadow-sm hover:bg-blue-100"
            >
              Salvar
            </button>
          </div>
        </div>
      </HeaderPage>
      <main className="relative flex h-[calc(100vh-242.59px)] overflow-y-auto p-4 flex-1 flex-col md:flex-col justify-center py-12 sm:px-6 lg:px-8">
      {article && article.mdContent && // adicione essa condição
          <Editor
            className="absolute top-0"
            disableLocalStorage={true}
            defaultValue={article.mdContent}
            onUpdate={(event) => setContent(event)}
          />
        }
      </main>
    </>
  );
}
