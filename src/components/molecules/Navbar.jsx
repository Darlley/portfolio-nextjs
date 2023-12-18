import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";
import classNames from "classnames";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="flex items-center justify-center md:justify-start md:w-full h-[10%] text-white gap-8 lg:md-0">
      <div className="">
        <a href="/" className="flex items-center flex-shrink-0 gap-2">
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
        </a>
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
                    <NavigationMenu.Link asChild>
                      <a
                        href="https://www.udemy.com/certificate/UC-3c8c6d6e-4c1d-4388-ab88-228cda80ed44/"
                        target="_blank"
                      >
                        <Image
                          src="/card.png"
                          width={400}
                          height={400}
                          className="Callout"
                        />
                      </a>
                    </NavigationMenu.Link>
                  </li>

                  <li>
                    <NavigationMenu.Link>
                      <a className="ListItemLink" href="/about">
                        <div className="ListItemHeading">About</div>
                        <p className="ListItemText">
                          Saiba mais sobre mim, minhas crenças e meus hobbies.
                        </p>
                      </a>
                    </NavigationMenu.Link>
                  </li>

                  <li>
                    <NavigationMenu.Link>
                      <a className="ListItemLink" href="/projects">
                        <div className="ListItemHeading">Projects</div>
                        <p className="ListItemText">
                          Projetos que ja fiz ou participei.
                        </p>
                      </a>
                    </NavigationMenu.Link>
                  </li>
                  
                  <li>
                    <NavigationMenu.Link>
                      <a className="ListItemLink" href="/products">
                        <div className="ListItemHeading">Products</div>
                        <p className="ListItemText">
                          Produtos que uso no meu dia a dia.
                        </p>
                      </a>
                    </NavigationMenu.Link>
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
                    <NavigationMenu.Link>
                      <a
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
                      </a>
                    </NavigationMenu.Link>
                  </li>

                  <NavigationMenu.Link>
                    <a className="ListItemLink" href="https://medium.com/@darlleybrito" target="_blank">
                      <div className="ListItemHeading">Medium</div>
                      <p className="ListItemText">
                        Meu blog no Medium
                      </p>
                    </a>
                  </NavigationMenu.Link>

                  <li>
                    <NavigationMenu.Link>
                      <a
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
                      </a>
                    </NavigationMenu.Link>
                  </li>

                  <li>
                    <NavigationMenu.Link>
                      <a
                        className={classNames("ListItemLink")}
                        href="https://www.evernote.com/shard/s513/client/snv?noteGuid=d73e3f67-0a8f-67ae-d2ba-fa74c4e9fd15&noteKey=8bf937abec1186e7380680fb59801cae&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs513%2Fsh%2Fd73e3f67-0a8f-67ae-d2ba-fa74c4e9fd15%2F8bf937abec1186e7380680fb59801cae&title=META%2BDE%2BLEITURA"
                        target="_blank"
                      >
                        <div className="ListItemHeading">Leitura ordenada</div>
                        <p className="ListItemText">
                          Lista de livros ordenada sobre filosofia com link de
                          afiliado.
                        </p>
                      </a>
                    </NavigationMenu.Link>
                  </li>

                  <li>
                    <NavigationMenu.Link>
                      <a
                        className={classNames("ListItemLink")}
                        href="https://anchor.fm/darlley"
                        target="_blank"
                      >
                        <div className="ListItemHeading">Podcast</div>
                        <p className="ListItemText">
                          Ja tentei criar um podcast, mas a oratória e outros
                          fatores me fizeram ver que não isto que eu queria.
                        </p>
                      </a>
                    </NavigationMenu.Link>
                  </li>

                  <li>
                    <NavigationMenu.Link>
                      <a
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
                      </a>
                    </NavigationMenu.Link>
                  </li>
                  
                  {/* a partir daqui */}
                  <li>
                    <NavigationMenu.Link>
                      <a
                        className={classNames("ListItemLink")}
                        href="https://github.com/Darlley/portfolio-nextjs"
                        target="_blank"
                      >
                        <div className="ListItemHeading">
                          Uma análise deste portfólio
                        </div>
                        <p className="ListItemText">
                          O professor (da Serliv) Daniel Tapias Morales analisou este portfólio em seu canal no YouTube. 🧐
                        </p>
                      </a>
                    </NavigationMenu.Link>
                  </li>

                </ul>
              </NavigationMenu.Content>
            </NavigationMenu.Item>

            <NavigationMenu.Item>
              <NavigationMenu.Link className="NavigationMenuLink" href="/blog">
                Blog
              </NavigationMenu.Link>
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

          <Link href="/curriculo" className="Menu__item">
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
    </nav>
  );
}

export default Navbar;
