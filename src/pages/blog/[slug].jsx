import HeaderPage from '@/components/molecules/HeaderPage'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { NotionRenderer } from "react-notion"
// import { blocksToReactComponents } from 'notion-blocks-react-renderer'
// import { NotionRenderer } from 'react-notion-x'

const ArticlePage = () => {
  const [article, setArticle] = useState()
  const router = useRouter()
  const { slug } = router.query
  
  useEffect(() => {
    async function postArticle(){
      const req = await fetch(`/api/notion/${slug}`)
      const res = await req.json()
      setArticle(res)
    }
    postArticle()
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
              <NotionRenderer blockMap={article.blocks} />
              {/* {blocksToReactComponents(article.content)} */}
              {/* <NotionRenderer recordMap={article.content} /> */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default ArticlePage