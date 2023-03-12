import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';

function Navbar() {
    return (
        <nav class="flex items-center justify-center md:justify-start md:w-full h-[10%] text-white gap-8 px-4 lg:md-0">
            <div class="flex items-center flex-shrink-0">
                <i className="text-4xl bx bxl-react text-secundary-500 animate-[spin_25s_linear_infinite]" />
                <h1 class="font-semibold text-xl tracking-tight">Darlley</h1>
            </div>
            
            <div class="flex items-center md:justify-between md:w-full flex-col md:flex-row">
                <NavigationMenu.Root className="NavigationMenuRoot">
                    <NavigationMenu.List className="NavigationMenuList">
                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                Pages <CaretDownIcon className="CaretDown" aria-hidden />
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="NavigationMenuContent">
                                <ul className="List one">
                                    <li style={{ gridRow: 'span 3' }}>
                                        <NavigationMenu.Link asChild>
                                        <a className="Callout" href="/">
                                            <Image 
                                                src="/habilities/React.png"
                                                width={50}
                                                height={50}
                                            />
                                            <div className="CalloutHeading">Full Stack</div>
                                            <p className="CalloutText">TALL Stack + Reactjs + Figma.</p>
                                        </a>
                                        </NavigationMenu.Link>
                                    </li>

                                    <li>
                                        <NavigationMenu.Link>
                                            <a className={classNames('ListItemLink')} href="/about">
                                                <div className="ListItemHeading">About</div>
                                                <p className="ListItemText">Saiba mais sobre mim, minhas crenças e meus hobbies.</p>
                                            </a>
                                        </NavigationMenu.Link>
                                    </li>

                                    <li>
                                        <NavigationMenu.Link>
                                            <a className={classNames('ListItemLink')} href="/certifications">
                                                <div className="ListItemHeading">Certifications</div>
                                                <p className="ListItemText">Conheça meus conhecimentos, minhas certificações e minhas experiências profissionais</p>
                                            </a>
                                        </NavigationMenu.Link>
                                    </li>

                                    <li>
                                        <NavigationMenu.Link>
                                            <a className={classNames('ListItemLink')} href="/contact">
                                                <div className="ListItemHeading">Contact</div>
                                                <p className="ListItemText">Fale comigo</p>
                                            </a>
                                        </NavigationMenu.Link>
                                    </li>
                                </ul>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                Projects <CaretDownIcon className="CaretDown" aria-hidden />
                            </NavigationMenu.Trigger>
                            <NavigationMenu.Content className="NavigationMenuContent">
                                <ul className="List two">
                                    <li>
                                        <NavigationMenu.Link>
                                            <a className={classNames('ListItemLink')} href="/docs/primitives/overview/introduction">
                                                <div className="ListItemHeading">Getting started</div>
                                                <p className="ListItemText">A quick tutorial to get you up and running with Radix Primitives.</p>
                                            </a>
                                        </NavigationMenu.Link>
                                    </li>
                                    <li>
                                        <NavigationMenu.Link>
                                            <a className={classNames('ListItemLink')} >
                                                <div className="ListItemHeading">Introduction</div>
                                                <p className="ListItemText">Build high-quality, accessible design systems and web apps.</p>
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
                    <Link href="https://www.linkedin.com/in/darlleybrito/" target="_blank" className="Menu__item">
                        <i className="bx bxl-linkedin-square" />
                        <span>Linkedin</span>
                    </Link>

                    <Link href="https://github.com/Darlley" target="_blank" className="Menu__item">
                        <i className="bx bxl-github" />
                        <span>Github</span>
                    </Link>

                    <Link href="https://darlley.github.io/curriculo-darlley-brasil-de-brito-furtado.pdf" target="_blank" className="Menu__item">
                        <i className="bx bxs-file-pdf" />
                        <span>Curriculo</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;