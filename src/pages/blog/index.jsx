import HeaderPage from "@/components/molecules/HeaderPage";
import Metadata from "@/components/molecules/Metadata";
import Link from "next/link";
import { useEffect, useState } from "react";

const metadata = {
  title: "Darlley - Blog",
  description: "Um blog de pensamentos sobre tecnologia e filosofia.",
  image: "/lotr-1440x522.png"
}

const URL_API = '/api/notion'

function Blog () {
  const [loading, setLoading] = useState(false)
  const [articles, setArticles] = useState([])

  const fetchArticles = async () => {
    try {
      setLoading(true)

      const res = await fetch(URL_API)
      const data = await res.json()

      if(!data) throw "Missing data..."

      setArticles(data)

    } catch(error){
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  const frases = [
    'O problema do mundo de hoje é que as pessoas inteligentes estão cheias de dúvidas, e as pessoas idiotas estão cheias de certezas. — Bertrand Russell',
    'O que eu conheço é uma gota, o que ignoro é um oceano. — Sr. Isaac Newton'
  ]

  console.log(loading, articles)

  return (
    <>
      <Metadata metadata={metadata} />
      <HeaderPage thumbnail="/lotr-1440x522.png">
        <h1>Artigos</h1>

        <div className="citation">
          <p>"O problema do mundo de hoje é que as pessoas inteligentes estão cheias de dúvidas, e as pessoas idiotas estão cheias de certezas". — Bertrand Russell</p>
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
                    <span className="font-mono text-xs text-slate-500">{article.date}</span>
                    <div className="flex items-start justify-between w-full">
                      <h3 className="w-full">
                        <Link href={`/blog/${article.slug}`} className="flex py-2 text-lg font-bold text-slate-800 hover:text-primary-500">
                          {article.title}
                        </Link>
                      </h3>
                      {article.thumbnail && 
                      <div className="flex flex-col items-end justify-end gap-4 w-max">
                        <div className="w-[60px] h-[60px]">
                          <img src={article.thumbnail} alt="thumbnail" />
                        </div>
                        <span className="font-mono text-xs text-right text-slate-500 w-max"><a href={article.url} target="_blank">Read in Notion</a></span>
                      </div>
                      }
                    </div>
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
