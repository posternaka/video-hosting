import './Header.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [activeElem, setActiveElem] = useState(true);
  return (
    <header>
      <div className="header__container">
        <div className="header__wrapper">
          <div className="header__flex">
            
            <div className="header_nav">
              <FontAwesomeIcon icon={faFilm} className="fIcons logo"/>

              <ul>
                <li className={activeElem ? 'nav_active' : ''} onClick={() => setActiveElem(true)}><Link to="/search">Поиск</Link></li>
                <li className={activeElem ? '' : 'nav_active'} onClick={() => setActiveElem(false)}><Link to="/favorites">Избранное</Link></li>
              </ul>

            </div>

            <div className="header_logOut">
              <span>Выйти</span>
            </div>

          </div>
        </div>
      </div>
    </header>
  )
}

export default Header