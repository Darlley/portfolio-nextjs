"use client";

import { motion } from "framer-motion";
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { ReactNode, SVGProps, useEffect, useState } from "react";

import AICustomIcon from "@/icons/AICustomIcon";
import AWSCustomIcon from "@/icons/AWSCustomIcon";
import BackEndCustomIcon from "@/icons/BackEndCustomIcon";
import FigmaCustomIcon from "@/icons/FigmaCustomIcon";
import LaravelCustomIcon from "@/icons/LaravelCustomIcon";
import LinkedinCustomIcon from "@/icons/LinkedinCustomIcon";
import MongoCustomIcon from "@/icons/MongoCustomIcon";
import N8NCustomIcon from "@/icons/N8NCustomIcon";
import ReactCustomIcon from "@/icons/ReactCustomIcon";
import TailwindCustomIcon from "@/icons/TailwindCustomIcon";
import WordpressCustomIcon from "@/icons/WordpressCustomIcon";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Tooltip,
} from "@nextui-org/react";
import { Mouse } from "lucide-react";
import Link from "next/link";
import Navbar from "../Navbar";

export type TypeContent =
  | "me"
  | "Design"
  | "CSS"
  | "AWS"
  | "Low-Code/No-Code"
  | "AI"
  | "Nestjs"
  | "Frontend"
  | "Laravel"
  | "Database"
  | "WordPress";

import CustomModal from "../CustomModal";
import { PageHomeProps } from "./PageHome.types";
export default function PageHome(props: PageHomeProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [content, setContent] = useState<TypeContent>("me");

  function onOpenModal(type: TypeContent) {
    setIsOpen(true);
    setContent(type);
  }

  const skills: Array<{
    name: TypeContent;
    top: string;
    left: string;
    delay: string;
    icon: React.FC<SVGProps<SVGSVGElement>>;
  }> = [
    {
      name: "Design",
      top: "9.55%",
      left: "79.39%",
      delay: "1s",
      icon: FigmaCustomIcon,
    },
    {
      name: "CSS",
      top: "34.55%",
      left: "97.55%",
      delay: "2s",
      icon: TailwindCustomIcon,
    },
    {
      name: "WordPress",
      top: "65.45%",
      left: "97.55%",
      delay: "3s",
      icon: WordpressCustomIcon,
    },
    {
      name: "Database",
      top: "100%",
      left: "50%",
      delay: "5s",
      icon: MongoCustomIcon,
    },
    {
      name: "Laravel",
      top: "90.45%",
      left: "79.39%",
      delay: "4s",
      icon: LaravelCustomIcon,
    },
    {
      name: "Frontend",
      top: "0%",
      left: "50%",
      delay: "0s",
      icon: ReactCustomIcon,
    },
    {
      name: "Nestjs",
      top: "9.55%",
      left: "20.61%",
      delay: "9s",
      icon: BackEndCustomIcon,
    },
    {
      name: "AI",
      top: "65.45%",
      left: "2.45%",
      delay: "7s",
      icon: AICustomIcon,
    },
    {
      name: "Low-Code/No-Code",
      top: "34.55%",
      left: "2.45%",
      delay: "8s",
      icon: N8NCustomIcon,
    },
    {
      name: "AWS",
      top: "90.45%",
      left: "20.61%",
      delay: "6s",
      icon: AWSCustomIcon,
    },
  ];

  return (
    <>
      <div className="h-svh relative overflow-y-auto bg-zinc-950 flex flex-col">
        <header className="z-50 fixed w-full px-4 py-6 md:px-0">
          <div className="container w-full mx-auto">
            <Navbar />
          </div>
        </header>

        <main className="container relative z-20 mx-auto w-full flex-grow px-4 md:px-0 py-6 flex flex-col">
          <section className="flex flex-col items-center justify-center h-svh">
            <div className="relative p-4 sm:p-8">
              <div className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] flex items-center justify-center">
                <Tooltip content="Sobre mim" color="primary">
                  <button
                    className="absolute size-[140px] sm:size-[200px] p-1 border-4 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-10"
                    onClick={() => onOpenModal("me")}
                  >
                    <div className="w-full h-full rounded-full hover:border-gray-400 border-2 bg-[url('/profile.jpg')] bg-cover transition-all duration-500" />
                  </button>
                </Tooltip>

                <div className="absolute w-full h-full animate-rotate-reverse">
                  {skills.map((item, index) => (
                    <Tooltip content={item.name} key={index}>
                      <button
                        style={{
                          top: item.top,
                          left: item.left,
                          transform: "translate(-50%, -50%)",
                          animation: `orbit 20s linear infinite ${item.delay}`,
                        }}
                        className="inline-flex absolute"
                        onClick={() => onOpenModal(item.name as TypeContent)}
                      >
                        <div className="bg-gray-900 border border-gray-700 rounded-full p-0.5 hover:scale-105 flex items-center jsutify-center">
                          <item.icon className="size-7 md:size-8 animate-rotate" />
                        </div>
                      </button>
                    </Tooltip>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center text-white mt-4">
              <p className="text-sm sm:text-base">
                Olá, eu sou{" "}
                <span className="font-bold text-primary inline-block">
                  Darlley
                </span>
              </p>
              <h1 className="text-xl sm:text-2xl font-bold mt-2">
                Sou Desenvolvedor Web Front-end
                <br />e Designer de UI.
              </h1>
            </div>

            <div className="mt-8 text-center">
              <Button as={Link} href="#projects" color="primary">
                Ver mais
                <Mouse />
              </Button>
            </div>
          </section>

          <section
            className="flex flex-col items-center justify-center px-4 xl:px-0 h-svh w-full"
            id="projects"
          >
            <div className="text-center mb-10">
              <span className="text-4xl animate-pulse">✨</span>
              <h2 className="text-4xl font-bold">Favoritos </h2>
              <Link
                href="/projects"
                className="text-primary font-light hover:underline"
              >
                Veja todos
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-4 2xl:p-0">
              <Link href="https://letmeask-c49ed.web.app/" target="_blank">
                <Card className="p-2 w-full">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Salas Q&A</p>
                    <small className="text-default-500">
                      Vitejs, Firebase, SASS
                    </small>
                    <h4 className="font-bold text-large text-primary">LetmeAsk</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <div className="h-96"> {/* Adicionando altura fixa */}
                      <Swiper
                        spaceBetween={50}
                        watchSlidesProgress
                        modules={[Pagination, Scrollbar, Autoplay]}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                        }}
                      >
                        <SwiperSlide>
                          <Image
                            alt="Preview do letmeask 1"
                            src="/home/projects/letmeask-1.png"
                            width={800}
                            height={800}
                            className="object-cover rounded-xl w-full h-96"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            alt="Preview do letmeask 2"
                            src="/home/projects/letmeask-2.png"
                            width={800}
                            height={800}
                            className="object-cover rounded-xl w-full h-96"
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </CardBody>
                </Card>
              </Link>
              
              <Link href="https://github.com/Darlley/knowledge-builder" target="_blank">
                <Card className="p-2 w-full">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Editor</p>
                    <small className="text-default-500">
                      Next.js, NextUI, Stripe, Supabase
                    </small>
                    <h4 className="font-bold text-large text-primary">Knowledge Builder</h4>
                  </CardHeader>
                  <CardBody className="overflow-visible py-2">
                    <div className="h-96"> {/* Adicionando altura fixa */}
                      <Swiper
                        spaceBetween={50}
                        watchSlidesProgress
                        modules={[Pagination, Scrollbar, Autoplay]}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                          delay: 5000,
                          disableOnInteraction: false,
                        }}
                        pagination={{
                          clickable: true,
                        }}
                      >
                        <SwiperSlide>
                          <Image
                            alt="Preview do Editor 1"
                            src="/home/projects/knowledge-builder-1.png"
                            width={800}
                            height={800}
                            className="object-cover rounded-xl w-full h-96"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            alt="Preview do Editor 2"
                            src="/home/projects/knowledge-builder-2.png"
                            width={800}
                            height={800}
                            className="object-cover rounded-xl w-full h-96"
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </CardBody>
                </Card>
              </Link>
            </div>
          </section>
        </main>

        <nav className="fixed flex justify-center w-full gap-2 md:hidden left-0 bottom-4 z-50">
          <ButtonGroup>
            <Button as={Link} href="/#projects" isIconOnly={true}>
              <Mouse className="stroke-1 size-5" />
            </Button>
            <Button
              as={Link}
              href="https://www.linkedin.com/in/darlleybrito/"
              target="_blank"
            >
              <LinkedinCustomIcon />
              <span>Linkedin</span>
            </Button>
            <Button as={Link} href="https://github.com/Darlley" target="_blank">
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
            </Button>
            <Button as={Link} href="/curriculo" target="_blank">
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
            </Button>
          </ButtonGroup>
        </nav>

        <Beams />
        <GradientGrid />
      </div>

      <CustomModal isOpen={isOpen} content={content} setIsOpen={setIsOpen} />
    </>
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
