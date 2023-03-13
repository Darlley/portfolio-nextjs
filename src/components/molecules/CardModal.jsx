import { useState } from "react";

const { default: Image } = require("next/image");

const cards = [
    {
        url: "/habilities/React.png",
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
        ]
    },
    {
        url: "/habilities/Figma.png",
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
        url: "/habilities/Tailwind.png",
        title: "CSS",
        description: "Sei utilizar e estruturar as tags semânticas do HTML5. Tenho conhecimentos intermediários em CSS (tenho mais facilidade para construir layouts com Flexbox). Sei iniciar um projeto com NPM, compilar SASS proprietário e de frameworks CSS com node-sass e gulp-sass e automatizar as tarefas com Gulp.\nDas ferramentas front-end que tenho mais familiaridade: HTML5, CSS3, Git/GitHub, NPM, SCSS/Sass, Bootstrap, TailwindCSS, Vite.js, Webpack.lém deste repositório em particular, também criei o Design System da empresa LeadsZapp (onde estou empregado no momento).",
        list: [],
    },
    {
        url: "/habilities/WordPress.png",
        title: "WordPress",
        description: "Ja estagiei em 2020 em uma empresa de Marketing Jurídiro onde eu era responsavel por converter os arquivos do site que um desenvolvedor front-end criou e converter para um tema WordPress/PHP.",
        list: [],
    },
    {
        url: "/habilities/Laravel.png",
        title: "Laravel",
        description: "Atualmente atuo utilizando a TALL Stack (Tailwind, Alpine.js, Laravel e Livewire).\nCriei duas bases de conhecimento utilizando multi-tenant com esta stack, e alguns projetos avulsos, tenho acompanhado o Laravel desde sua oitava versão.",
        list: [],
    },
    {
        url: "/habilities/MySQL.png",
        title: "MySQL",
        description: "Embora tenha aprendido PostgreSQL na faculdade tenho mais facilidade e mais tempo de uso com MySQL.",
        list: [],
    },
    {
        url: "/habilities/AWS.png",
        title: "AWS Cloud Pratictioner",
        description: "Em andamento.",
        list: [],
    },
]

function CardModal ({isOpen, setModalOpen, content}) {
    if(!isOpen) return null;
    const arrayList = cards[content].list
    return (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full transition-all duration-500 bg-opacity-50 bg-primary-500"  onClick={() => setModalOpen(false)} >
            <div className="flex flex-col items-center gap-4 bg-white w-[90%] px-4 py-10 rounded-2xl max-w-[400px]">
                <Image
                    src={`${cards[content].url}`}
                    alt="Icone"
                    width={60}
                    height={60}
                />
                <h2 className="text-2xl font-bold text-primary-500">{cards[content].title}</h2>

                <p>{cards[content].description}</p>

                    <ul className="w-full">
                        {arrayList != null && arrayList.map((item) => (
                            <li key={item.url}>
                                <a href={item.url} target="_blank">{item.title}</a>
                            </li>
                        ))}
                    </ul>
                
                <p>
                    <a href="#" className="inline-block mt-4 font-bold transition-colors text-secundary-500 hover:text-secundary-900">Saber mais</a>
                </p>
            </div>
        </div>
    )
}

export default CardModal;