import { Tag } from "@/components/atoms/Tag";
import HeaderPage from "@/components/molecules/HeaderPage"
import Metadata from "@/components/molecules/Metadata"
import { Product } from "@/components/molecules/products/Product";
import {products} from "../../products.json";
import { useCallback, useState } from "react";

const metadata = {
  title: "Darlley Brito - Products",
  description: "Nesta página, estarão listados produtos que uso com link meus links de afiliado da Shopee.",
  image: "https://darlley.github.io/images/header.jpg"
}

export default function ProductsPage() {
  return (
    <>
      <Metadata metadata={metadata} />
      <HeaderPage>
        <h1>SHOPPING</h1>
      </HeaderPage>
      <main className="relative flex flex-col w-full gap-4 px-4 py-8 m-auto 2xl:px-0 max-w-7xl">
        <div className="">
          <h3 className="text-xl font-bold text-primary-400">Produtos</h3>
          <p>Coisas que uso no meu dia a dia (setup, livros, limpeza automotiva, cuidados pessoais, etc...)</p>
        </div>

        <div className="sticky top-0 z-10 w-full py-4 bg-white bg-opacity-95">
          <ul className="flex flex-wrap w-full gap-2">
            <li>
              <Tag>Todos</Tag>
            </li>
            <li>
              <Tag>Setup</Tag>
            </li>
            <li>
              <Tag>Livros</Tag>
            </li>
            <li>
              <Tag>Limpeza Automotiva</Tag>
            </li>
            <li>
              <Tag>Roupa</Tag>
            </li>
          </ul>
        </div>

        <div className="flex flex-wrap justify-between w-full gap-2 md:justify-center">
          {products.map((product, key) => (
            <Product product={product} key={key} />
          ))}
        </div>
      </main>
    </>
  )
}
