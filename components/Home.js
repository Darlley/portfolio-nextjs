import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import CardModal from './cards/CardModal';
import Navbar from "./Navbar";

function Header () {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);

    function handleClick(content){
        setModalOpen(true)
        setModalComponent(content)
    }
    
    return (
        <header className="relative">
            <div className="relative header">
                <Navbar />
                
                <div className="flex items-center justify-center flex-1 h-[90%]">
                    
                    <div className="relative p-8">
                        
                        <div className="profileCard_container ">
                            <button className="profile_item" onClick={() => handleClick(0)}>
                                <Image 
                                    src="/habilities/React.png"
                                    width={40}
                                    height={40}
                                />
                            </button>

                            <button className="profile_item" onClick={() => handleClick(1)}>
                                <Image 
                                    src="/habilities/Figma.png"
                                    width={40}
                                    height={40}
                                />
                            </button>

                            <button className="profile_card">
                                <div className="w-full h-full rounded-full bg-[url('/profile.jpg')] bg-cover" />
                            </button>
                        </div>
                        
                    </div>
                    
                </div>
                
                <div className="absolute flex justify-center w-full gap-2 md:hidden bottom-4 text-primary-100">
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

            <CardModal isOpen={modalOpen} setModalOpen={setModalOpen} content={modalComponent} />
            
            
        </header>
    )
}

export default Header;