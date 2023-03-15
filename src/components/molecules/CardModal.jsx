import { useState } from "react";

const { default: Image } = require("next/image");

const cards = [
    {
        imageUrl: "/profile.jpg",
        title: "Darlley Brasil de Brito Furtado",
        description: "Cursei somente até o 5° semestre em Análise e Desenvolvimento de Sistemas na Universidade Católica Dom Bosco (UCDB), mas tenho 2 anos de experiência em Desenvolvimento Web atuando em duas empresas no ramo de Marketing Digital. Além do computador, alguns dos meus hobbies incluem: skate, musculação, estética automotiva, filosofia e cerveja artesanal.",
        list: [],
        externalUrl: "https://github.com/Darlley"
    },
    {
        imageUrl: "/habilities/React.png",
        title: "ReactJS",
        description: "Tenho experiência no desenvolvimento front-end utilizando o framework.",
        list: [
            {
                title: "Curso React.js Ninja: Módulo React + Webpack",
                url: "https://www.udemy.com/course/reactjs-ninja-modulo-react-webpack/"
            },
            {
                title: "Next Level Week 6 da Rocketseat",
                url: "https://github.com/Darlley/letmeask-vite"
            },
            {
                title: "(Desafio vaga) Privatecode",
                url: "https://github.com/Darlley/desafio-privatecode"
            },
            {
                title: "(Desafio vaga) Sorteio.com",
                url: "https://sorteio-woad.vercel.app/"
            },
            
        ],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/Figma.png",
        title: "Figma",
        description: "Esta em andamento as certificações dos cursos UI Start e UI Expert.",
        list: [
            {
                title: "PRO FIGMA | Design de interface do Iniciante ao especialista",
                url: "https://www.udemy.com/certificate/UC-3c8c6d6e-4c1d-4388-ab88-228cda80ed44/"
            }
        ],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/Tailwind.png",
        title: "CSS",
        description: "Sei utilizar e estruturar as tags semânticas do HTML5. Tenho conhecimentos intermediários em CSS (tenho mais facilidade para construir layouts com Flexbox). Sei iniciar um projeto com NPM, compilar SASS proprietário e de frameworks CSS com node-sass e gulp-sass e automatizar as tarefas com Gulp.\nDas ferramentas front-end que tenho mais familiaridade: HTML5, CSS3, Git/GitHub, NPM, SCSS/Sass, Bootstrap, TailwindCSS, Vite.js, Webpack.lém deste repositório em particular, também criei o Design System da empresa LeadsZapp (onde estou empregado no momento).",
        list: [
            {
                title: "HTML Web Developer",
                url: "https://www.dio.me/certificate/93688C17/share"
            },
            {
                title: "CSS Flexbox",
                url: "https://www.origamid.com/certificate/b8a51b7f"
            },
            {
                title: "Curso Ferramentas Front-end: GIT, NPM, Webpack, Gulp e Sass",
                url: "https://www.udemy.com/certificate/UC-7371743e-804d-441e-b12f-fb61350c2a7d/"
            },
        ],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/WordPress.png",
        title: "WordPress",
        description: "Estagiei em 2020 em uma empresa de Marketing Jurídiro onde eu era responsavel por converter os arquivos do site que um desenvolvedor front-end criou e converter para um tema WordPress/PHP.",
        list: [
            {
                title: "WordPress Como CMS",
                url: "https://www.origamid.com/curso/wordpress-como-cms/"
            }
        ],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/Laravel.png",
        title: "Laravel",
        description: "Atualmente atuo utilizando a TALL Stack (Tailwind, Alpine.js, Laravel e Livewire). \n \n Criei duas bases de conhecimentos utilizando multi-tenant com esta stack, e alguns projetos avulsos. Tenho acompanhado o Laravel desde sua oitava versão.",
        list: [
            {
                title: "Curso de Laravel",
                url: "https://github.com/Darlley/projeto"
            },
            {
                title: "Laravel para iniciantes",
                url: "https://www.udemy.com/certificate/UC-30a1c71c-2b63-4e16-93e2-6197164612be/"
            },
            {
                title: "(Em andamento) Formação de Laravel Básico",
                url: "https://hotmart.com/pt-br/marketplace/produtos/formacao-laravel-basico/K69708135M"
            },
            {
                title: "(Em andamento) TDD com TALL Stack",
                url: "https://github.com/Darlley/artlover"
            },
            {
                title: "(Em andamento) Laravel na vida real - TALL STACK",
                url: "https://github.com/Darlley/adoteumdev"
            }
        ],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/MySQL.png",
        title: "MySQL",
        description: "Embora tenha aprendido PostgreSQL na faculdade tenho mais facilidade e mais experiência de uso com MySQL.",
        list: [],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/AWS.png",
        title: "AWS Cloud Practitioner",
        description: "Certificação em andamento 🚧 Este portfólio foi hospedado com AWS Amplify e utilizo os serviço de S3 para armazenar as imagens das bases de conhecimento do LeadsZapp e Growp.",
        list: [
            {
                title: "CURSO - PRIMEIROS PASSOS EM CLOUD",
                url: "https://www.youtube.com/playlist?list=PLwlq4XZ8aTmfHJTNreRyqCmXVWhyF5LHo",
            },
            {
                title: "Treinamento preparatório para a certificação da AWS e 600 vouchers!",
                url: "https://youtu.be/VrQVDbgwFDs?t=12598"
            },
            {
                title: "Certificação Amazon AWS Cloud Practitioner Foundational 2023",
                url: "https://www.udemy.com/course/certificacao-aws-cloud-practitioner/"
            },
            {
                title: "Bootcamp Cloud AWS",
                url: "https://web.dio.me/track/bootcamp-cloud-aws"
            },
        ],
        externalUrl: ""
    },
]

function CardModal ({isOpen, setModalOpen, content}) {
    if(!isOpen) return null;

    const card = cards[content]

    function closeModal(e){
        if(e) e.preventDefault();
        if(e.target.id != "modal") return;

        setModalOpen(false)
    }

    return (
        <div id="modal" className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-500 bg-opacity-80 bg-primary-500"  onClick={closeModal} >
            <div className="flex flex-col items-center gap-4 bg-gradient-to-t to-white from-secundary-200 w-[90%] px-4 py-10 rounded-2xl max-w-[400px] shadow-lg">
                <Image
                    src={card.imageUrl}
                    alt="Icone"
                    width={40}
                    height={40}
                    className="rounded-full shadow-lg"
                />
                <h2 className="text-2xl font-bold text-secundary-500">{card.title}</h2>

                <p>{card.description}</p>

                {card.list.length > 0 && <ul className="flex flex-col w-full gap-2">
                    {card.list.map((item, key) => (
                        <li key={item.url} className="flex items-center gap-2 font-mono cursor-pointer hover:text-secundary-900">
                            <span className="flex items-center justify-center min-h-[20px] max-h-[20px] text-white rounded-full min-w-[20px] max-w-[20px] bg-secundary-500">{key+1}</span>
                            <a href={item.url} target="_blank" className="flex gap-4">
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
                }
                
                {card.externalUrl != "" && <p>
                    <a href={card.externalUrl} className="inline-block mt-4 font-bold transition-colors cursor-pointer text-secundary-500 hover:text-secundary-900">Saber mais</a>
                </p>}
                
            </div>
        </div>
    )
}

export default CardModal;