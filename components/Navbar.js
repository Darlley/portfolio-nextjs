import Link from "next/link";

function Navbar() {
    return (
        <nav class="flex items-center justify-between flex-wrap py-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <i className="bx bxl-react text-4xl text-sky-400"></i>
                <span class="font-semibold text-xl tracking-tight">
                    <span>Darlley</span>
                </span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-sky-200 border-sky-400 hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white mr-4">
                        Projetos
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white mr-4">
                        Links
                    </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-sky-200 hover:text-white">
                        Blog
                    </a>
                </div>
                <div className="flex gap-2 items-center text-white mt-4 md:mt-0">
                    <Link href="https://www.linkedin.com/in/darlleybrito/" target="_blank" className="Menu__item">
                        <i className="bx bxl-linkedin-square"></i>
                        <span>Linkedin</span>
                    </Link>

                    <Link href="https://github.com/Darlley" target="_blank" className="Menu__item">
                        <i className="bx bxl-github"></i>
                        <span>Github</span>
                    </Link>

                    <Link href="https://darlley.github.io/curriculo-darlley-brasil-de-brito-furtado.pdf" target="_blank" className="Menu__item px-4 py-2 leading-none border rounded border-white hover:border-transparent hover:text-sky-500 hover:bg-white lg:mt-0">
                        <i className="bx bxs-file-pdf"></i>
                        <span>Curriculo</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
