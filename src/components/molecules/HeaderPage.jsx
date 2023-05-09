import Navbar from "./Navbar";

function HeaderPage({children, thumbnail}) {

    const style = {
        backgroundImage: `url(${thumbnail})`
    }
    
    return (
        <header className='header__page' style={style}>
            <div className="header__opacity">
                <div className="header__container">
                    <Navbar />
                </div>

                <div className={!!thumbnail ? "page__title thumbnail" : "page__title" }>            
                    {children}
                </div>
            </div>
        </header>
    )
}

export default HeaderPage;