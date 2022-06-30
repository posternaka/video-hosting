import './SearchResult.css';
import { useState } from 'react';

// FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faHeartCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


function SearchResult() {
  const [requestVideo, setRequestVideo] = useState('cats');
  console.log(requestVideo);

  return (
    <div className='container'>
      <div className="result__wrapper">
        <div className="result__flex">

          <h1 className='search_title'>Поиск видео</h1>

          <label>
            <div className="inputBox input_searchgreen input_result">
              <input type="text" required="required" onClick={(e) => setRequestVideo(e.target.value)} />
              <span>Поиск видео</span>
              <button>Найти</button>
              <FontAwesomeIcon icon={faHeart} className='like'/>
            </div>
          </label>

        </div>

        <h3 className='search_title'>Видео по запросу: <span>{requestVideo}</span></h3>
        <div className="require__show">
          <img src="https://via.placeholder.com/200x140/FFFFFF/000000" />
          <div className="require_text">
            <p className='video_name'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, officia eos velit ab sapiente, quas assumenda nesciunt est repellendus obcaecati sequi aspernatur optio facilis omnis fugit, dolorem culpa. Sint, quos.</p>
            <p className='chanel_name'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <p className='count_views'>838тыс. просмотров</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default SearchResult