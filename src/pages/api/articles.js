import { read, create } from "../../../core/crud";

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

  if( request.method === "POST" ) {
    const body = request.body;

    if (!body.id) {
      return response.status(400).json({
        message: "You need to provide a content to create a Todo.",
      });
    }

    const createdArticle = await createArticle(request.body);

    console.log('create')

    response.status(201).json({
      article: createdArticle,
    });

    return;
  }

  const METHOD = request.method;
  return response.status(405).json({
    message: `${METHOD} Method Not Allowed`,
  });
}
