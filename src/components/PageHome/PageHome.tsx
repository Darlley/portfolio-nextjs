"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect, useState } from "react";

import Link from "next/link";
import Navbar from "../Navbar";
import { PageHomeProps } from "./PageHome.types";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
export default function PageHome(props: PageHomeProps) {
  return (
    <div className="h-svh relative overflow-y-auto bg-zinc-950 flex flex-col">
      <header className="z-50 fixed w-full px-4 py-6 md:px-0">
        <div className="max-w-7xl w-full mx-auto">
          <Navbar />
        </div>
      </header>

      <main className="max-w-7xl relative z-20 mx-auto w-full flex-grow px-4 md:px-0 py-6 flex flex-col">
        <section className="flex flex-col items-center justify-center h-svh">
          <div className="relative p-4 sm:p-8">
            <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] flex items-center justify-center">
              <button
                className="absolute w-[140px] h-[140px] sm:w-[200px] sm:h-[200px] p-1 border-4 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-10"
                onClick={() => onOpenModal("me")}
              >
                <div className="w-full h-full rounded-full hover:border-gray-400 border-2 bg-[url('/profile.jpg')] bg-cover transition-all duration-500" />
              </button>

              <div className="absolute w-full h-full animate-rotate-reverse">
                {[
                  { name: "react", top: "0%", left: "50%", delay: "0s" },
                  { name: "figma", top: "14.64%", left: "85.36%", delay: "1s" },
                  { name: "tailwind", top: "50%", left: "100%", delay: "2s" },
                  {
                    name: "wordpress",
                    top: "85.36%",
                    left: "85.36%",
                    delay: "3s",
                  },
                  { name: "laravel", top: "100%", left: "50%", delay: "4s" },
                  { name: "sql", top: "85.36%", left: "14.64%", delay: "5s" },
                  { name: "aws", top: "50%", left: "0%", delay: "6s" },
                  { name: "novo", top: "14.64%", left: "14.64%", delay: "7s" },
                ].map((item, index) => (
                  <button
                    key={index}
                    className="absolute w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] rounded-full bg-cover cursor-pointer border-2 border-gray-400/50 hover:scale-110 transition-all duration-500"
                    style={{
                      top: item.top,
                      left: item.left,
                      transform: "translate(-50%, -50%)",
                      animation: `orbit 20s linear infinite ${item.delay}`,
                    }}
                    onClick={() => onOpenModal(item.name)}
                  >
                    <Image
                      className="w-full h-full border hover:border-gray-400/50 transition-all duration-500 rounded-full p-[1px] z-[2] animate-rotate"
                      src={`/habilities/${
                        item.name.charAt(0).toUpperCase() + item.name.slice(1)
                      }.png`}
                      alt={`Ícone de ${item.name}`}
                      width={40}
                      height={40}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center text-white mt-4">
            <p className="text-sm sm:text-base">
              Olá, eu sou{" "}
              <span className="font-bold text-secundary-500">Darlley</span>
            </p>
            <h1 className="text-xl sm:text-2xl font-bold mt-2">
              Sou Desenvolvedor Web Front-end
              <br />e Designer de UI.
            </h1>
          </div>

        <div className="mt-8 text-center">
          <Link href="/projetos" className="inline-flex items-center gap-2 text-white bg-primary-500 hover:bg-primary-600 transition-colors duration-300 px-6 py-3 rounded-full text-lg font-semibold">
            Ver mais
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
        </section>

        <section className="flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-4">Meus Projetos</h2>
          <div className="grid grid-cols-3 gap-4">
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Blog Pessoal</p>
                <small className="text-default-500">Next.js e Tailwind CSS</small>
                <h4 className="font-bold text-large">Meu Blog</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Imagem do Blog Pessoal"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={180}
                />
              </CardBody>
            </Card>

            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">E-commerce</p>
                <small className="text-default-500">React e Node.js</small>
                <h4 className="font-bold text-large">Loja Online</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Imagem do E-commerce"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={180}
                />
              </CardBody>
            </Card>

            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">App de Tarefas</p>
                <small className="text-default-500">Vue.js</small>
                <h4 className="font-bold text-large">Gerenciador de Tarefas</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Imagem do App de Tarefas"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={180}
                />
              </CardBody>
            </Card>

            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Dashboard</p>
                <small className="text-default-500">Angular e Material UI</small>
                <h4 className="font-bold text-large">Painel Administrativo</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Imagem do Dashboard"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={180}
                />
              </CardBody>
            </Card>
            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Blog Pessoal</p>
                <small className="text-default-500">Next.js e Tailwind CSS</small>
                <h4 className="font-bold text-large">Meu Blog</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Imagem do Blog Pessoal"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={180}
                />
              </CardBody>
            </Card>

            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">E-commerce</p>
                <small className="text-default-500">React e Node.js</small>
                <h4 className="font-bold text-large">Loja Online</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Imagem do E-commerce"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={180}
                />
              </CardBody>
            </Card>

            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">App de Tarefas</p>
                <small className="text-default-500">Vue.js</small>
                <h4 className="font-bold text-large">Gerenciador de Tarefas</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Imagem do App de Tarefas"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={180}
                />
              </CardBody>
            </Card>

            <Card className="py-4">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">Dashboard</p>
                <small className="text-default-500">Angular e Material UI</small>
                <h4 className="font-bold text-large">Painel Administrativo</h4>
              </CardHeader>
              <CardBody className="overflow-visible py-2">
                <Image
                  alt="Imagem do Dashboard"
                  className="object-cover rounded-xl"
                  src="https://nextui.org/images/hero-card-complete.jpeg"
                  width={270}
                  height={180}
                />
              </CardBody>
            </Card>
          </div>
        </section>
      </main>

      <nav className="fixed flex justify-center w-full gap-2 md:hidden left-0 bottom-2 z-50">
        <div className="bg-black/90 p-2 rounded-lg flex items-center gap-2 border border-gray-900">
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

          <Link href="/curriculo" target="_blank" className="Menu__item">
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
      </nav>

      <Beams />
      <GradientGrid />
    </div>
  );
}

const Beams: React.FC = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

interface BeamProps {
  top: number;
  left: number;
  transition?: {
    duration?: number;
    repeatDelay?: number;
    delay?: number;
  };
}

const Beam: React.FC<BeamProps> = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 8,
      }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
    />
  );
};

const GradientGrid: React.FC = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2.5,
        ease: "easeInOut",
      }}
      className="absolute inset-0 z-0"
    >
      <div
        style={{
          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='rgb(30 58 138 / 0.5)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
        }}
        className="absolute inset-0 z-0"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
    </motion.div>
  );
};

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;
