'use client'

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Metadata from "@/components/molecules/Metadata";
import Navbar from "@/components/molecules/Navbar";
import CardModal from "@/components/molecules/CardModal";

export default function Home() {
  const metadata = {
    title: "Darlley Brito - Portfólio",
    description:
      "Desenvolvedor Web Full Stack, UI Designer, AWS Cloud Practitioner e SEO.",
    image: "/perfil.jpg",
  };

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [modalComponent, setModalComponent] = useState<number | null>(null);

  function handleClick(content: number) {
    setModalOpen(true);
    setModalComponent(content);
  }

  return (
    <>
      <Metadata metadata={metadata} />
      <header className="overflow-hidden">
        <div className="header__background">
          <div className="header__opacity">
            <div className="header__content">
              <Navbar />

              <div className="flex flex-col items-center justify-center flex-1 h-[90%]">
                <div className="relative p-8">
                  <div className="relative p-10 border-2 border-dashed rounded-full group animate-rotate-reverse border-spacing-4 border-gray-400/50">
                    <button
                      className="animate-rotate left-[45px] top-0 absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500"
                      onClick={() => handleClick(1)}
                    >
                      <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/habilities/React.png"
                        alt="Icone da biblioteca ReactJS"
                        width={40}
                        height={40}
                      />
                    </button>

                    <button
                      className="animate-rotate right-[65px] -top-[8px] absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500"
                      onClick={() => handleClick(2)}
                    >
                      <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/habilities/Figma.png"
                        alt="Icone do Figma"
                        width={40}
                        height={40}
                      />
                    </button>

                    <button
                      className="absolute transition-all duration-500 bg-cover border-2 rounded-full cursor-pointer -left-5 top-24 animate-rotate border-gray-400/50 active:scale-95 hover:scale-95"
                      onClick={() => handleClick(3)}
                    >
                      <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/habilities/Tailwind.png"
                        alt="Icone do TailwindCSS"
                        width={40}
                        height={40}
                      />
                    </button>

                    <button
                      className="absolute transition-all duration-500 bg-cover border-2 rounded-full cursor-pointer animate-rotate -right-4 top-20 border-gray-400/50 active:scale-95 hover:scale-95"
                      onClick={() => handleClick(4)}
                    >
                      <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/habilities/WordPress.png"
                        alt="Icone do WordPress.org"
                        width={40}
                        height={40}
                      />
                    </button>

                    <button
                      className="absolute transition-all duration-500 bg-cover border-2 rounded-full cursor-pointer left-4 bottom-8 animate-rotate border-gray-400/50 active:scale-95 hover:scale-95"
                      onClick={() => handleClick(5)}
                    >
                      <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/habilities/Laravel.png"
                        alt="Icone do Framework Laravel"
                        width={40}
                        height={40}
                      />
                    </button>

                    <button
                      className="absolute transition-all duration-500 bg-cover border-2 rounded-full cursor-pointer right-1 animate-rotate bottom-10 border-gray-400/50 active:scale-95 hover:scale-95"
                      onClick={() => handleClick(6)}
                    >
                      <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/habilities/MySQL.png"
                        alt="Icone do banco de dados MySQL"
                        width={40}
                        height={40}
                      />
                    </button>

                    <button
                      className="animate-rotate right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 active:scale-95 hover:scale-95 transition-all duration-500"
                      onClick={() => handleClick(7)}
                    >
                      <Image
                        className="w-[40px] h-[40px] border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2]"
                        src="/habilities/AWS.png"
                        alt="Icone da AWS Cloud"
                        width={40}
                        height={40}
                      />
                    </button>

                    <button
                      className="animate-rotate w-[200px] h-[200px] p-1 border-4 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0"
                      onClick={() => handleClick(0)}
                    >
                      <div className="w-full h-full rounded-full active:scale-95 hover:border-gray-400 border-2 bg-[url('/profile.jpg')] bg-cover transition-all duration-500" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center gap-2 text-center text-white">
                  <p>
                    Hi, I'm{" "}
                    <span className="font-bold text-secundary-500">
                      Darlley
                    </span>
                  </p>
                  <h1 className="text-2xl font-bold">
                    I'm Web Developer Front-end
                    <br />
                    UI Designer, SEO and <br />
                    (future) <span className="text-[#FFB240]">AWS</span> Cloud
                    Pratictioner
                  </h1>
                </div>
              </div>

              <div className="absolute flex justify-center w-full gap-2 md:hidden bottom-4 text-primary-100">
                <Link
                  href="https://www.linkedin.com/in/darlleybrito/"
                  target="_blank"
                  className="Menu__item"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Linkedin</span>
                </Link>

                <Link
                  href="https://github.com/Darlley"
                  target="_blank"
                  className="Menu__item"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Github</span>
                </Link>

                <Link
                  href="/curriculo"
                  target="_blank"
                  className="Menu__item"
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Curriculo</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
        {modalOpen &&
          <CardModal modalOpen={modalOpen} setModalOpen={setModalOpen} content={modalComponent} />
        }
      </header>

    </>
  );
}
