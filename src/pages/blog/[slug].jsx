import HeaderPage from '@/components/molecules/HeaderPage'
import { useRouter } from 'next/router'

const ArticlePage = ({article}) => {
  const router = useRouter()
  const slug = router.query.slug
  
  const [loading, setLoading] = useState(false)
  const [article, setArticle] = useState([])

  // const fetchArticle = async () => {
  //   try {
  //     setLoading(true)

  //     const res = await fetch(`http://localhost:3000/api/notion/${slug}`, {
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

  if (loading) {
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
