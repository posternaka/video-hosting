import './Authorization.css';
import { useState } from 'react';

// FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function Authorization() {
  const [visiblePass, setVisiblePass] = useState(false);
  const [inputValuePass, setInputValuePass] = useState('');

  const handleVisiblePass = (icon) => (
    <FontAwesomeIcon icon={icon} className="password-control" onClick={() => setVisiblePass(!visiblePass)} />
  )

  const showHandlePass = () => (
    visiblePass 
      ? handleVisiblePass(faEye)
      : handleVisiblePass(faEyeSlash)
  )


  return (
    <div className='auth__container'>
      <div className="auth__wrapper">
            
        <div className="auth__flex">

          <FontAwesomeIcon icon={faFilm} className="fIcons"/>

          <h1 className='auth_title'>log in</h1>

          <form action="">

            <div className="inputBox">
              <input type="text" required="required" />
              <span>Введите имя</span>
            </div>

            <div className="inputBox">
              <input type={visiblePass ? "text" : "password"} required="required" onChange={(e) => setInputValuePass(e.target.value)}/>
              <span>Введите пароль</span>
              {
                inputValuePass.length > 0 
                  ? showHandlePass()
                  : ''
              }
            </div>

            <button className='auth_but sigin'><span>Войти</span></button>

          </form>
        </div>
            

      </div>
    </div>
  )
}

export default Authorization;