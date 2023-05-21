import HeaderPage from "@/components/molecules/HeaderPage"
import Metadata from "@/components/molecules/Metadata"
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

export default function ProductsPage() {
  return (
    <>
      <Metadata metadata={metadata} />
      <HeaderPage>
        <h1>SHOPPING</h1>
      </HeaderPage>
      <main className="py-8 px-4 2xl:px-0 max-w-7xl m-auto w-full flex flex-col gap-4">
        <div className="">
          <h3 className="text-xl font-bold text-primary-400">Produtos</h3>
          <p>Produtos que uso no meu setup, livros, limpeza automotiva, roupas...</p>
        </div>

        <div className="w-full">
          <div className="opacity-80 hover:opacity-100 group h-full max-w-[300px] rounded-md overflow-hidden border hover:shadow-lg">
            <div className="relative w-full">
              <div className="h-52 overflow-hidden flex-col flex items-center">
                <Image src="/lpro40.png" width={640} height={640} alt="fones" />
              </div>
              <button className="absolute top-3 right-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer">
                <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50">
                  <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z"></path></svg>
                </div>
              </button>
            </div>
            <div className="flex items-center justify-between md:items-start p-4">
              <div className="flex flex-col">
                <p className="text-lg font-bold text-secundary-500">Lenovo LP40 Pro</p>
                <p className="text-base font-normal text-primary-800">Fones de ouvido sem fio Bluetooth 5.1</p>
              </div>
            </div>
            <div className="flex p-4">
              <a href="https://shope.ee/30IohUt5m5" target="_blank" className="group-hover:text-white transition-all duration-200 bg-opacity-80 bg-primary-500 hover:bg-opacity-100 text-white rounded-md w-full text-center p-2">Ir para Shopee</a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
