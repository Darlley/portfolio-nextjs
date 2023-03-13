import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import CardModal from '../molecules/CardModal';
import Navbar from "../molecules/Navbar";

function Header () {
    const [modalOpen, setModalOpen] = useState(false);
    const [modalComponent, setModalComponent] = useState(null);

    function handleClick(content){
        setModalOpen(true)
        setModalComponent(content)
    }
    
    return (
        <header>
            <div className='header__background'>    
                <div className='header__opacity'>
                    <div className="header__content">
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

                                    <button className="profile_item" onClick={() => handleClick(2)}>
                                        <Image 
                                            src="/habilities/Tailwind.png"
                                            width={40}
                                            height={40}
                                        />
                                    </button>

                                    <button className="profile_item" onClick={() => handleClick(3)}>
                                        <Image 
                                            src="/habilities/WordPress.png"
                                            width={40}
                                            height={40}
                                        />
                                    </button>

                                    <button className="profile_item" onClick={() => handleClick(4)}>
                                        <Image 
                                            src="/habilities/Laravel.png"
                                            width={40}
                                            height={40}
                                        />
                                    </button>

                                    <button className="profile_item" onClick={() => handleClick(5)}>
                                        <Image 
                                            src="/habilities/MySQL.png"
                                            width={40}
                                            height={40}
                                        />
                                    </button>

                                    <button className="profile_item" onClick={() => handleClick(6)}>
                                        <Image 
                                            src="/habilities/AWS.png"
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
                </div>
            </div>
        </header>
    )
}

export default Header;