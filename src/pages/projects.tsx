'use client'

import HeaderPage from "@/components/molecules/HeaderPage";
import Metadata from "@/components/molecules/Metadata";

const metadata = {
  title: "Darlley Brito - Projetos",
  description: "Nesta página estão listados meus projetos.",
  image: "https://darlley.github.io/images/header.jpg",
};

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductsPage() {
  return (
    <>
      <Metadata metadata={metadata} />
      <HeaderPage>
        <h1>PROJETOS</h1>
      </HeaderPage>
      <main className="bg-white">
        <div className="max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 mt-6 gap-x-8 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img 
                  src="/bikcraft.png"
                  alt="" 
                  className="object-cover object-center w-full"
                />
                <div
                  className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                    Ver projeto
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a
                    href="https://darlley.github.io/Frontend/WebDesign-Origamid/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Bikcraft
                  </a>
                </h3>
                <p>WordPress</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Este é um projeto em que fui responsável pelo desenvolvimento
                front-end (visual e estrutura) e do back-end utilizando a
                linguagem PHP e hospedagem do site utilizando a plataforma do
                WordPress. O projeto não é proprietário e foi desenvolvido nos
                cursos Web Design Completo e WordPress Como CMS.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/animais-fantasticos.png"
                  alt=""
                  className="object-cover object-center w-full"
                />
                <div
                  className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                    Ver projeto
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a
                    href="https://darlley.github.io/JavaScript/Cursos/JavaScriptCompletoES6/Parte5/aula02/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Animais Fantásticos
                  </a>
                </h3>
                <p>JavaScript ES6</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
              Este foi um projeto envolvendo diversos conceitos JavaScript e o básico de HTML e CSS desenvolvido no curso JavaScript Completo ES6.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/darlley.github.io_Frontend_Rocketseat_DevFinances_.png"
                  alt=""
                  className="object-cover object-center w-full"
                />
                <div
                  className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                    Ver projeto
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a
                    href="https://darlley.github.io/Frontend/Rocketseat/DevFinances/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Dev.Finance$
                  </a>
                </h3>
                <p>JavaScript ES6</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
              Este foi um projeto envolvendo diversos conceitos JavaScript e o básico de HTML e CSS desenvolvido na Maratona Discover da Rocketseat.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/sorteio-woad.vercel.app_.png"
                  alt=""
                  className="object-cover object-center w-full"
                />
                <div
                  className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                    Ver projeto
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a
                    href="https://sorteio-woad.vercel.app/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Sorteio.com
                  </a>
                </h3>
                <p>Next.js</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
              Este foi um projeto Protótipo de landing page para desafio de vaga.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/privatecode.vercel.app_.png"
                  alt=""
                  className="object-cover object-center w-full"
                />
                <div
                  className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                    Ver projeto
                  </div>
                </div>
              </div> 
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a
                    href="https://sorteio-woad.vercel.app/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    PrivateCode
                  </a>
                </h3>
                <p>Next.js</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
              Este foi um projeto Protótipo de landing page para desafio de vaga.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/letmeask-c49ed.web.app_.png"
                  alt=""
                  className="object-cover object-center w-full"
                />
                <div
                  className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                    Ver projeto
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a
                    href="https://letmeask-c49ed.web.app/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Letmeask
                  </a>
                </h3>
                <p>React.js</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
              Projeto da NLW6 (curso/evento).
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/site-leadszapp.vercel.app_.png"
                  alt=""
                  className="object-cover object-center w-full"
                />
                <div
                  className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                    Ver projeto
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a
                    href="https://site-leadszapp.vercel.app/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    LeadsZapp Landing Page
                  </a>
                </h3>
                <p>Next.js</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
              Site para empresa.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/site-growp.vercel.app_.png"
                  alt=""
                  className="object-cover object-center w-full"
                />
                <div
                  className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                    Ver projeto
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a
                    href="https://site-growp.vercel.app/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Growp Landing Page
                  </a>
                </h3>
                <p>Next.js</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
              Site para empresa.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/knowledge.growp.app_.png"
                  alt=""
                  className="object-cover object-center w-full"
                />
                <div
                  className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                    Ver projeto
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a
                    href="https://knowledge.growp.app/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Base de Conhecimentos Growp
                  </a>
                </h3>
                <p>Laravel</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Base de conhecimentos para empresa.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/knowledge.leadszapp.com_.png"
                  alt=""
                  className="object-cover object-center w-full"
                />
                <div
                  className="absolute bottom-0 flex w-full p-4 transition-all duration-100 opacity-0 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="w-full px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white bg-opacity-75 rounded-md backdrop-blur backdrop-filter">
                    Ver projeto
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-4 space-x-8 text-base font-medium text-gray-900">
                <h3>
                  <a
                    href="https://knowledge.leadszapp.com/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Base de Conhecimentos LeadsZapp
                  </a>
                </h3>
                <p>Laravel</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Base de conhecimentos para empresa.
              </p>
            </div>

          </div>

          <div className="flex justify-end w-full mt-6">
            <a target="_blank" href="https://darlley.github.io/experiencias.html" className="text-sky-400 underline-offset-4 hover:underline">Outros →</a>
          </div>
        </div>
      </main>
    </>
  );
}
