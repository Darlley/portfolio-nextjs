import Navbar from "./Navbar";

function HeaderPage({children}) {
    return (
        <header className="header__page">
            <div className="header__opacity">
                <Navbar />

                <div className="page__title">            
                    {children}
                </div>
            </div>
        </header>
    )
}

export default HeaderPage;