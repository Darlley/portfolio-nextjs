import { useSession, signIn, signOut } from "next-auth/react";
import HeaderPage from "@/components/molecules/HeaderPage";
import { useRouter } from "next/router";

import { Editor } from "novel";
import { useEffect, useLayoutEffect, useState } from "react";

const URL_API = "/api/articles";

export default function EditArticlePage() {
  const { query } = useRouter();

  const [article, setArticle] = useState(null);
  const [title, setTitle] = useState('Artigo');

  const [mdContent, setMdContent] = useState({})
  const [htmlContent, setHtmlContent] = useState('')
  const [textContent, setTextContent] = useState('')

  useSession({
    required: true,
    onUnauthenticated() {
      return router.replace("/login");
    },
  });

  async function fetchArticles () {
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
  };

  useEffect(() => {
    fetchArticles();
  }, [query.slug]);

  function setContent(event){
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

    try {
      const response = await fetch(URL_API, {
        method: "PUT",
        body: JSON.stringify(updatedArticle),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (response.ok) {
        console.log(response)
        fetchArticles();
      }

    } catch (error) {
      console.log(error);
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
              className="rounded block bg-blue-500 px-2 py-1 text-xs font-semibold text-blue-600 shadow-sm hover:bg-blue-100"
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
