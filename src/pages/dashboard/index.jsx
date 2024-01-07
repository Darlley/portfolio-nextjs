import { useSession, signIn, signOut } from "next-auth/react";
import HeaderPage from "@/components/molecules/HeaderPage";
import Metadata from "@/components/molecules/Metadata";
import Login from "../login";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const metadata = {
  title: "Darlley - Blog",
  description: "Um blog de pensamentos sobre tecnologia e filosofia.",
  image: "https://www.darlley.dev/lotr-1440x522.png",
};

const URL_API = '/api/articles'

export default function Dashboard() {
  const router = useRouter();

  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState([])

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return router.replace("/login");
    },
  });

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true)

        const res = await fetch(URL_API)
        const data = await res.json()

        if(!data) throw "Missing data..."

        setArticles(data.articles)

      } catch(error){
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    fetchArticles()
  }, [articles])

  async function postCreateArticleTemplate() {

    setLoading(true)

    try {
      const article = {
        id: uuidv4(),
        title: "Artigo-#"+articles.length,
        author: "Darlley Brasil de Brito Furtado",
        htmlContent: "<h1>Novo artigo</h1>",
        mdContent: "# Novo artigo",
        textContent: "Novo artigo",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const response = await fetch(URL_API, {
        method: 'POST',
        body: JSON.stringify(article),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })

      console.log(response)

      if(response.ok){
        setArticles((prev) => [
          ...prev,
          article
        ])
      }

    } catch(error){
      console.log(error)
    } finally {
      setLoading(false)
    }
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
            <button
              type="button"
              className="rounded bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
              onClick={postCreateArticleTemplate}
            >
              Criar novo artigo
            </button>
          </div>
        </div>
      </HeaderPage>
      <main className="flex h-[50svh] p-4 flex-1 justify-center py-12 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col">
          {articles.map((currentArticle) => (
            <p key={currentArticle.id}>{currentArticle.title}</p>
          ))}
        </div>
      </main>
    </>
  );
}
