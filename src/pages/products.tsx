import { Tag } from "@/components/atoms/Tag";
import HeaderPage from "@/components/molecules/HeaderPage"
import Metadata from "@/components/molecules/Metadata"
import { Product } from "@/components/molecules/products/Product";
import Image from "next/image";

const stats = [
  { label: 'Developer since', value: '2019' },
  { label: 'Years of XP', value: '2' },
  { label: 'Companies', value: '2' },
  { label: 'Home Office', value: '1' },
]

const metadata = {
  title: "Darlley Brito - Products",
  description: "Nesta página, estarão listados produtos que uso com link meus links de afiliado da Shopee.",
  image: "https://darlley.github.io/images/header.jpg"
}

const products = [
  {
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },
  {
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },{
    id: 1,
    name: 'Lenovo LP40 Pro',
    category: 'Setup',
    description: 'Fones de ouvido sem fio Bluetooth 5.1',
    href: 'https://shope.ee/30IohUt5m5',
    price: '$49',
    imageSrc: '/lpro40.png',
    imageAlt: 'fones',
  },
]

export default function ProductsPage() {
  return (
    <>
      <Metadata metadata={metadata} />
      <HeaderPage>
        <h1>SHOPPING</h1>
      </HeaderPage>
      <main className="py-8 px-4 2xl:px-0 max-w-7xl m-auto w-full flex flex-col gap-4 relative">
        <div className="">
          <h3 className="text-xl font-bold text-primary-400">Produtos</h3>
          <p>Produtos que uso no meu setup, livros, limpeza automotiva, roupas...</p>
        </div>

        <div className="py-4 w-full sticky top-0 bg-white bg-opacity-95 z-10">
          <ul className="flex gap-2 flex-wrap w-full">
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

        <div className="w-full flex flex-wrap sm:gap-2 justify-between">
          {products.map((product) => (
            <Product product={product}></Product>
          ))}
        </div>
      </main>
    </>
  )
}
