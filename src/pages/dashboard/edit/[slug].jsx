import { useSession, signIn, signOut } from "next-auth/react";
import HeaderPage from "@/components/molecules/HeaderPage";
import { useRouter } from "next/router";

import { Editor } from "novel";
import { useEffect, useState } from "react";

const URL_API = "/api/articles";

export default function EditArticlePage() {
  const { query } = useRouter();

  const [article, setArticle] = useState(null);
  const [title, setTitle] = useState('Artigo');

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return router.replace("/login");
    },
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(URL_API);
        const data = await res.json();

        if (!data) throw "Missing data...";


        const ALL_ARTICLES = data.articles;
        const article = ALL_ARTICLES.filter((currentArticle) => {
          if(currentArticle.id === query.slug){
            return true
          }
          return false
        })[0];

        console.log("article", article)

        setArticle(article);
        setTitle(article.title)
      } catch (error) {
        console.log(error);
      }
    };
    fetchArticles();
  }, []);

  function updateArticle(event){
    console.log(title, event.getHTML())
    console.log(title, event.getJSON())
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
            <a
              className="rounded bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600 shadow-sm hover:bg-blue-100"
            >
              Salvar
            </a>
          </div>
        </div>
      </HeaderPage>
      <main className="relative flex h-[calc(100vh-242.59px)] overflow-y-auto p-4 flex-1 flex-col md:flex-col justify-center py-12 sm:px-6 lg:px-8">
        {article && article !== null &&
          <Editor
            className="absolute top-0"
            disableLocalStorage={true}
            defaultValue={article.mdContent}
            onUpdate={(event) => updateArticle(event)}
          />
        }
      </main>
    </>
  );
}
