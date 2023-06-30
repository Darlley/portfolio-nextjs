import HeaderPage from "@/components/molecules/HeaderPage"
import Metadata from "@/components/molecules/Metadata"

const metadata = {
    title: "Darlley Brito - Curriculo",
    description: "Esta é a ver~soa online que fiz do meu curriculo.",
    image: "https://darlley.github.io/images/header.jpg"
}

export default function About() {     
    return (
        <>
            <Metadata metadata={metadata} />
            <HeaderPage>
                <h1>Meu currículo</h1>
            </HeaderPage>
            
            <div className="curriculo__curriculo">
                <header className="curriculo__header">
                    <div className="sticky top-0 curriculo__fixed__top">
                        <div className="curriculo__fixed__top--container">

                            <a href="tel:5567993328678" target="_blank" className="curriculo__fixed__top--item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                </svg>
                                <span>+55 67 9 9332-8678</span>
                            </a>

                            <a href="mailto:darlleybrito@gmail.com" target="_blank" className="curriculo__fixed__top--item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
                                </svg>
                                <span>darlleybrito@gmail.com</span>
                            </a>

                            <a href="https://goo.gl/maps/gvRhMAV8Xg5RiD2P9" target="_blank" className="curriculo__fixed__top--item">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                                <span>Campo Grande, Mato Grosso do Sul (Brasil)</span>
                            </a>
                        </div>
                    </div>

                    <div className="curriculo__header__content">
                        <div className="curriculo__header__content--profile">
                            <img src="/profile.png" alt="" />
                        </div>

                        <div className="curriculo__header__content--headline">
                            <h1><strong>DARLLEY</strong> BRITO</h1>
                            <h2>Web Developer, UI Designer, SEO and AWS Cloud Pratictioner</h2>
                        </div>
                    </div>
                </header>

                <main className="curriculo__app__main">

                    <div className="curriculo__app__item">
                        <h3 className="curriculo__app__title">Profile</h3>
                        <p className="curriculo__app__description">Cursei somente até o 5° semestre (2022) em Análise e Desenvolvimento de Sistemas na Universidade Católica Dom Bosco (UCDB). Pretendo concluir (2024) o curso a distância e tenho interesse pelas areas de UI Design, Cloud Computing e Machine Learning. Tenho 2 anos de experiência em Desenvolvimento Web atuando em duas empresas no ramo de Marketing Digital.
                            <br />
                                Além do computador, alguns dos meus hobbies incluem: skate, musculação, estética automotiva, filosofia e cerveja artesanal.</p>
                    </div>

                    <div className="curriculo__row">
                        <div className="curriculo__col-5">
                            <div className="curriculo__app__item">
                                <h3 className="curriculo__app__title">Education</h3>
                                <div className="curriculo__app__timeline">
                                    <div className="curriculo__timeline__item">
                                        <div className="curriculo__content">
                                            <span className="curriculo__app__date--timeline">2018 - 2022 (Não concluido)</span>
                                            <h2 className="curriculo__app__title--timeline">Universidade Católica Dom Bosco (UCDB)</h2>
                                            <p className="curriculo__app__description--timeline">Fiz o curso <strong>Tecnologia em Análise e Desenvolvimento de Sistemas</strong> entre 2018 e deixei de cursar em 2022 para priorizar outras coisas (conhecimentos mais urgentes e trabalho).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="curriculo__app__item">
                                <h3 className="curriculo__app__title">Skills</h3>
                                <div className="curriculo__app__container">
                                    <span className="curriculo__app__tag">HTML</span>
                                    <span className="curriculo__app__tag">CSS</span>
                                    <span className="curriculo__app__tag">NPM</span>
                                    <span className="curriculo__app__tag">GIT</span>
                                    <span className="curriculo__app__tag">GITHUB</span>
                                    <span className="curriculo__app__tag">SASS</span>
                                    <span className="curriculo__app__tag">TAILWIND</span>
                                    <span className="curriculo__app__tag">BOOTSTRAP</span>
                                    <span className="curriculo__app__tag">VITE</span>
                                    <span className="curriculo__app__tag">JAVASCRIPT</span>
                                    <span className="curriculo__app__tag">REACT</span>
                                    <span className="curriculo__app__tag">NEXT.JS</span>
                                    <span className="curriculo__app__tag">PHP</span>
                                    <span className="curriculo__app__tag">WORDPRESS</span>
                                    <span className="curriculo__app__tag">AWS</span>
                                    <span className="curriculo__app__tag">LARAVEL</span>
                                    <span className="curriculo__app__tag">MYSQL</span>
                                </div>
                            </div>
                        </div>

                        <div className="curriculo__col-7">
                            <div className="curriculo__app__item">
                                <h3 className="curriculo__app__title">Experience</h3>
                                <div className="curriculo__app__timeline">
                                    <div className="curriculo__timeline__item">
                                        <div className="curriculo__content">
                                            <span className="curriculo__app__date--timeline">2019 - 2020</span>
                                            <h2 className="curriculo__app__title--timeline">Rino3 Marketing Digital</h2>
                                            <p className="curriculo__app__description--timeline">Fiz estágio como Desenvolvedor Back end PHP. Convertia códigos estáticos (HTML, CSS, JavaScript) em dinâmico com PHP usando WordPress como CMS. Também fazia a manutenção a correção de bugs e o deploy de sites institucionais para advogados.</p>
                                        </div>
                                    </div>

                                    <div className="curriculo__timeline__item">
                                        <div className="curriculo__content">
                                            <span className="curriculo__app__date--timeline">2021 - atualmente</span>
                                            <h2 className="curriculo__app__title--timeline">Webmaia (LeadsZapp & Growp)</h2>
                                            <p className="curriculo__app__description--timeline">Trabalho como Desenvolvedor Web Fullstack Júnior. Ja fiz o UI Design dos sites novos e ferramentas que serão implementados e landing pages para lançamentos e anuncios digitais, desenvolvi a base de conhecimentos para as ferramentas, e recursos novos.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-20 md:mt-4 curriculo__app__item">
                                <h3 className="curriculo__app__title">Languages</h3>
                                <div className="curriculo__app__container">
                                    <span className="curriculo__app__tag">PORTUGUÊS</span>
                                    <span className="curriculo__app__tag">INGLES</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </main>

                <footer className="curriculo__footer">
                    <div className="curriculo__footer__container">
                        <p>Desenvolvido por <a href="https://darlley.dev/" className="transition-colors curriculo__underline hover:text-zinc-800">Darlley Brito</a> sob licença MIT © 2023.</p>

                        <div className="flex gap-4">
                            <a href="https://www.figma.com/file/YfJtjKe8p2J7U7PQ3N5goB/Curriculo?node-id=1%3A3&t=TvRfslRgIRxZpogt-1" target="_blank">
                                <svg className="h-8 curriculo__w-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z" fill="#1ABCFE" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z" fill="#0ACF83" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z" fill="#FF7262" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z" fill="#F24E1E" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z" fill="#A259FF" />
                                </svg>
                            </a>

                            <a href="https://www.linkedin.com/in/darlleybrito/" target="_blank">
                                <svg className="h-8 curriculo__w-8" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z" /></svg>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}