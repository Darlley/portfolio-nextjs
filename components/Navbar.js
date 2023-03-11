import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { CaretDownIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import Link from 'next/link';

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
                                            <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                                            <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                                            <path d="M12 0H4V8H12V0Z"></path>
                                            <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                                            </svg>
                                            <div className="CalloutHeading">Radix Primitives</div>
                                            <p className="CalloutText">Unstyled, accessible components for React.</p>
                                        </a>
                                        </NavigationMenu.Link>
                                    </li>

                                    <li>
                                        <NavigationMenu.Link>
                                            <a className={classNames('ListItemLink')} href="https://stitches.dev/">
                                                <div className="ListItemHeading">Stitches</div>
                                                <p className="ListItemText">CSS-in-JS with best-in-class developer experience.</p>
                                            </a>
                                        </NavigationMenu.Link>
                                    </li>
                                </ul>
                            </NavigationMenu.Content>
                        </NavigationMenu.Item>

                        <NavigationMenu.Item>
                            <NavigationMenu.Trigger className="NavigationMenuTrigger">
                                External Links <CaretDownIcon className="CaretDown" aria-hidden />
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
                            <NavigationMenu.Link className="NavigationMenuLink" href="https://github.com/radix-ui">
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