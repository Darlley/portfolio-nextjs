import Link from "next/link";
import { IconDown } from "./icons/IconDown";

function Navbar() {
    return (
        <nav class="flex items-center justify-center md:justify-start md:w-full h-[10%] text-white gap-8 px-4 lg:md-0">
            <div class="flex items-center flex-shrink-0">
                <i className="text-4xl bx bxl-react text-secundary-500 animate-[spin_25s_linear_infinite]" />
                <h1 class="font-semibold text-xl tracking-tight">Darlley</h1>
            </div>
            
            <div class="flex items-center md:justify-between md:w-full flex-col md:flex-row">
                <div class="text-sm flex items-center gap-4">
                    <a href="#responsive-header" class="hover:text-secundary-500 transition-colors flex items-center gap-2">
                        Pages
                        <IconDown />
                    </a>
                    <a href="#responsive-header" class="hover:text-secundary-500 transition-colors">
                        Blog
                    </a>
                </div>
                
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
