import { useState } from "react";

const { default: Image } = require("next/image");

const cards = [
    {
        url: "/habilities/React.png",
        title: "ReactJS",
        description: "Tenho experiência no desenvolvimento front-end utilizando o framework.",
        list: [
            {
                title: "Letmeask (Reactjs + SASS + Firebase)",
                url: ""
            },
            {
                title: "Sorteio.com (Next.js + SASS)",
                url: ""
            },
            {
                title: "LeadsZapp (Next.js + TailwindCSS)",
                url: "https://site-leadszapp.vercel.app"
            },
            {
                title: "Growp (Next.js + TailwindCSS)",
                url: "https://site-growp.vercel.app"
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
                url: ""
            },
            {
                title: "Curso Online UI Start",
                url: ""
            },
            {
                title: "Curso Online UI Expert",
                url: ""
            },
        ]
    }
]

function CardModal ({isOpen, setModalOpen, content}) {
    if(!isOpen) return null;
    const arrayList = cards[content].list
    return (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-opacity-50 bg-primary-500"  onClick={() => setModalOpen(false)} >
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
                        {arrayList.map((item) => (
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