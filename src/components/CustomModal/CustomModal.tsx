import { Chip, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";

import AICustomIcon from "@/icons/AICustomIcon";
import AWSCustomIcon from "@/icons/AWSCustomIcon";
import BackEndCustomIcon from "@/icons/BackEndCustomIcon";
import FigmaCustomIcon from "@/icons/FigmaCustomIcon";
import LaravelCustomIcon from "@/icons/LaravelCustomIcon";
import MongoCustomIcon from "@/icons/MongoCustomIcon";
import N8NCustomIcon from "@/icons/N8NCustomIcon";
import ReactCustomIcon from "@/icons/ReactCustomIcon";
import TailwindCustomIcon from "@/icons/TailwindCustomIcon";
import WordpressCustomIcon from "@/icons/WordpressCustomIcon";
import clsx from "clsx";

import { TypeContent } from "../PageHome/PageHome";
const skills: {
  [key in TypeContent]: null | {
    title: string;
    description: string;
    list: {
      title: string;
      url: string;
      school?: string;
      certified: boolean,
    }[];
    externalUrl?: string;
  };
} = {
  me: {
    title: "Darlley Brasil de Brito Furtado",
    description:
      "Cursei somente até o 5° semestre (2022) em Análise e Desenvolvimento de Sistemas na Universidade Católica Dom Bosco (UCDB) e pretendo concluir (2024) o curso a distância. Tenho interesse pelas areas de UI Design, Cloud Computing e Cibersegurança. Tenho 2 anos de experiência em Desenvolvimento Web atuando em duas empresas no ramo de Marketing Digital.\n\nAlém do computador, alguns dos meus hobbies incluem: skate, musculação, estética automotiva, filosofia e cerveja artesanal.",
    
      list: [],
    externalUrl: "https://www.linkedin.com/in/darlleybrito/",
  },
  Frontend: {
    title: "ReactJS",
    description:
      "Tenho experiência no desenvolvimento front-end utilizando o framework e seu ecossistema (Webpack, CRA, Vite.js e Next.js).",
    list: [
      {
        title: "Curso React.js Ninja: Módulo React + Webpack",
        url: "https://www.udemy.com/course/reactjs-ninja-modulo-react-webpack/",
        school: "Udemy",
        certified: true
      },
      {
        title: "Next Level Week 6 da Rocketseat",
        url: "https://github.com/Darlley/letmeask-vite",
        school: "Rocketseat",
        certified: false
      },
      {
        title: "(Desafio vaga) Privatecode",
        url: "https://github.com/Darlley/desafio-privatecode",
        certified: false
      },
      {
        title: "(Desafio vaga) Sorteio.com",
        url: "https://sorteio-woad.vercel.app/",
        certified: false
      },
    ],
    externalUrl: "",
  },
  Design: {
    title: "UI Design",
    description:
      "Tenho conhecimentos básicos das teorias e do Workflow do UI Design e tenho conhecimentos intermediários em Figma para criação de Design de Interface e prototipação. Próximas metas é concluir os cursos: \nUI Expert do Lucas Assis, e UI Design Avançado da Origamid.",
    list: [
      {
        title:
          "PRO FIGMA | Design de interface do Iniciante ao especialista (Udemy)",
        url: "https://www.udemy.com/certificate/UC-3c8c6d6e-4c1d-4388-ab88-228cda80ed44/",
        school: "Udemy",
        certified: true
      },
      {
        title: "UI Design para Iniciantes (Origamid)",
        url: "https://www.origamid.com/certificate/f6676778",
        school: "Origamid",
        certified: true
      },
      {
        title: "Curso de UI Design (ui Start)",
        url: "https://uistart.club.hotmart.com/public/user-certificate/7ff0280a-0990-412e-9dc2-7d16303e54f5/_",
        school: "Hotmart",
        certified: true
      },
    ],
    externalUrl: "",
  },
  CSS: {
    title: "CSS",
    description:
      "Tenho conhecimentos intermediários em CSS3 (tenho mais facilidade para construir layouts com Flexbox). Sei iniciar um projeto com NPM ou Yarn, compilar SASS proprietário/personalizado e de frameworks CSS com node-sass e gulp-sass e automatizar as tarefas com Gulp.\n\nDentre ferramentas front-end que tenho mais familiaridade: HTML5, CSS3, Git/GitHub, NPM/Yarn, SCSS/Sass, Bootstrap, TailwindCSS, Vite.js, Webpack.",
    list: [
      {
        title: "Bootcamp HTML Web Developer",
        url: "https://www.dio.me/certificate/93688C17/share",
        school: "Dio",
        certified: true
      },
      {
        title: "CSS Flexbox",
        url: "https://www.origamid.com/certificate/b8a51b7f",
        school: "Origamid",
        certified: true
      },
      {
        title: "Curso Ferramentas Front-end: GIT, NPM, Webpack, Gulp e Sass",
        url: "https://www.udemy.com/certificate/UC-7371743e-804d-441e-b12f-fb61350c2a7d/",
        school: "Udemy",
        certified: true
      },
    ],
    externalUrl: "",
  },
  WordPress: {
    title: "WordPress",
    description:
      "Entre Novembro de 2019 até Dezembro de 2020 estagiei em uma empresa de Marketing Jurídiro onde eu era responsavel por converter os arquivos estáticos (HTML, CSS e JavaScript) do site que um desenvolvedor criava em um tema WordPress/PHP usado como CSM para sites institucionais de advogados. Também fazia o deploy com Hostgator.",
    list: [
      {
        title: "WordPress Como CMS",
        url: "https://www.origamid.com/curso/wordpress-como-cms/",
        school: "Origamid",
        certified: true
      },
    ],
    externalUrl: "",
  },
  Laravel: {
    title: "Laravel",
    description:
      "Atualmente atuo utilizando a TALL Stack (Tailwind, Alpine.js, Laravel e Livewire).\n\nCriei duas bases de conhecimentos com esta stack, e alguns projetos avulsos. Tenho acompanhado o Laravel desde sua oitava versão.",
    list: [
      {
        title: "Curso de Laravel",
        url: "https://github.com/Darlley/projeto",
        certified: false
      },
      {
        title: "Laravel para iniciantes",
        url: "https://www.udemy.com/certificate/UC-30a1c71c-2b63-4e16-93e2-6197164612be/",
        school: "Udemy",
        certified: true
      },
      {
        title: "(Em andamento) Formação de Laravel Básico",
        url: "https://hotmart.com/pt-br/marketplace/produtos/formacao-laravel-basico/K69708135M",
        school: "Hotmart",
        certified: false
      },
      {
        title: "(Em andamento) TDD com TALL Stack",
        url: "https://github.com/Darlley/artlover",
        school: "Youtube",
        certified: false
      },
      {
        title: "(Em andamento) Laravel na vida real - TALL STACK",
        url: "https://github.com/Darlley/adoteumdev",
        certified: false
      },
    ],
    externalUrl: "",
  },
  Database: {
    title: "Banco de Dados Relacionais",
    description:
      "Embora tenha aprendido PostgreSQL na faculdade tenho mais facilidade e mais experiência de uso com MySQL.",
    list: [],
    externalUrl: "",
  },
  AWS: {
    title: "DevOps",
    description: `Não sou DevOps mas tenho conhecimentos em tecnologias relacionadas: tenho conhecimentos básicos de Docker (uso bastante o Laravel Sail), e estou estudando para tirar a certificação da AWS Cloud Practitioner.
\nInicialmente fiz o deploy deste portfólio com a AWS Amplify + AWS Route53 e já utilizei os serviço de AWS S3 junto com Laravel para armazenar imagens de uma base de conhecimento`,
    list: [
      {
        title: "Docker do 0 à Maestria: Contêineres Desmistificados + EXTRAS",
        url: "https://www.udemy.com/certificate/UC-544ac24a-5950-4914-9506-8d6bf81ba89b/",
        school: "Udemy",
        certified: true
      },
      {
        title:
          "Curso Certificação Amazon AWS Cloud Practitioner Foundational 2023",
        url: "https://www.udemy.com/certificate/UC-6b1a0937-f009-46ec-adeb-3019b2c74845/",
        school: "Udemy",
        certified: true
      },
      {
        title: "Descubra a Nuvem AWS - Nexa Resources",
        url: "https://www.dio.me/certificate/54EF551C/share",
        school: "Dio",
        certified: true
      },
      {
        title: "Docker para Desenvolvedores (com Docker Swarm e Kubernetes)",
        url: "https://www.udemy.com/certificate/UC-126c8419-caeb-472c-8f46-fd1025605bd0/",
        school: "Udemy",
        certified: true
      },
    ],
    externalUrl: "",
  },
  "Low-Code/No-Code": {
    title: "Low-Code & No-Code",
    description: `Tenho experiência em ferramentas de automação e low-code na construção de websites até a integração de sistemas. 

O que sei fazer:

☑️ Sei criar website low code com react usando codux e plasmic e wordpress com php
☑️ Sei criar website no-code usando webflow, framer, wordpress
☑️ Sei usar o appwrite um banco de dados low code com sdk 
☑️ Sei criar um cms para nextjs usando strapi
☑️ Estou aprendendo a criar app usando flutterflow com firebase database
☑️ Estou aprendendo a criar aplicações usando o weweb com xano database
☑️ Sei criar automações e integrações entre sistemas usando o n8n usando webhooks e api
    `,
    list: [],
  },
  AI: {
    title: "Inteligência Artificial",
    description: `Integro a inteligência artificial de forma prática em meus projetos, utilizando ferramentas avançadas para aumentar a produtividade e precisão.
    
O que sei fazer:

☑️ Usar a IDE cursor.sh e llms para criação de códigos, configurar o vscode com copilot + supermaven + aider + gemini para sugestão de codigos
☑️ Fazer RAG com Supabase pgvector e langchain
☑️ Usar langchain para transformar uma pergunta do usuário em uma pergunta curta mais obejtiva
☑️ User o langchain com pgvector do supabase para criar embeddings de conteudos
☑️ User o upstash para criar embeddings e fazer um chat com rag usando a ia sdk da vercel
☑️ Sei criar embeddings com o Vector Store
☑️ Sei criar mockups, telas e componentes usando o v0 da vercel e o claude da antropic
☑️ Sei criar modelagem de banco de dados com o https://postgres.new/ 
    `,
    list: [
      {
        title: 'Learn LangChain.js - Build LLM apps with JavaScript and OpenAI',
        school: 'freeCodeCamp.org',
        url: 'https://youtu.be/HSZ_uaif57o',
        certified: false
      }
    ],
  },
  Nestjs: {
    title: "NestJS",
    description: `No ecossistema Node utilizo e tenho experiência profissional com o framework Nestjs e ja fiz uso pessoal do express e fastify.`,
    list: [],
  },
};

import Link from "next/link";
import { CustomModalProps } from "./CustomModal.types";
export default function CustomModal({
  isOpen,
  setIsOpen,
  content,
}: CustomModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={setIsOpen}
      radius="lg"
      placement="center"
      scrollBehavior="outside"
      size="lg"
      backdrop="opaque"
      classNames={{
        body: ''
      }}
    >
      <ModalContent>
        <ModalHeader>
          <div className="flex items-center gap-2 w-max">
            {content === "Frontend" && (
              <ReactCustomIcon className="size-4 md:size-8" />
            )}
            {content === "Design" && (
              <FigmaCustomIcon className="size-4 md:size-8" />
            )}
            {content === "CSS" && (
              <TailwindCustomIcon className="size-4 md:size-8" />
            )}
            {content === "WordPress" && (
              <WordpressCustomIcon className="size-4 md:size-8" />
            )}
            {content === "Database" && (
              <MongoCustomIcon className="size-4 md:size-8" />
            )}
            {content === "Laravel" && (
              <LaravelCustomIcon className="size-4 md:size-8" />
            )}
            {content === "Nestjs" && (
              <BackEndCustomIcon className="size-4 md:size-8" />
            )}
            {content === "AI" && <AICustomIcon className="size-4 md:size-8" />}
            {content === "Low-Code/No-Code" && (
              <N8NCustomIcon className="size-4 md:size-8" />
            )}
            {content === "AWS" && (
              <AWSCustomIcon className="size-4 md:size-8" />
            )}
            <h2 className="text-xl font-bold text-white">
              {skills?.[content]?.title}
            </h2>
          </div>
        </ModalHeader>
        <ModalBody>
            <div className="h-full w-full">
              <p className="whitespace-pre-wrap">
                {skills?.[content]?.description}
              </p>
              {skills?.[content]?.list &&
                skills?.[content]?.list?.length > 0 && (
                  <ul role="list" className="mt-2 divide-y divide-white/5 w-full overflow-hidden">
                    {skills?.[content]?.list.map((item, key) => {
                      return (
                        <li key={item.url + key} className="w-full max-w-full"> 
                          <Link
                            href={item.url}
                            target="_blank"
                            className="flex items-center w-full"
                          >
                            <div className="flex flex-col w-full py-2">
                              <div className="flex items-center gap-x-3">
                                <div
                                  className={clsx(
                                    " rounded-full p-1 bg-green-400/10",
                                    item.certified
                                      ? "flex-none text-green-400 animate-pulse"
                                      : "text-rose-400 bg-rose-400/10"
                                  )}
                                >
                                  <div className="w-2 h-2 bg-current rounded-full" />
                                </div>
                                <h2 className="min-w-0 text-sm font-semibold leading-6 text-white flex gap-x-2">
                                  <span className="truncate">Certificado</span>
                                  {item?.school && item?.school?.length > 0 && (
                                    <div>
                                      <span className="text-gray-400">/</span>
                                      <span className="whitespace-nowrap">
                                        {item.school ?? ""}
                                      </span>
                                      <span className="absolute inset-0" />
                                    </div>
                                  )}
                                </h2>
                              </div>
                              <div className="flex items-between gap-x-2.5 text-xs leading-5 text-gray-400 max-w-full">
                                <span className="flex-1 truncate">{item.title} Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias aliquam rerum quia omnis, sapiente veritatis mollitia nihil sed? Optio reprehenderit consequuntur aperiam amet perspiciatis cumque earum explicabo ex suscipit laborum.</span> • <span className="flex-1 truncate text-primary">github.com</span>
                              </div>
                            </div>
                            <Chip variant="bordered" size="sm">Ver</Chip>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
            </div>

            {!!skills?.[content]?.externalUrl && (
              <div className="flex h-max- w-max">
                <Link
                  href={skills?.[content]?.externalUrl}
                  className="z-10 inline-block mt-4 text-sm font-bold text-white transition-colors cursor-pointer hover:text-secundary-500"
                  target="_blank"
                >
                  Saber mais
                </Link>
              </div>
            )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
