import Link from "next/link";
import { useState } from "react";

const { default: Image } = require("next/image");

const cards = [
    {
        imageUrl: "/profile.jpg",
        title: "Darlley Brasil de Brito Furtado",
        description: "Cursei somente até o 5° semestre (2022) em Análise e Desenvolvimento de Sistemas na Universidade Católica Dom Bosco (UCDB) e pretendo concluir (2024) o curso a distância. Tenho interesse pelas areas de UI Design, Cloud Computing e Cibersegurança. Tenho 2 anos de experiência em Desenvolvimento Web atuando em duas empresas no ramo de Marketing Digital.\n\nAlém do computador, alguns dos meus hobbies incluem: skate, musculação, estética automotiva, filosofia e cerveja artesanal.",
        list: [],
        externalUrl: "https://www.linkedin.com/in/darlleybrito/"
    },
    {
        imageUrl: "/habilities/React.png",
        title: "ReactJS",
        description: "Tenho experiência no desenvolvimento front-end utilizando o framework e seu ecossistema (Webpack, CRA, Vite.js e Next.js).",
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
        title: "UI Design",
        description: "Tenho conhecimentos básicos das teorias e do Workflow do UI Design e tenho conhecimentos intermediários em Figma para criação de Design de Interface e prototipação. Próximas metas é concluir os cursos: \nUI Expert do Lucas Assis, e UI Design Avançado da Origamid.",
        list: [
            {
                title: "PRO FIGMA | Design de interface do Iniciante ao especialista (Udemy)",
                url: "https://www.udemy.com/certificate/UC-3c8c6d6e-4c1d-4388-ab88-228cda80ed44/"
            },
            {
                title: "UI Design para Iniciantes (Origamid)",
                url: "https://www.origamid.com/certificate/f6676778"
            }
        ],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/Tailwind.png",
        title: "CSS",
        description: "Tenho conhecimentos intermediários em CSS3 (tenho mais facilidade para construir layouts com Flexbox). Sei iniciar um projeto com NPM ou Yarn, compilar SASS proprietário/personalizado e de frameworks CSS com node-sass e gulp-sass e automatizar as tarefas com Gulp.\n\nDentre ferramentas front-end que tenho mais familiaridade: HTML5, CSS3, Git/GitHub, NPM/Yarn, SCSS/Sass, Bootstrap, TailwindCSS, Vite.js, Webpack.",
        list: [
            {
                title: "Bootcamp HTML Web Developer",
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
        description: "Entre Novembro de 2019 até Dezembro de 2020 estagiei em uma empresa de Marketing Jurídiro onde eu era responsavel por converter os arquivos estáticos (HTML, CSS e JavaScript) do site que um desenvolvedor criava em um tema WordPress/PHP usado como CSM para sites institucionais de advogados. Também fazia o deploy com Hostgator.",
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
        description: "Atualmente atuo utilizando a TALL Stack (Tailwind, Alpine.js, Laravel e Livewire).\n\nCriei duas bases de conhecimentos com esta stack, e alguns projetos avulsos. Tenho acompanhado o Laravel desde sua oitava versão.",
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
        title: "Banco de Dados Relacionais",
        description: "Embora tenha aprendido PostgreSQL na faculdade tenho mais facilidade e mais experiência de uso com MySQL.",
        list: [],
        externalUrl: ""
    },
    {
        imageUrl: "/habilities/AWS.png",
        title: "DevOps",
        description: `Não sou DevOps mas tenho conhecimentos em tecnologias relacionadas: tenho conhecimentos básicos de Docker (uso bastante o Laravel Sail), e estou estudando para tirar a certificação da AWS Cloud Practitioner.
\nInicialmente fiz o deploy deste portfólio com a AWS Amplify + AWS Route53 e já utilizei os serviço de AWS S3 junto com Laravel para armazenar imagens de uma base de conhecimento`,
        list: [
            {
                title: "Curso Certificação Amazon AWS Cloud Practitioner Foundational 2023",
                url: "https://www.udemy.com/certificate/UC-6b1a0937-f009-46ec-adeb-3019b2c74845/",
            },
            {
                title: "Docker do 0 à Maestria: Contêineres Desmistificados + EXTRAS",
                url: "https://www.udemy.com/certificate/UC-544ac24a-5950-4914-9506-8d6bf81ba89b/"
            },
            {
                title: "Primeiros Passos com AWS",
                url: "https://www.dio.me/certificate/1431E9AF/share"
            },
            {
                title: "AWS Official Content - Introdução à Amazon Web Services (AWS)",
                url: "https://www.dio.me/certificate/AC35AA55/share"
            },
            {
                title: "Introdução ao Conceito de Cloud",
                url: "https://www.dio.me/certificate/38F2C42D/share"
            },
            {
                title: "Infraestrutura Global AWS",
                url: "https://www.dio.me/certificate/498618CF/share"
            },
            {
                title: "Computação em AWS",
                url: "https://www.dio.me/certificate/46F572D3/share"
            },
            {
                title: "Introdução Prática a Computação em Nuvem Usando AWS",
                url: "https://www.dio.me/certificate/5D6F0933/share"
            },
            {
                title: "Redes em AWS",
                url: "https://www.dio.me/certificate/D3E0370D/share"
            },
            {
                title: "Introdução ao Exame de Certificação AWS Cloud Practitioner",
                url: "https://www.dio.me/certificate/BD38F3AE/share"
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

                <p className="whitespace-pre-wrap">{card.description}</p>

                {card.list.length > 0 && <ul className="flex flex-col w-full gap-2">
                    {card.list.map((item, key) => (
                        <li key={item.url+key} className="flex items-center gap-2 font-mono cursor-pointer hover:text-secundary-900">
                            <span className="flex items-center justify-center min-h-[20px] max-h-[20px] text-white rounded-full min-w-[20px] max-w-[20px] bg-secundary-500">{key+1}</span>
                            <Link href={item.url} target="_blank">{item.title}</Link> 
                        </li>
                    ))}
                </ul>
                }
                
                {!!card.externalUrl ? <Link href={card.externalUrl} className="inline-block mt-4 font-bold transition-colors cursor-pointer text-secundary-500 hover:text-secundary-900" target="_blank">Saber mais</Link> : null}
                
            </div>
        </div>
    )
}

export default CardModal;