import { getServerSession } from "next-auth/next"

import { read, create, deleteById as dbDeleteById, update } from "../../../core/crud";

export default async function handler(request, response) {
  async function get({page,limit}) {
    const currentPage = page || 1;
    const currentLimit = limit || 10;
    const ALL_ARTICLES = read().reverse();

    const startIndex = (currentPage - 1) * currentLimit;
    const endIndex = currentPage * currentLimit;
    const paginatedArticles = ALL_ARTICLES.slice(startIndex, endIndex);
    const totalPages = Math.ceil(ALL_ARTICLES.length / currentLimit);

    return {
      total: ALL_ARTICLES.length,
      articles: paginatedArticles,
      pages: totalPages,
    };
  }

  async function createArticle(content) {
    return create(content);
  }

  async function deleteById(id) {
    try {
      const ALL_ARTICLES = read();
      const article = ALL_ARTICLES.find((article) => article.id === id);

      if (!article) {
          throw new Error(`Todo with id "${id}" not found!`);
      }

      dbDeleteById(id);

      response.status(204).end();
    } catch (error) {
      return response.status(error.status).json({
        message: error.message
      });
    }

    return response.status(500).json({
      message: `Internal server error`,
    });
}

async function updateArticle(request, response) {
  const {id} = request.body

  try {
    const ALL_ARTICLES = read();
    const article = ALL_ARTICLES.find((article) => article.id === id);

    if (!article) {
        throw new Error(`Todo with id "${id}" not found!`);
    }

    const updatedArticle = update(article.id, {
      ...request.body
    });

    return response.status(200).json({
      article: updatedArticle,
    });
  } catch (error) {
      if (error instanceof Error) {
          return response.status(404).json({
            message: error.message + " :(",
          });
      }
  }
}

  if( request.method === "GET" ) {

    const query = request.query;
    const page = Number(query.page);
    const limit = Number(query.limit);

    const output = await get({ page, limit });

    return response.status(200).json({
      total: output.total,
      pages: output.pages,
      articles: output.articles,
    });
  }

  const session = await getServerSession(request, response );

  if(!session) {
    return response.status(400).json({
      message: "Você precisa fazer login.",
    });
  }

  if( request.method === "POST" ) {
    const body = request.body;

    if (!body.id) {
      return response.status(400).json({
        message: "You need to provide a content to create a Article.",
      });
    }

    const createdArticle = await createArticle(request.body);

    response.status(201).json({
      article: createdArticle,
    });

    return;
  }

  if (request.method === "DELETE") {

    if (!request.body) {
      return response.status(400).json({
        message: "You need to provide a id to create a Article.",
      });
    }
    const {id} = request.body;

    await deleteById(id);
  }

  if (request.method === "PUT") {
    const article_id = request.body.id;

    if (!article_id || typeof article_id !== "string") {
      response.status(400).json({
        message: "You must to provide a string ID.",
      });

      return;
    }

    await updateArticle(request, response)
  }

  const METHOD = request.method;
  return response.status(405).json({
    message: `${METHOD} Method Not Allowed`,
  });
}
