
import HeaderPage from "@/components/molecules/HeaderPage";
import Metadata from "@/components/molecules/Metadata";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";


const metadata = {
  title: "Darlley - Blog",
  description: "Um blog de pensamentos sobre tecnologia e filosofia.",
  image: "https://www.darlley.dev/lotr-1440x522.png"
}

const URL_API = "/api/articles";


function Blog () {
  const router = useRouter();

  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState([])

  const { data: session } = useSession();

  async function getArticles(){
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
    
    if(session){
      console.log("esta executando quando esta logado")

      const articles_from_localstorage = JSON.parse(localStorage.getItem("articles"));

      if(articles_from_localstorage && articles_from_localstorage?.length > 0){
        if(articles.length > 0){
          articles_from_localstorage.map((currentStorageArticle) => {
            if(!articles.includes(currentStorageArticle)){
              setArticles((prev) => [currentStorageArticle, ...prev])
            }
          })
        }else{
          setArticles(articles_from_localstorage);
        }

        console.log('articles', articles)
      }

    }
  }

  useEffect(() => {
    getArticles()
  }, [session]);

  return (
    <>
      <Metadata metadata={metadata} />
      <HeaderPage thumbnail="/lotr-1440x522.png">
        <h1>Artigos</h1>

        <div className="citation">
          <p>"O problema do mundo de hoje é que as pessoas inteligentes estão cheias de dúvidas, e as pessoas idiotas estão cheias de certezas".<br />— Bertrand Russell</p>
        </div>
      </HeaderPage>
      <main className="app__content">
        <div className="content__about">
          <h3>Artigos mais recentes</h3>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          </button>
        </div>

        <div className="articles__container">
          {loading || articles.length <= 0 ?
            <div className="w-full text-center">
              <h4 className="text-lg text-slate-500">Artigos em breve 🔥</h4>
            </div> :
            <ul className="articles">
              {articles.map((article) => (
                <li className="article" key={article.id}>
                  <div className="flex flex-col w-full ">
                    <span className="font-mono text-xs text-slate-500">{article.created_at}</span>
                    <div className="flex items-start justify-between w-full">
                      <h3 className="w-full">
                        <Link href={`/blog/${article.id}`} className="flex py-2 text-lg font-bold text-slate-800 hover:text-primary-500">
                          {article.title}
                        </Link>
                      </h3>
                    </div>
                    <p>{article?.htmlContent?.replace(/<.*?>/g, "").slice(0, 120)}...</p>
                  </div>
                </li>)
              )}
            </ul>
          }
        </div>
      </main>
    </>
  )
}

export default Blog;
