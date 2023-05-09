import HeaderPage from "@/components/molecules/HeaderPage"
import Metadata from "@/components/molecules/Metadata"

const stats = [
    { label: 'Developer since', value: '2019' },
    { label: 'Years of XP', value: '2' },
    { label: 'Companies', value: '2' },
    { label: 'Home Office', value: '1' },
]

const metadata = {
    title: "Darlley - Blog",
    description: "Um blog de pensamentos sobre tecnologia e filosofia.",
    image: "https://darlley.github.io/images/header.jpg"
}

export default function About() {
    return (
        <>
            <Metadata metadata={metadata} />
            <HeaderPage >
                <h1>Sobre mim</h1>
            </HeaderPage>
            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        <div className="lg:pr-4">
                            <div className="relative overflow-hidden rounded-3xl bg-secundary-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
                                <img className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0" src="/profile.jpg" alt="" />
                                <div className="absolute inset-0 bg-secundary-900 mix-blend-multiply" />
                                <div className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true" />
                                <figure className="relative isolate">
                                    <svg
                                        viewBox="0 0 162 128"
                                        fill="none"
                                        aria-hidden="true"
                                        className="absolute -left-2 -top-4 -z-10 h-32 stroke-white/20"
                                    >
                                        <path
                                            id="0ef284b8-28c2-426e-9442-8655d393522e"
                                            d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                                        />
                                        <use href="#0ef284b8-28c2-426e-9442-8655d393522e" x={86} />
                                    </svg>
                                    <blockquote className="mt-6 text-xl font-semibold leading-8 text-white">
                                        <p>Interessado em Back-end, Front-end, UI Design, Cloud Computing e Arquitetura de Software. Tenho 2 anos de experiência em Desenvolvimento Web atuando em duas empresas no ramo de Marketing Digital.</p>
                                    </blockquote>
                                    <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                                        <strong className="font-semibold text-white">Darlley Brito,</strong> Desenvolvedor Web Full-Stack Júnior
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div>
                            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-indigo-600">"A estrada até aqui""</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Breve resumo</h1>
                                <div className="max-w-xl">
                                    <p className="mt-6">No ano de 2013 queria me formar em arqueologia ou paleontologia por conta de uma novela que passava na época com esta temática. Em 2014 já estava com uma mentalidade mais empreendedora e de “coaching”: não me interessava em fazer um curso superior, queria ter minha loja de skate. Por conta do meu interesse em trabalhar com o skate, fiquei interessado em ter uma loja virtual e isto acabou me influenciando a me interessar por tecnologia, queria fazer uma faculdade de design gráfico ou web design.</p>
                                    <br />
                                    <br />
                                    <p>Durante meu Serviço Militar Obrigatório (2017) meu interesse por tecnologia voltou e ao conseguir uma bolsa no Prouni pelo Enem optei pelo curso Tecnologia em Análise e Desenvolvimento de Sistemas na Universidade Católica Dom Bosco (UCDB), iniciei o curso em março de 2018.</p>
                                    <br />
                                    <br />
                                    <p>Além do computador, alguns dos meus hobbies incluem: skate, musculação, estética automotiva, filosofia e cerveja artesanal.</p>
                                </div>
                            </div>
                            <dl className="mt-6 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-6 sm:grid-cols-4">
                                {stats.map((stat, statIdx) => (
                                    <div key={statIdx}>
                                        <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                                        <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                            <div className="mt-10 flex">
                                <ul role="list" className="space-y-6 py-6">

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <svg className="h-6 w-6 text-secundary-500" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Faculdade</span> Análise e Desenvolvimento de Sistemas.</p>
                                        <time dateTime="2023-01-24T09:20" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Mar 2018</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <img src="/profile.jpg" alt="" className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50" />
                                        <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                            <div className="flex justify-between gap-x-4">
                                                <div className="py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Crise existencial</span></div>
                                                <time dateTime="2023-01-23T15:56" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Jun 2019</time>
                                            </div>
                                            <p className="text-sm leading-6 text-gray-500">Vou trabalhar na área quando, vai demorar muito?</p>
                                        </div>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <img src="https://yt3.ggpht.com/a/AATXAJyTdVU1t8QdU53fkQWwr6QwAVxL0KfqBhIPTA=s900-c-k-c0xffffffff-no-rj-mo" alt="" className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50" />
                                        <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                            <div className="flex justify-between gap-x-4">
                                                <div className="py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900"><a href="https://rino3.com.br/novo/" target="_blank">Estagiário na Rino3 (Marketing Jurídico Digital)</a></span></div>
                                                <time dateTime="2023-01-23T15:56" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Nov 2019</time>
                                            </div>
                                            <p className="text-sm leading-6 text-gray-500">Este foi meu primeiro estagio como Programador Back-end PHP. Minha primeira experiência foi converter códigos estáticos (HTML, CSS, JS) em códigos dinâmicos usando PHP e WordPress como CMS. Além disso, eu realizava o deploy e as manutenções necessárias.</p>
                                        </div>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Primeira demissão</span> Estágio na Rino3</p>
                                        <time dateTime="2023-01-23T10:32" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Dez 2020</time>
                                    </li>

                                    
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <img src="/profile.jpg" alt="" className="relative mt-3 h-6 w-6 flex-none rounded-full bg-gray-50" />
                                        <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                            <div className="flex justify-between gap-x-4">
                                                <div className="py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Crise existencial</span></div>
                                                <time dateTime="2023-01-23T15:56" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Jan 2021</time>
                                            </div>
                                            <p className="text-sm leading-6 text-gray-500">Será que isto não é para mim? Será que sou realmente burro?</p>
                                        </div>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900"><a href="https://darlley.github.io/" target="_blank">Portfólio básico</a></span> criado com Bootstrap e Sass.</p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Jun 2021</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/27EA0735/share" target="_blank">Lógica de programação Essencial (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Jun 2021</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://darlley.github.io/images/conhecimentos/certificacao-guanabara-javascript.jpg" target="_blank">JavaScript com EcmaScript (Curso em Vídeo)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Jun 2021</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.udemy.com/certificate/UC-7371743e-804d-441e-b12f-fb61350c2a7d/" target="_blank">Ferramentas Front-end (Udemy)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Jun 2021</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/AADD2875/share" target="_blank">Introdução ao Git e ao GitHub (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Ago 2021</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/425D0009/share" target="_blank">Introdução a Criação de Websites com HTML5 e CSS3 (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Ago 2021</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/93688C17/share" target="_blank">HTML Web Developer (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Ago 2021</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/E5C0A92F/share" target="_blank">CSS Flexbox (Origamid)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Ago 2021</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.origamid.com/certificate/b8a51b7f" target="_blank">Primeiros passos para desenvolvimento web (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Ago 2021</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/559F2BA3/share" target="_blank">Projetos ágeis com SCRUM (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Set 2021</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/F7328D65/share" target="_blank">JavaScript ES6 essencial (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Set 2021</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/63E1EBBA/share" target="_blank">Desenvolvimento avançado com JavaScript ES6 (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Set 2021</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/3FB132E1/share" target="_blank">Introdução ao TypeScript (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Set 2021</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/FCF99A3D/share" target="_blank">Introdução ao ReactJS (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Out 2021</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Curso</span> <a href="https://www.dio.me/certificate/8A1A50E0/share" target="_blank">Trabalhando com Componentes em React (DIO)</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Out 2021</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Projeto</span> <a href="https://letmeask-c49ed.web.app/" target="_blank">Evento Next Level Week 6 (Rocketseat) </a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Nov 2021</time>
                                    </li>
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Projeto</span> <a href="https://darlley.github.io/Frontend/Rocketseat/DevFinances/" target="_blank">Maratona Discover (Rocketseat) </a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Nov 2021</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Desafio</span> <a href="https://privatecode.vercel.app/" target="_blank">Vaga para a empresa PrivateCode</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Nov 2021</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Desafio</span> <a href="https://sorteio-woad.vercel.app/" target="_blank">Vaga para a empresa Sorteio.com</a></p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Nov 2021</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <img src="https://knowledge.leadszapp.com/img/leadszapp.png" alt="" className="relative mt-3 p-[2px] h-6 w-6 flex-none rounded-full bg-gray-50" />
                                        <div className="flex-auto rounded-md p-3 ring-1 ring-inset ring-gray-200">
                                            <div className="flex justify-between gap-x-4">
                                                <div className="py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900"><a href="https://site-leadszapp.vercel.app/" target="_blank">Des. Web Full-Stack na LeadsZapp (Automação de Marketing)</a></span></div>
                                                <time dateTime="2023-01-23T15:56" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Nov 2021</time>
                                            </div>
                                            <p className="text-sm leading-6 text-gray-500">Atualmente, trabalho como Desenvolvedor Júnior na empresa. Minhas principais atividades são: desenvolver soluções de UI Design, criar e manter bases de conhecimento das ferramentas e participar de outros projetos. As tecnologias que utilizamos são: PHP/Laravel, Livewire, Alpine.js, TailwindCSS, MySQL, Docker e ReactJS com Next.js.</p>
                                        </div>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Cursos</span> conclui diversos cursos relacionados ao ecossitema Laravel.</p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">2022</time>
                                    </li>

                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Mudança de planos</span> Abandonei a faculdade por convicções pessoais.</p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Abr 2022</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Cursos</span> Conclui 2 cursos relacionados ao UI Design.</p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Jan 2023</time>
                                    </li>
                                    
                                    <li className="relative flex gap-x-4">
                                        <div className="absolute left-0 top-0 flex w-6 justify-center -bottom-6">
                                            <div className="w-px bg-gray-200"></div>
                                        </div>
                                        <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                                            <div className="h-1.5 w-1.5 rounded-full bg-gray-100 ring-1 ring-gray-300"></div>
                                        </div>
                                        <p className="flex-auto py-0.5 text-xs leading-5 text-gray-500"><span className="font-medium text-gray-900">Foco atual</span> Atualmente meu foco é Arquitetura de Software e AWS Cloud Computing.</p>
                                        <time dateTime="2023-01-24T09:12" className="flex-none py-0.5 text-xs leading-5 text-gray-500">Mar 2023</time>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
