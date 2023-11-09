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
                    href="https://privatecode.vercel.app/"
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

            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/figma_wireflame_anytalk.jpg"
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
                    href="https://www.figma.com/proto/5I8d0lfBC2sUNOsYRUrFbU/AnyTalk?node-id=26-22"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Wireflame
                  </a>
                </h3>
                <p>Figma</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Wireflame no Figma para um CRM para Atendimentos no WhatsApp.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/DesignLP-Marketing-Juridico.jpg"
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
                    href="https://www.figma.com/proto/ruWTV1EuRC10hx6FlVOcdq/Marketing-de-Nichos-LeadsZapp?type=design&node-id=2-2&t=R0ErUOtoPDzZRZOU-0&scaling=min-zoom&page-id=0%3A1&show-proto-sidebar=1&starting-point-node-id=2%3A2/"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Design de LP's
                  </a>
                </h3>
                <p>Figma</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Design no Figma de Landing Pages no ramo do marketing jurídico.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/bikcraft-wireframe.png"
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
                    href="https://www.figma.com/file/hp6gMbGWkaWdX1khCv5itq/Bikcraft?type=design&node-id=9-2&mode=design&t=6cFqzZdL38Mxb4jT-0"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Wireframe
                  </a>
                </h3>
                <p>Figma</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Wireframe criado no curso de UI Design da Origamid.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/wireframe-googday.png"
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
                    href="https://www.figma.com/file/v6daHC3YsIuZO8ozjWN4Pa/Googday-FIGMA-PRO?type=design&node-id=102%3A41&mode=design&t=R0ErUOtoPDzZRZOU-1"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Wireframe
                  </a>
                </h3>
                <p>Figma</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Wireframe criado no curso Figma PRO.
              </p>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/concept-design-growp.jpg"
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
                    href="https://www.figma.com/file/VWf3Y7SPhhiYDyKM7tSpu2/Growp?type=design&node-id=0%3A1&mode=design&t=k69TUnubpGDJHT9j-1"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Concept Design Growp
                  </a>
                </h3>
                <p>Figma</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Design Conceitural de Landing Page para a ferramenta Growp.
              </p>
            </div>

            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/checkout-artlover.png"
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
                    href="https://www.figma.com/file/Qmv2LY6SUjHAoGoNWlEv8R/ArtLover?type=design&node-id=102%3A47&mode=design&t=H9nIvgASbfP0MSxR-1"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Concept Design Artlover
                  </a>
                </h3>
                <p>Figma</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
                Design Conceitural de um checkout para o curso TALL Stack TDD do Marco Ávila.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/curriculo-design.png"
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
                    href="https://www.figma.com/file/YfJtjKe8p2J7U7PQ3N5goB/Curriculo?type=design&node-id=0%3A1&mode=design&t=QufXG7MP9Cbd5qqs-1"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Design Curriculo
                  </a>
                </h3>
                <p>Figma</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
              Design do meu curriculo página /curriculo.
              </p>
            </div>
            
            <div className="relative group">
              <div className="relative overflow-hidden bg-white border rounded-lg max-h-60">
                <img
                  src="/portfólio-wireframe.png"
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
                    href="https://www.figma.com/file/988JnV7pqJMKPQXwX2QqWX/Portfolio?type=design&node-id=0%3A1&mode=design&t=sX2c6YDx8IwObdmr-1"
                    target="_blank"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Design deste portfólio
                  </a>
                </h3>
                <p>Figma</p>
              </div>

              <p className="mt-1 text-sm text-gray-500">
              Design do meu portfólio no Figma
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
