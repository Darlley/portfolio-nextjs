import { CaretDownIcon } from "@radix-ui/react-icons";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import GithubCustomIcon from "@/icons/GithubCustomIcon";
import LinkedinCustomIcon from "@/icons/LinkedinCustomIcon";
import { File } from "lucide-react";
import { NavbarProps } from "./Navbar.types";
export default function Navbar(props: NavbarProps) {
  return (
    <nav className="flex items-center justify-center md:w-full h-[10%] text-white gap-8 px-4 xl:px-0">
      <div className="bg-gray-950/80 border border-gray-800 rounded-xl w-full flex items-center gap-8 justify-between px-4 backdrop-blur-sm relative">
        <div className="">
          <Link href="/" className="flex items-center flex-shrink-0 gap-2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.96424 2.68571C10.0668 2.42931 9.94209 2.13833 9.6857 2.03577C9.4293 1.93322 9.13832 2.05792 9.03576 2.31432L5.03576 12.3143C4.9332 12.5707 5.05791 12.8617 5.3143 12.9642C5.5707 13.0668 5.86168 12.9421 5.96424 12.6857L9.96424 2.68571ZM3.85355 5.14646C4.04882 5.34172 4.04882 5.6583 3.85355 5.85356L2.20711 7.50001L3.85355 9.14646C4.04882 9.34172 4.04882 9.6583 3.85355 9.85356C3.65829 10.0488 3.34171 10.0488 3.14645 9.85356L1.14645 7.85356C0.951184 7.6583 0.951184 7.34172 1.14645 7.14646L3.14645 5.14646C3.34171 4.9512 3.65829 4.9512 3.85355 5.14646ZM11.1464 5.14646C11.3417 4.9512 11.6583 4.9512 11.8536 5.14646L13.8536 7.14646C14.0488 7.34172 14.0488 7.6583 13.8536 7.85356L11.8536 9.85356C11.6583 10.0488 11.3417 10.0488 11.1464 9.85356C10.9512 9.6583 10.9512 9.34172 11.1464 9.14646L12.7929 7.50001L11.1464 5.85356C10.9512 5.6583 10.9512 5.34172 11.1464 5.14646Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>
            <h1 className="text-lg font-semibold tracking-tight">Darlley</h1>
          </Link>
        </div>

        <div className="flex flex-col items-center md:justify-between md:w-full md:flex-row">
          <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  Pages <CaretDownIcon className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul className="List one">
                    <li style={{ gridRow: "span 3" }}>
                      <Link
                        href="https://www.udemy.com/certificate/UC-3c8c6d6e-4c1d-4388-ab88-228cda80ed44/"
                        target="_blank"
                      >
                        <Image
                          src="/card.png"
                          width={400}
                          height={400}
                          className="Callout"
                          alt="Meu card"
                        />
                      </Link>
                    </li>

                    <li>
                      <Link className="ListItemLink" href="/about">
                        <div className="ListItemHeading">About</div>
                        <p className="ListItemText">
                          Saiba mais sobre mim, minhas crenças e meus hobbies.
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link className="ListItemLink" href="/projects">
                        <div className="ListItemHeading">Projects</div>
                        <p className="ListItemText">
                          Projetos que ja fiz ou participei.
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link className="ListItemLink" href="/products">
                        <div className="ListItemHeading">Products</div>
                        <p className="ListItemText">
                          Produtos que uso no meu dia a dia.
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  External <CaretDownIcon className="CaretDown" aria-hidden />
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul className="List two">
                    <li>
                      <Link
                        className={classNames("ListItemLink")}
                        href="https://www.instagram.com/filosofiawpp/"
                        target="_blank"
                      >
                        <div className="ListItemHeading">
                          Philosophy & Theology
                        </div>
                        <p className="ListItemText">
                          Tenho uma página sobre filsofia onde compartilho
                          minhas leituras de livros e artigos.
                        </p>
                      </Link>
                    </li>

                    <Link
                      className="ListItemLink"
                      href="https://medium.com/@darlleybrito"
                      target="_blank"
                    >
                      <div className="ListItemHeading">Medium</div>
                      <p className="ListItemText">Meu blog no Medium</p>
                    </Link>

                    <li>
                      <Link
                        className={classNames("ListItemLink")}
                        href="https://www.notion.so/DI-LOGOS-PLAT-NICOS-48e947e0c73b4d518145a4b83ab332e3"
                        target="_blank"
                      >
                        <div className="ListItemHeading">
                          Diálogos Platônicos
                        </div>
                        <p className="ListItemText">
                          Fiz alguns resumos e estudos sobre alguns dos livros
                          de Platão.
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={classNames("ListItemLink")}
                        href="https://www.evernote.com/shard/s513/client/snv?noteGuid=d73e3f67-0a8f-67ae-d2ba-fa74c4e9fd15&noteKey=8bf937abec1186e7380680fb59801cae&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs513%2Fsh%2Fd73e3f67-0a8f-67ae-d2ba-fa74c4e9fd15%2F8bf937abec1186e7380680fb59801cae&title=META%2BDE%2BLEITURA"
                        target="_blank"
                      >
                        <div className="ListItemHeading">Leitura ordenada</div>
                        <p className="ListItemText">
                          Lista de livros ordenada sobre filosofia com link de
                          afiliado.
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={classNames("ListItemLink")}
                        href="https://anchor.fm/darlley"
                        target="_blank"
                      >
                        <div className="ListItemHeading">Podcast</div>
                        <p className="ListItemText">
                          Ja tentei criar um podcast, mas a oratória e outros
                          fatores me fizeram ver que não isto que eu queria.
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={classNames("ListItemLink")}
                        href="https://github.com/Darlley/portfolio-nextjs"
                        target="_blank"
                      >
                        <div className="ListItemHeading">
                          Código do portfólio
                        </div>
                        <p className="ListItemText">
                          Quem quiser o código deste portfólio ele pode ser
                          encontrado no meu Github.
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={classNames("ListItemLink")}
                        href="https://youtu.be/3domkWfU3Lo"
                        target="_blank"
                      >
                        <div className="ListItemHeading">
                          🧐 Uma análise deste portfólio
                        </div>
                        <p className="ListItemText">
                          O professor (da Serliv) Daniel Tapias Morales analisou
                          este portfólio em seu canal no YouTube.
                        </p>
                      </Link>
                    </li>

                    <li>
                      <Link
                        className={classNames("ListItemLink")}
                        href="https://hub.docker.com/r/darlleybbf/portfolio"
                        target="_blank"
                      >
                        <div className="ListItemHeading">💙 Docker Image</div>
                        <p className="ListItemText">
                          Criei uma imagem Docker para este portfólio.
                        </p>
                      </Link>
                    </li>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <Link className="NavigationMenuLink" href="/blog">
                  Blog
                </Link>
              </NavigationMenu.Item>

              <NavigationMenu.Indicator className="NavigationMenuIndicator">
                <div className="Arrow" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="ViewportPosition">
              <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
          </NavigationMenu.Root>

          <div className="hidden gap-2 md:flex md:h-max md:w-max md:items-center md:text-white">
            <Link
              href="https://www.linkedin.com/in/darlleybrito/"
              target="_blank"
              className="flex items-center gap-2 text-base px-4 py-1 rounded-md hover:bg-gray-50/10 transition-all duration-500"
            >
              <LinkedinCustomIcon className="size-4" />
              <span>Linkedin</span>
            </Link>

            <Link
              href="https://github.com/Darlley"
              target="_blank"
              className="flex items-center gap-2 text-base px-4 py-1 rounded-md hover:bg-gray-50/10 transition-all duration-500"
            >
              <GithubCustomIcon className="size-4" />
              <span>Github</span>
            </Link>

            <Link
              href="/curriculo"
              className="flex items-center gap-2 text-base px-4 py-1 rounded-md hover:bg-gray-50/10 transition-all duration-500"
            >
              <File className="size-4 stroke-2" />
              <span>Curriculo</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
