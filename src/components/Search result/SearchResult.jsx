import './SearchResult.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { axiosGetVideos } from '../../redux/actions/getVideosAction';
import { setLikedRequest } from '../../redux/actions/setLikedRequestAction';
import { setDeletionLikedRequest } from '../../redux/actions/setLikedRequestAction';

// FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

// Routes 
import Flex from './Layout/Flex';
import Grid from './Layout/Grid';


function SearchResult() {
  const [requestVideo, setRequestVideo] = useState('');
  const [layout, setLayout] = useState(true);
  const [liked, setLiked] = useState(false);
  console.log(requestVideo);

  const dispatch = useDispatch();
  const data = useSelector(store => store.data);
  const likedRequests = useSelector(store => store.likedRequests);
  console.log(likedRequests);

  // fake db
  const inform = require('../../db.json');
  // console.log(inform);


  useEffect(() => {
    // dispatch(axiosGetVideos())
  }, [])

  const handleLike = (method) => {
    dispatch(method(requestVideo))
    setLiked(!liked)
  }

  const handDeletionleLike = () => {
    
  }


  return (
    <div className='container'>
      <div className="result__wrapper">
        <div className="result__flex">

          <h1 className='search_title'>Поиск видео</h1>

          <label>
            <div className="inputBox input_searchgreen input_result">
              <input type="text" required="required" onChange={(e) => setRequestVideo(e.target.value)} />
              <span>Поиск видео</span>
              <button className='res_but'>Найти</button>
              <FontAwesomeIcon 
                icon={faHeart} 
                className={liked ? 'liked_true' : 'liked'} 
                onClick={
                  () => liked 
                          ? handleLike(setDeletionLikedRequest) 
                          : handleLike(setLikedRequest)
                } 
              />
            </div>
          </label>

        </div>

        <div className='nav_layout'>
          <h3 className='search_title'>Видео по запросу: <span>{requestVideo}</span></h3>
          <FontAwesomeIcon icon={faTableCells} className="icon_layout layout_grid" onClick={() => setLayout(true)}/>
          <FontAwesomeIcon icon={faList} className="icon_layout layout_list" onClick={() => setLayout(false)}/>
        </div>
        

          {/* {
            data&& 
              data.map(item => 
                  (
                    item.items
                      .map(item => 
                        <div className="require__show">
                          <img src={item.snippet.thumbnails.medium.url} />
                          <div className="require_text">
                            <p className='video_name'>{item.snippet.title}</p>
                            <p className='chanel_name'>{item.snippet.channelTitle}</p>
                            <p className='count_views'>838тыс. просмотров</p>
                          </div>
                        </div>
                      )
                  )
              )
          } */}
        
        {
          layout 
            ? <Grid data={inform}/>
            : <Flex data={inform}/>
        }
        
      </div>
    </div>
  )
}

export default SearchResult;