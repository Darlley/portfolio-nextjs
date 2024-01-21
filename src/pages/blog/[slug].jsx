import HeaderPage from '@/components/molecules/HeaderPage'
import "prismjs/themes/prism-tomorrow.css";
import Metadata from '@/components/molecules/Metadata';

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import {useEffect, useState } from "react";
import DOMPurify from 'dompurify';

const URL_API = "/api/articles";

const ArticlePage = () => {

  const { query } = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  const [article, setArticle] = useState(null);
  const [title, setTitle] = useState("Artigo");

  const [mdContent, setMdContent] = useState({});
  const [htmlContent, setHtmlContent] = useState("");

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      return router.replace("/login");
    },
  });

  useEffect(() => {
    setIsAdmin(session?.user?.role === "admin");
  }, [session]);

  async function fetchArticles() {
    if (isAdmin) {
      try {
        const res = await fetch(URL_API);
        const data = await res.json();

        if (!data) throw "Missing data...";

        const ALL_ARTICLES = data.articles;
        const find_article = ALL_ARTICLES.filter((currentArticle) => {
          if (currentArticle.id === query.slug) {
            return true;
          }
          return false;
        })[0];

        setArticle(find_article);
        setTitle(find_article?.title);
        setMdContent(find_article?.mdContent);
        setHtmlContent(find_article?.htmlContent);

      } catch (error) {
        console.log(error);
      }

      return;
    }

    const articles_from_localstorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articles_from_localstorage && articles_from_localstorage?.length > 0) {
      const ALL_ARTICLES = articles_from_localstorage;
      const find_article = ALL_ARTICLES.filter((currentArticle) => {
        if (currentArticle.id === query.slug) {
          return true;
        }
        return false;
      })[0];

      setArticle(find_article);
      setTitle(find_article?.title);
      setMdContent(find_article?.mdContent);
      setHtmlContent(find_article?.htmlContent);
    }
  }

  useEffect(() => {
    fetchArticles();
  }, [query.slug, isAdmin]);

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
      <HeaderPage>
        <h1>{article.title}</h1>
      </HeaderPage>
      <main className="app__content">
        <div className="articles__container">
          <div className="articles">
            <div className="article">
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(article.htmlContent)
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
export default ArticlePage
