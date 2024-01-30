import { Fragment, useRef } from "react";

import { Dialog, Transition } from "@headlessui/react";

const { default: Image } = require("next/image");

const cards = [
  {
    imageUrl: "/profile.jpg",
    title: "Darlley Brasil de Brito Furtado",
    description:
      "Cursei somente até o 5° semestre (2022) em Análise e Desenvolvimento de Sistemas na Universidade Católica Dom Bosco (UCDB) e pretendo concluir (2024) o curso a distância. Tenho interesse pelas areas de UI Design, Cloud Computing e Cibersegurança. Tenho 2 anos de experiência em Desenvolvimento Web atuando em duas empresas no ramo de Marketing Digital.\n\nAlém do computador, alguns dos meus hobbies incluem: skate, musculação, estética automotiva, filosofia e cerveja artesanal.",
    list: [],
    externalUrl: "https://www.linkedin.com/in/darlleybrito/",
  },
  {
    imageUrl: "/habilities/React.png",
    title: "ReactJS",
    description:
      "Tenho experiência no desenvolvimento front-end utilizando o framework e seu ecossistema (Webpack, CRA, Vite.js e Next.js).",
    list: [
      {
        title: "Curso React.js Ninja: Módulo React + Webpack",
        url: "https://www.udemy.com/course/reactjs-ninja-modulo-react-webpack/",
        school: "Udemy",
      },
      {
        title: "Next Level Week 6 da Rocketseat",
        url: "https://github.com/Darlley/letmeask-vite",
        school: "Rocketseat",
      },
      {
        title: "(Desafio vaga) Privatecode",
        url: "https://github.com/Darlley/desafio-privatecode",
      },
      {
        title: "(Desafio vaga) Sorteio.com",
        url: "https://sorteio-woad.vercel.app/",
      },
    ],
    externalUrl: "",
  },
  {
    imageUrl: "/habilities/Figma.png",
    title: "UI Design",
    description:
      "Tenho conhecimentos básicos das teorias e do Workflow do UI Design e tenho conhecimentos intermediários em Figma para criação de Design de Interface e prototipação. Próximas metas é concluir os cursos: \nUI Expert do Lucas Assis, e UI Design Avançado da Origamid.",
    list: [
      {
        title:
          "PRO FIGMA | Design de interface do Iniciante ao especialista (Udemy)",
        url: "https://www.udemy.com/certificate/UC-3c8c6d6e-4c1d-4388-ab88-228cda80ed44/",
        school: "Udemy",
      },
      {
        title: "UI Design para Iniciantes (Origamid)",
        url: "https://www.origamid.com/certificate/f6676778",
        school: "Origamid",
      },
      {
        title: "Curso de UI Design (ui Start)",
        url: "https://uistart.club.hotmart.com/public/user-certificate/7ff0280a-0990-412e-9dc2-7d16303e54f5/_",
        school: "Hotmart",
      },
    ],
    externalUrl: "",
  },
  {
    imageUrl: "/habilities/Tailwind.png",
    title: "CSS",
    description:
      "Tenho conhecimentos intermediários em CSS3 (tenho mais facilidade para construir layouts com Flexbox). Sei iniciar um projeto com NPM ou Yarn, compilar SASS proprietário/personalizado e de frameworks CSS com node-sass e gulp-sass e automatizar as tarefas com Gulp.\n\nDentre ferramentas front-end que tenho mais familiaridade: HTML5, CSS3, Git/GitHub, NPM/Yarn, SCSS/Sass, Bootstrap, TailwindCSS, Vite.js, Webpack.",
    list: [
      {
        title: "Bootcamp HTML Web Developer",
        url: "https://www.dio.me/certificate/93688C17/share",
        school: "Dio",
      },
      {
        title: "CSS Flexbox",
        url: "https://www.origamid.com/certificate/b8a51b7f",
        school: "Origamid",
      },
      {
        title: "Curso Ferramentas Front-end: GIT, NPM, Webpack, Gulp e Sass",
        url: "https://www.udemy.com/certificate/UC-7371743e-804d-441e-b12f-fb61350c2a7d/",
        school: "Udemy",
      },
    ],
    externalUrl: "",
  },
  {
    imageUrl: "/habilities/WordPress.png",
    title: "WordPress",
    description:
      "Entre Novembro de 2019 até Dezembro de 2020 estagiei em uma empresa de Marketing Jurídiro onde eu era responsavel por converter os arquivos estáticos (HTML, CSS e JavaScript) do site que um desenvolvedor criava em um tema WordPress/PHP usado como CSM para sites institucionais de advogados. Também fazia o deploy com Hostgator.",
    list: [
      {
        title: "WordPress Como CMS",
        url: "https://www.origamid.com/curso/wordpress-como-cms/",
        school: "Origamid",
      },
    ],
    externalUrl: "",
  },
  {
    imageUrl: "/habilities/Laravel.png",
    title: "Laravel",
    description:
      "Atualmente atuo utilizando a TALL Stack (Tailwind, Alpine.js, Laravel e Livewire).\n\nCriei duas bases de conhecimentos com esta stack, e alguns projetos avulsos. Tenho acompanhado o Laravel desde sua oitava versão.",
    list: [
      {
        title: "Curso de Laravel",
        url: "https://github.com/Darlley/projeto",
      },
      {
        title: "Laravel para iniciantes",
        url: "https://www.udemy.com/certificate/UC-30a1c71c-2b63-4e16-93e2-6197164612be/",
        school: "Udemy",
      },
      {
        title: "(Em andamento) Formação de Laravel Básico",
        url: "https://hotmart.com/pt-br/marketplace/produtos/formacao-laravel-basico/K69708135M",
        school: "Hotmart",
      },
      {
        title: "(Em andamento) TDD com TALL Stack",
        url: "https://github.com/Darlley/artlover",
        school: "Youtube",
      },
      {
        title: "(Em andamento) Laravel na vida real - TALL STACK",
        url: "https://github.com/Darlley/adoteumdev",
      },
    ],
    externalUrl: "",
  },
  {
    imageUrl: "/habilities/MySQL.png",
    title: "Banco de Dados Relacionais",
    description:
      "Embora tenha aprendido PostgreSQL na faculdade tenho mais facilidade e mais experiência de uso com MySQL.",
    list: [],
    externalUrl: "",
  },
  {
    imageUrl: "/habilities/AWS.png",
    title: "DevOps",
    description: `Não sou DevOps mas tenho conhecimentos em tecnologias relacionadas: tenho conhecimentos básicos de Docker (uso bastante o Laravel Sail), e estou estudando para tirar a certificação da AWS Cloud Practitioner.
\nInicialmente fiz o deploy deste portfólio com a AWS Amplify + AWS Route53 e já utilizei os serviço de AWS S3 junto com Laravel para armazenar imagens de uma base de conhecimento`,
    list: [
      {
        title: "Docker do 0 à Maestria: Contêineres Desmistificados + EXTRAS",
        url: "https://www.udemy.com/certificate/UC-544ac24a-5950-4914-9506-8d6bf81ba89b/",
        school: "Udemy",
      },
      {
        title:
          "Curso Certificação Amazon AWS Cloud Practitioner Foundational 2023",
        url: "https://www.udemy.com/certificate/UC-6b1a0937-f009-46ec-adeb-3019b2c74845/",
        school: "Udemy",
      },
      {
        title: "Descubra a Nuvem AWS - Nexa Resources",
        url: "https://www.dio.me/certificate/54EF551C/share",
        school: "Dio",
      },
      {
        title: "Docker para Desenvolvedores (com Docker Swarm e Kubernetes)",
        url: "https://www.udemy.com/certificate/UC-126c8419-caeb-472c-8f46-fd1025605bd0/",
        school: "Udemy",
      }
    ],
    externalUrl: "",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function CardModal({ modalOpen, setModalOpen, content }) {
  if (!modalOpen) return null;
  const cancelButtonRef = useRef(null);

  const card = cards[content];

  function closeModal(e) {
    if (e) e.preventDefault();
    if (e.target.id != "modal") return;

    setModalOpen(false);
  }

  return (
    <Transition.Root show={modalOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={cancelButtonRef}
        onClose={setModalOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-full overflow-hidden">
          <div className="flex items-end justify-center min-h-full p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative max-w-[600px] w-11/12 px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-gray-900 rounded-lg shadow-xl h-max sm:my-8 sm:p-6">
                <div className={classNames("flex flex-wrap",
                content === 0 ? "flex-col gap-4" : "  justify-between"
                )}>
                <div className="flex items-center gap-2 w-max">
                    <button type="button" onClick={() => setModalOpen(false)}>
                      <span className="inline-block w-3 h-3 bg-blue-500 rounded-full center"></span>
                    </button>
                    <button type="button" onClick={() => setModalOpen(false)}>
                      <span className="inline-block w-3 h-3 bg-purple-500 rounded-full center"></span>
                    </button>
                    <button type="button" onClick={() => setModalOpen(false)}>
                      <span className="inline-block w-3 h-3 bg-pink-500 rounded-full box center"></span>
                    </button>
                  </div>

                  <div className="flex items-center gap-2 w-max">
                    <Image
                      src={card.imageUrl}
                      alt="Icone"
                      width={25}
                      height={25}
                      className="rounded-full shadow-lg"
                    />
                    <h2 className="text-xl font-bold text-white">
                      {card.title}
                    </h2>
                  </div>
                </div>

                <div className="flex flex-col mt-10 max-h-[600px] overflow-y-auto card__scrollbar text-white">
                  <div className="h-full">
                    <p className="whitespace-pre-wrap">{card.description}</p>
                    {card.list.length > 0 && (
                      <ul role="list" className="mt-4 divide-y divide-white/5">
                        {card.list.map((item, key) => {
                          return (
                            <li
                              key={item.url + key}
                              className="relative flex items-center p-2 space-x-4"
                            >
                              <div className="flex-auto min-w-0">
                                <div className="flex items-center gap-x-3">
                                  <div
                                    className={classNames(
                                      " rounded-full p-1 bg-green-400/10",
                                      item.url !== "" && item.url.length > 0
                                        ? "flex-none text-green-400"
                                        : "text-rose-400 bg-rose-400/10"
                                    )}
                                  >
                                    <div className="w-2 h-2 bg-current rounded-full" />
                                  </div>
                                  <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                                    <a href={item.url} className="flex gap-x-2">
                                      <span className="truncate">
                                        Certificado
                                      </span>
                                      {item.school && item.school.length > 0 &&
                                        <>
                                            <span className="text-gray-400">/</span>
                                            <span className="whitespace-nowrap">
                                                {item.school ?? ''}
                                            </span>
                                            <span className="absolute inset-0" />
                                        </>
                                      }
                                    </a>
                                  </h2>
                                </div>
                                <div className="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                                  <p className="truncate">{item.title}</p>
                                  {/* <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 flex-none fill-gray-300">
                                            <circle cx={1} cy={1} r={1} />
                                            </svg>
                                            <p className="whitespace-nowrap">ok4</p> */}
                                </div>
                              </div>
                              <div className="flex-none px-2 py-1 text-xs font-medium rounded-full ring-1 ring-inset">
                                Ver
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  <div className="flex h-max- w-max">
                    {!!card.externalUrl ? (
                      <a
                        href={card.externalUrl}
                        className="z-10 inline-block mt-4 text-sm font-bold text-white transition-colors cursor-pointer hover:text-secundary-500"
                        target="_blank"
                      >
                        Saber mais
                      </a>
                    ) : null}
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default CardModal;
