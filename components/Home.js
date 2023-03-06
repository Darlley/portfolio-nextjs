import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react';
import CardFigma from './cards/CardFigma';
import CardReact from './cards/CardReact';

import Navbar from "./Navbar";

function Header () {
    const [modal, setModalState] = useState(0);
    
    return (
        <header className="relative">
            <div className="relative header">
                <Navbar />
                
                <div className="flex items-center justify-center flex-1 h-[90%]">
                    
                    <div className="relative p-8">
                        
                        <div className="profileCard_container ">
                            <button className="profile_item" onClick={() => setModalState(1)} />
                            <button className="profile_item" onClick={() => setModalState(2)} />
                            
                            <button className="profile_item" onClick={() => setModalState(3)} />
                            <button className="profile_item" onClick={() => setModalState(4)} />
                            <button className="profile_item" onClick={() => setModalState(5)} />
                            <button className="profile_item" onClick={() => setModalState(6)} />
                            <button className="profile_item" onClick={() => setModalState(7)} />

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

            { modal === 1 && <CardReact setModalState={setModalState} /> }
            { modal === 2 && <CardFigma setModalState={setModalState} /> }
            { modal === 3 && <CardReact setModalState={setModalState} /> }
            
            
        </header>
    )
}

export default Header;