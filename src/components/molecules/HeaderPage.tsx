import { ReactNode } from "react";
import Navbar from "./Navbar";

type HeaderProps = {
  children: ReactNode;
  thumbnail?: string;
}
function HeaderPage({children, thumbnail}: HeaderProps) {

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
