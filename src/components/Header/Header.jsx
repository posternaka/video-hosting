import './Header.css';

// FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from "@fortawesome/free-solid-svg-icons";


function Favourites() {
  return (
    <header>
      <div className="header__container">
        <div className="header__wrapper">
          <div className="header__flex">
            
            <div className="header_nav">
              <FontAwesomeIcon icon={faFilm} className="fIcons logo"/>

              <ul>
                <li className='nav_active'>Поиск</li>
                <li >Избранное</li>
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

export default Favourites;