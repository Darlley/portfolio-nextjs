import fs from "fs";
import { randomUUID } from "crypto";

const DB_FILE_PATH = "./core/db";
type UUID = string;

interface Article {
  id: UUID;
  title: string;
  htmlContent: string;
  mdContent: string;
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

// export function update(id: UUID, partialTodo: Partial<Todo>) {
//   let updated_todo;
//   const todos = read();

//   todos.forEach((currentTodo) => {
//     if (currentTodo.id === id) {
//       updated_todo = Object.assign(currentTodo, {
//         ...partialTodo,
//         updated_at: new Date().toISOString(),
//       });
//     }
//   });

//   WRITE_FILE(todos);

//   if (!updated_todo) {
//     throw new Error("Please, provide another ID!");
//   }

//   return updated_todo;
// }

// export function deleteById(id: UUID) {
//   const todos = read();

//   const todosWithoutOne = todos.filter((currentTodo) => {
//     if (currentTodo.id === id) {
//       return false;
//     }
//     return true;
//   });

//   CLEAR_DB();

//   WRITE_FILE(todosWithoutOne);
// }

// function CLEAR_DB() {
//   fs.writeFileSync(DB_FILE_PATH, "");
// }
