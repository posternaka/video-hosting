import './Search.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { axiosGetVideos } from '../../redux/actions/getVideosAction';
import { axiosGetVideos } from '../../redux/actions/getFakeVideosAction';

import { setLikedRequest, setDeletionLikedRequest } from '../../redux/actions/setLikedRequestAction';

// FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faTableCells } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

// Routes 
import Flex from './Layout/Flex';
import Grid from './Layout/Grid';

function Search() {
  const [requestVideo, setRequestVideo] = useState('');
  const [requestVideoWhole, setRequestVideoWhole] = useState('');
  const [layout, setLayout] = useState(false);
  const [liked, setLiked] = useState(false);
  // console.log(requestVideo, requestVideoWhole);
  // console.log(requestVideoWhole);

  const dispatch = useDispatch();
  const {data, likedRequests} = useSelector(store => store);
  // console.log(data);

  useEffect(() => {
    dispatch(axiosGetVideos(requestVideoWhole));
  }, [])

  const handleChange = (e) => {
    setRequestVideo(e)
    likedRequests.includes(e) ? setLiked(true) : setLiked(false)
  }

  const handleLike = () => {
    dispatch(setLikedRequest(requestVideo))
    setLiked(true)
  }

  const handleDeletionLike = () => {
    const id = likedRequests.indexOf(requestVideo)
    dispatch(setDeletionLikedRequest(id))
    setLiked(false)
  }

  const handleKeyDownName = (e) => (
    e === "Enter" 
      ? setRequestVideoWhole(requestVideo)
      : ''
  )
  return (
    <main>
      <div className="container">
        <div className="wrapper">

          <div className="search__block">

              <h1 className='search_title'>Поиск видео</h1>

              <div className="input">

                <div className="input_position">
                  <input 
                    type="text" 
                    placeholder='Введите название видео'
                    onKeyDown={(e) => handleKeyDownName(e.key)}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  <FontAwesomeIcon 
                    icon={faHeart} 
                    className={liked ? 'liked' : 'liked dis'}  
                    onClick={() => liked ? handleDeletionLike() : handleLike()} 
                  />
                </div>

                <button className='button' onClick={() => setRequestVideoWhole(requestVideo)}>Найти</button>

              </div>
          </div>

          <div className="content__block">
            
          </div>

          {/* {
            data && data.map(item => (
                <div className="content__block">
                <>
                      <div className='nav_layout'>
                        <h3 className='search_title'>Видео по запросу: <span className='search_title_bold'>{requestVideoWhole}</span></h3>
                        <FontAwesomeIcon icon={faTableCells} className="icon_layout layout_grid" onClick={() => setLayout(true)}/>
                        <FontAwesomeIcon icon={faList} className="icon_layout layout_list" onClick={() => setLayout(false)}/>
                      </div>
                      {
                        layout 
                          ? <Grid data={item}/>
                          : <Flex data={item}/>
                      }
                    </>
              
            </div>
            ))
          
            } */}
        </div>
      </div>
    </main>
  )
}

export default Search;