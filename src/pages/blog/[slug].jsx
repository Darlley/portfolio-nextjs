import HeaderPage from '@/components/molecules/HeaderPage'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import { NotionRenderer } from "react-notion"
import Metadata from '@/components/molecules/Metadata';

import { Client } from '@notionhq/client'

// Inicialize o cliente do Notion com o seu token
const notion = new Client({ auth: process.env.NOTION_TOKEN })

const ArticlePage = ({article,metadata}) => {
  
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
      <Metadata metadata={metadata} />
      <HeaderPage thumbnail={article.thumbnail || ""}>
        <h1>{article.title}</h1>
      </HeaderPage>
      <main className="app__content">
        <div className="articles__container">
          <div className="articles">
            <div className="article">
              <NotionRenderer blockMap={article.blocks} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export async function getStaticPaths() {
  // Busque todos os artigos na API do Notion usando o id da sua base de dados
  const result = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  })

  // Mapeie os artigos para obter os slugs
  const paths = result.results.map((article) => ({
    params: { slug: article.properties.Slug.rich_text[0].text.content || "" },
  }))

  // Retorne o objeto com os paths
  return {
    paths,
    fallback: false, // ou true ou 'blocking'
  }
}

export async function getStaticProps({ params }) {
  // Obtenha o slug do artigo do parâmetro
  const { slug } = params

  // Busque os dados do artigo na API do Notion usando o slug como filtro
  const result = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: 'Slug',
      title: {
        equals: slug,
      },
    },
  })

  // Verifique se o artigo existe
  if (result.results.length === 0) {
    // Você pode retornar um erro ou uma página vazia aqui
    return {
      notFound: true,
    }
  }

  // Obtenha o primeiro artigo da resposta
  const article = result.results[0]

  // Busque os blocos do artigo na API do Notion usando o id do artigo
  const blockResponse = await fetch(
    `https://notion-api.splitbee.io/v1/page/${article.id}`
  ).then((res) => res.json())

  // Formate os dados do artigo como um objeto
  const articleData = {
    id: article.id,
    thumbnail: article.cover && article.cover.external.url || '',
    authors: article.properties.Authors.people[0],
    title: article.properties.Page.title[0].plain_text || '',
    published: article.properties.Published.checkbox,
    date: article.properties.Date.date.start,
    url: article.url || '',
    blocks: blockResponse,
  }

  // Formate os metadados do artigo como um objeto
  const metadata = {
    title: 'Darlley Brito - ' + articleData.title,
    description: '',
    image: articleData.thumbnail,
  }

  // Retorne os dados do artigo e os metadados como props para a página
  return {
    props: {
      article: articleData,
      metadata,
    },

    revalidate: 60 
  }
}

export default ArticlePage