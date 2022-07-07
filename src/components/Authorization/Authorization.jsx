import './Authorization.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// import
import Auth from '../hoc/Auth';

// FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function Authorization() {
  const navigate = useNavigate();
  const [visiblePass, setVisiblePass] = useState(false);
  const [inputValueLogin, setInputValueLogin] = useState('');
  const [inputValuePass, setInputValuePass] = useState('');

  const handleVisiblePass = (icon) => (
    <FontAwesomeIcon icon={icon} className="password-control" onClick={() => setVisiblePass(!visiblePass)} />
  )

  const showHandlePass = () => (
    visiblePass 
      ? handleVisiblePass(faEye)
      : handleVisiblePass(faEyeSlash)
  )

  const handleAxios = async (e) => {
    e.preventDefault();

    try {
      const axiosR = await axios({
        method: "post",
        url: "https://typ-back.herokuapp.com/api/auth/login", 
        data: JSON.stringify({
          login: inputValueLogin,
          password: inputValuePass,
        }),
        headers: { "Content-Type": "application/json" },
      })

      localStorage.setItem("token", axiosR.data.token);

      axiosR.data.token ? navigate("/search") : new Error('Не удалось авторизоваться...')
    }
    catch {
      throw new Error('Oooops...')
    }
  }


  return (
    <div className='auth__container'>
      <div className="auth__wrapper">
            
        <div className="auth__flex">

          <FontAwesomeIcon icon={faFilm} className="fIcons"/>

          <h1 className='auth_title'>log in</h1>

          <form action="">

            <div className="inputBox">
              <input 
                type="text" 
                required="required" 
                onChange={(e) => setInputValueLogin(e.target.value)}
              />
              <span>Введите имя</span>
            </div>

            <div className="inputBox">
              <input 
                type={visiblePass ? "text" : "password"} 
                required="required" 
                onChange={(e) => setInputValuePass(e.target.value)}
              />
              <span>Введите пароль</span>
              {
                inputValuePass.length > 0 
                  ? showHandlePass()
                  : null
              }
            </div>

            <button className='auth_but sigin' onClick={(e) => handleAxios(e)}><span>Войти</span></button>

          </form>
        </div>
            

      </div>
    </div>
  )
}

export default Authorization;