import fs from "fs";
import { randomUUID } from "crypto";

const DB_FILE_PATH = "./core/db";
type UUID = string;

interface Article {
  id: UUID;
  title: string;
  htmlContent: string;
  mdContent: object;
  textContent: string;
  author: string;
  created_at: string;
  updated_at: string;
}

function WRITE_FILE(articles: Array<Article>) {
  fs.writeFileSync(
    DB_FILE_PATH,
    JSON.stringify(
      {
        articles,
      },
      null,
      2
    )
  );
}

export function create(content: Article): Article {

  const newArticle: Article = content;

  const articles: Array<Article> = [...read(), newArticle];

  WRITE_FILE(articles);

  return newArticle;
}

export function read(): Array<Article> {
  const response = fs.readFileSync(DB_FILE_PATH,  'utf-8');
  const data = JSON.parse(response || '{}');

  if (!data.articles) {
    return []; // Fail Fast Validation
  }

  return data?.articles;
}

export function update(id: UUID, partialArticle: Partial<Article>) {
  let updated_article;
  const ALL_ARTICLES = read();

  ALL_ARTICLES.forEach((currentArticle) => {
    if (currentArticle.id === id) {
      updated_article = Object.assign(currentArticle, {
        ...partialArticle,
        updated_at: new Date().toISOString(),
      });
    }
  });


  WRITE_FILE(ALL_ARTICLES);

  if (!updated_article) {
    throw new Error("Please, provide another ID!");
  }

  return updated_article;
}

export function deleteById(id: UUID) {
  const articles = read();

  const articlesWithoutOne = articles.filter((currentArticle) => {
    if (currentArticle.id === id) {
      return false;
    }
    return true;
  });

  CLEAR_DB();

  WRITE_FILE(articlesWithoutOne);
}

function CLEAR_DB() {
  fs.writeFileSync(DB_FILE_PATH, "");
}
