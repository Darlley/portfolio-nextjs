import { getServerSession } from "next-auth/next";

import {
  read,
  create,
  deleteById as dbDeleteById,
  update,
} from "../../../../core/crud";
import { NextRequest, NextResponse } from "next/server";

const CREDENTIAL_USER_EMAIL = process.env.NEXT_PUBLIC_CREDENTIAL_USER_EMAIL;

async function getAllArticles({ page, limit }) {
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
      message: error.message,
    });
  }
}

async function updateArticle(request, response) {
  const { id } = request.body;

  try {
    const ALL_ARTICLES = read();
    const article = ALL_ARTICLES.find((article) => article.id === id);

    if (!article) {
      throw new Error(`Todo with id "${id}" not found!`);
    }

    const updatedArticle = update(article.id, {
      ...request.body,
    });

    return response.status(200).json({
      article: updatedArticle,
    });
  } catch (error) {
    if (error instanceof Error) {
      return response.status(404).json({
        message: `Article with ID "${id}" not found.`,
      });
    }
  }
}

export async function GET() {

  const query = NextRequest.query;
  const page = Number(query?.page);
  const limit = Number(query?.limit);

  const output = await getAllArticles({ page, limit });

  return NextResponse.json({
    total: output.total,
    pages: output.pages,
    articles: output.articles,
  });
}

async function verifyIfExistsSession(){
  const session = await getServerSession(NextRequest, NextResponse);

  if (!session) {
    return response.status(400).json({
      message: "You need to sign in.",
    });
  }

  if (session.user.email !== CREDENTIAL_USER_EMAIL) {
    return response.status(404).json({
      message: "You are not authorized…",
    });
  }
}

export async function POST() {
  verifyIfExistsSession()

  const body = NextRequest.body;

  if (!body.id) {
    return NextResponse.json({
      message: "You must provide content to create an article.",
    });
  }

  const createdArticle = await createArticle(NextRequest.body);

  NextResponse.status(201).json({
    article: createdArticle,
  });

  return;
}

export async function DELETE() {
  verifyIfExistsSession()

  if (!NextRequest.body) {
    return NextResponse.status(400).json({
      message: "You must provide an ID to delete an article.",
    });
  }
  const { id } = NextRequest.body;

  await deleteById(id);
}

export async function PUT() {
  verifyIfExistsSession()

  const article_id = NextRequest.body.id;

  if (!article_id || typeof article_id !== "string") {
    NextResponse.status(400).json({
      message: 'You must provide a "string" ID.',
    });

    return;
  }

  await updateArticle(NextResponse, NextResponse);
}
