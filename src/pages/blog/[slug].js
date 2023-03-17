import HeaderPage from '@/components/molecules/HeaderPage'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

const ArticlePage = () => {
  const router = useRouter()
  const [articleData, setArticleData] = useState(null)
  const [thumbnail, setThumbnail] = useState(null)

  const {slug} = router.query

  useEffect(() => {
    const fetchArticleData = async () => {
      const res = await fetch(`/api/notion/${slug}`)
      const data = await res.json()
      setArticleData(data)
      setThumbnail(data.thumbnail)
    }
    fetchArticleData()
  }, [slug])

  if (!articleData) {
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
      <HeaderPage thumbnail={thumbnail}>
        <h1>{articleData.title}</h1>
      </HeaderPage>
      <main className="app__content">
        <div className="articles__container">
          <div className="articles">
            <div className="article">
              <p>{articleData.content}</p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ArticlePage
