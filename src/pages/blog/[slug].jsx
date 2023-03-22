import HeaderPage from '@/components/molecules/HeaderPage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const ArticlePage = ({article}) => {
  // const router = useRouter()
  // const slug = router.query.slug

  // const [loading, setLoading] = useState(false)
  // const [article, setArticle] = useState([])

  // const fetchArticle = async () => {
  //   try {
  //     setLoading(true)

  //     const res = await fetch(`/api/notion/${slug}`, {
  //       method: 'GET',
  //       mode: 'no-cors'
  //     })
  //     const data = await res.json()

  //     if(!data) throw "Missing data..."

  //     setArticle(data)

  //   } catch(error){
  //     console.log(error)
  //   } finally {
  //     setLoading(false)
  //   }
  // }

  // useEffect(() => {
  //   fetchArticle()
  // }, [])

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

export async function getStaticProps({ params }) {
  const BASE_FETCH_URL = process.env.BASE_FETCH_URL
  // Buscar os dados do artigo usando o valor de slug
  const res = await fetch(`${BASE_FETCH_URL}/api/notion/${params.slug}`)
  const article = await res.json()

  // Retornar os dados do artigo como props
  return {
    props: {
      article,
    },
    // Revalidar os dados a cada hora para atualizar o conteúdo estático
    // revalidate: 3600,
  }
}

export async function getStaticPaths() {
  try {
    // Buscar todos os slugs dos artigos disponíveis
    const res = await fetch('/api/notion').then((articles) => articles.json())
    const slugs = await res.slug

    // Retornar os paths com os valores de slug e o fallback como true
    return {
      paths: slugs.map((slug) => ({
        params: { slug },
      })),
      fallback: true,
    }
  } catch(error){
    console.log(error)
  } 
  
  console.log('error')
  // Retornar os paths com os valores de slug e o fallback como true
  return {
    paths: [],
    fallback: 'blocking',
  }
}