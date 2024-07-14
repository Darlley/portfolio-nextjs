'use client'

import Link from "next/link";
import HeaderPage from "@/components/molecules/HeaderPage";
import Metadata from "@/components/molecules/Metadata";
import { useEffect, useState } from "react";

const metadata = {
  title: "Darlley Brito - Curriculo",
  description: "Esta é a versão online que fiz do meu curriculo.",
  image: "https://darlley.github.io/images/header.jpg",
};


export default function Curriculo() {
  const [api, setApi] = useState({
    firstName: "",
    lastName: "",
    title: "",
    profileImage: "",
    education: [],
    skills: [],
    experience: [],
    languages: [],
    contact: {},
    social: {},
    profileText: "",
    download: ""
  });

  useEffect(() => {
    try {
      fetch("/api")
        .then(async (response) => {
          const result = await response.text();
          const data = JSON.parse(result);
          setApi(data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
              <Link
                href="https://cvkeep.com/cv/cc6875604249d59be4b770f93fdd19f5"
                target="_blank"
                title="Solicite via e-mail"
                className="curriculo__fixed__top--item"
                alt="Curriculo"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <span>Get number →</span>
              </Link>

              <Link
                href="mailto:darlleybrito@gmail.com"
                target="_blank"
                className="curriculo__fixed__top--item"
                alt="Email"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                  />
                </svg>
                <span>darlleybrito@gmail.com</span>
              </Link>

              <Link
                href="/api"
                className="curriculo__fixed__top--item"
                alt="API"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                </svg>

                <span>API</span>
              </Link>

              <Link
                href="/curriculo.pdf"
                target="_blank"
                className="curriculo__fixed__top--item"
                alt="PDF"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
                  />
                </svg>
                <span>Baixar</span>
              </Link>

            </div>
          </div>

          <div className="curriculo__header__content">
            <div className="curriculo__header__content--profile">
              <img src={api.profileImage || ''} alt="Minha imagem" />
            </div>

            <div className="curriculo__header__content--headline">
              <h1>
                <strong>{api.firstName}</strong> {api.lastName}
              </h1>
              <h2>{api.title}</h2>
            </div>
          </div>
        </header>

        <main className="curriculo__app__main">
          <div className="curriculo__app__item">
            <h3 className="curriculo__app__title">Profile</h3>
            <p className="curriculo__app__description">{api.profileText}</p>
          </div>

          <div className="curriculo__row">
            <div className="curriculo__col-5">
              <div className="curriculo__app__item">
                <h3 className="curriculo__app__title">Education</h3>
                <div className="curriculo__app__timeline">
                  <div className="curriculo__timeline__item">
                    {api.education.map((current) => (
                      <div className="curriculo__content">
                        <span className="curriculo__app__date--timeline">
                          {current.period}
                        </span>
                        <h2 className="curriculo__app__title--timeline">
                          {current.institution}
                        </h2>
                        <p className="curriculo__app__description--timeline">
                          {
                            current.details.split(" ").map((frase,index) => {
                              if (index >= 3 && index <= 9){
                                return (
                                  <strong key={index}>
                                  {frase + " "}
                                  </strong>
                                )
                              }

                              return frase + " "
                            })
                          }
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="curriculo__app__item">
                <h3 className="curriculo__app__title">Skills</h3>
                <div className="curriculo__app__container">
                  {
                    api.skills.map((skill,index) => (
                      <span className="curriculo__app__tag" key={index}>{skill}</span>
                    ))
                  }
                </div>
              </div>
            </div>

            <div className="curriculo__col-7">
              <div className="curriculo__app__item">
                <h3 className="curriculo__app__title">Experience</h3>
                <div className="curriculo__app__timeline">
                  <div className="curriculo__timeline__item">
                    {api.experience.map((current, index) => (
                      <div className="curriculo__content" key={index}>
                        <span className="curriculo__app__date--timeline">
                          {current.period}
                        </span>
                        <h2 className="curriculo__app__title--timeline">
                        {current.company}
                        </h2>
                        <p className="curriculo__app__description--timeline">
                          {current.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-20 md:mt-4 curriculo__app__item">
                <h3 className="curriculo__app__title">Languages</h3>
                <div className="curriculo__app__container">
                  {api.languages.map((language, index) => (
                    <span className="curriculo__app__tag" key={index}>{language}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="curriculo__footer">
          <div className="curriculo__footer__container">
            <p>
              Desenvolvido por{" "}
              <Link
                href="https://darlley.dev/"
                className="transition-colors curriculo__underline hover:text-zinc-800"
              >
                Darlley Brito
              </Link>{" "}
              sob licença MIT © 2023.
            </p>

            <div className="flex gap-4">
              <Link
                href="https://www.figma.com/file/YfJtjKe8p2J7U7PQ3N5goB/Curriculo?node-id=1%3A3&t=TvRfslRgIRxZpogt-1"
                target="_blank"
                alt="Figma"
              >
                <svg
                  className="h-8 curriculo__w-8"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 16C16 13.7909 17.7909 12 20 12C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20C17.7909 20 16 18.2091 16 16Z"
                    fill="#1ABCFE"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 24C8 21.7909 9.79086 20 12 20H16V24C16 26.2091 14.2091 28 12 28C9.79086 28 8 26.2091 8 24Z"
                    fill="#0ACF83"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M16 4V12H20C22.2091 12 24 10.2091 24 8C24 5.79086 22.2091 4 20 4H16Z"
                    fill="#FF7262"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 8C8 10.2091 9.79086 12 12 12H16V4H12C9.79086 4 8 5.79086 8 8Z"
                    fill="#F24E1E"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 16C8 18.2091 9.79086 20 12 20H16V12H12C9.79086 12 8 13.7909 8 16Z"
                    fill="#A259FF"
                  />
                </svg>
              </Link>

              <Link
                href="https://www.linkedin.com/in/darlleybrito/"
                target="_blank"
                alt="Linkedin"
              >
                <svg
                  className="h-8 curriculo__w-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    fill="#0A66C2"
                    d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
