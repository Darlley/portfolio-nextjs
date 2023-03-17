import HeaderPage from '@/components/molecules/HeaderPage'
import { useRouter } from 'next/router'

export async function getStaticPaths(ctx) {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps(){
  const router = useRouter()
  const slug = router.query.slug
  const data = await fetch(`https://www.darlley.dev/api/notion/${slug}`)
  const article = await data.json()
  
  return {
    props: {
      article
    }
  }
}

const ArticlePage = ({article}) => {

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
      <HeaderPage thumbnail={article.thumbnail}>
        <h1>{article.title}</h1>
      </HeaderPage>
      <main className="app__content">
        <div className="articles__container">
          <div className="articles">
            <div className="article">
              <p>{article.content}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ArticlePage
