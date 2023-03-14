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
                title: "[PRÉ-WORK] Bootcamp React.js",
                url: "https://www.youtube.com/playlist?list=PLF7Mi9HNzvVk05NdZnB44rccbg_dnWuMh"
            },
            {
                title: "Curso React.js Ninja: Módulo React + Webpack",
                url: "https://www.udemy.com/course/reactjs-ninja-modulo-react-webpack/"
            },
            {
                title: "Bootcamp React.js Brainn Co.",
                url: "https://site-leadszapp.vercel.app"
            },
            {
                title: "Next Level Week 6 da Rocketseat",
                url: "https://github.com/Darlley/letmeask-vite"
            },
        ],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/Figma.png",
        title: "Figma",
        description: "Além deste repositório em particular, também criei o Design System da empresa LeadsZapp (onde estou empregado no momento).",
        list: [
            {
                title: "PRO FIGMA | Design de interface do Iniciante ao especialista",
                url: "https://www.udemy.com/certificate/UC-3c8c6d6e-4c1d-4388-ab88-228cda80ed44/"
            },
            {
                title: "Curso Online UI Start",
                url: ""
            },
            {
                title: "Curso Online UI Expert",
                url: ""
            },
        ],
    },
    {
        imageUrl: "/habilities/Tailwind.png",
        title: "CSS",
        description: "Sei utilizar e estruturar as tags semânticas do HTML5. Tenho conhecimentos intermediários em CSS (tenho mais facilidade para construir layouts com Flexbox). Sei iniciar um projeto com NPM, compilar SASS proprietário e de frameworks CSS com node-sass e gulp-sass e automatizar as tarefas com Gulp.\nDas ferramentas front-end que tenho mais familiaridade: HTML5, CSS3, Git/GitHub, NPM, SCSS/Sass, Bootstrap, TailwindCSS, Vite.js, Webpack.lém deste repositório em particular, também criei o Design System da empresa LeadsZapp (onde estou empregado no momento).",
        list: [],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/WordPress.png",
        title: "WordPress",
        description: "Estagiei em 2020 em uma empresa de Marketing Jurídiro onde eu era responsavel por converter os arquivos do site que um desenvolvedor front-end criou e converter para um tema WordPress/PHP.",
        list: [
            {
                title: "WordPress Como CMS",
                ul: "https://www.origamid.com/curso/wordpress-como-cms/"
            }
        ],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/Laravel.png",
        title: "Laravel",
        description: "Atualmente atuo utilizando a TALL Stack (Tailwind, Alpine.js, Laravel e Livewire). \n \n Criei duas bases de conhecimentos utilizando multi-tenant com esta stack, e alguns projetos avulsos. Tenho acompanhado o Laravel desde sua oitava versão.",
        list: [],
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
        description: "Em andamento 🚧 pretendo tirar as certificações de Cloud Practitioner em Junho e provavelmente a Developer Associate até o final deste ano (2023).",
        list: [],
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
        <div id="modal" className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-500 bg-opacity-50 bg-primary-500 "  onClick={closeModal} >
            <div className="flex flex-col items-center gap-4 bg-white w-[90%] px-4 py-10 rounded-2xl max-w-[400px]">
                <Image
                    src={card.imageUrl}
                    alt="Icone"
                    width={60}
                    height={60}
                    className="rounded-full shadow-lg"
                />
                <h2 className="text-2xl font-bold text-primary-500 animate-pulse">{card.title}</h2>

                <p classList="animate-pulse">{card.description}</p>

                {card.list.length > 0 && <ul className="w-full">
                    {card.list.map((item) => (
                        <li key={item.url} className="hover:text-secundary-500 cursor-pointer font-mono">
                            <a href={item.url} target="_blank"> {item.title}</a>
                        </li>
                    ))}
                </ul>
                }
                
                {
                    card.externalUrl != "" && <p>
                        <a href={card.externalUrl} className="inline-block mt-4 font-bold transition-colors text-secundary-500 hover:text-secundary-900">Saber mais</a>
                    </p>
                }
                
            </div>
        </div>
    )
}

export default CardModal;