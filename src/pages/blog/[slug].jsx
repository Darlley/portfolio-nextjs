import HeaderPage from '@/components/molecules/HeaderPage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ArticlePage = () => {
  const [article, setarticle] = useState([])
  const router = useRouter()
  const { slug } = router.query
  
  async function fetchArticle(){
    const req = await fetch(`/api/notion/${slug}`)
    const res = await req.json()
    setarticle(res)
  }
  useEffect(() => {
    fetchArticle()
  }, [])
  
  if (!article) {
    return (
      <>
      <HeaderPage>
        <h1>Calma ai 🦄</h1>
      </HeaderPage>
      <main className="app__content">
        <div className="articles__container">
          <div className="articles">
            <div className="article">
              <div>Carregando...</div>
            </div>
          </div>
        </div>
      </main>
      </>
    )
  }
  
  return (
    <>
      <HeaderPage thumbnail={article.thumbnail || ""}>
        <h1>{article.title}</h1>
      </HeaderPage>
      <main className="app__content">
        <div className="articles__container">
          <div className="articles">
            <div className="article">
              <p className="whitespace-pre-wrap">{article.content}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ArticlePage

// export async function getStaticProps({ params }) {
  
//   const res = await fetch(`/api/notion/${params.slug}`)
//   const article = await res.json()

//   if (!article) {
//     return {
//       notFound: true,
//     }
//   }
  
//   return {
//     props: {
//       article,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const BASE_FETCH_URL = process.env.BASE_FETCH_URL
//   try {
//     const res = await fetch(`${BASE_FETCH_URL}/api/notion`)
//     const articles = await res.json()

//     return {
//       paths: articles.map((article) => `/blog/${article.slug}`),
//       fallback: true,
//     }
//   } catch(error){
//     console.error('error: ' + error)
//   }
  
//   // Retornar os paths com os valores de slug e o fallback como true
//   return {
//     paths: [],
//     fallback: "blocking"
//   }
// }