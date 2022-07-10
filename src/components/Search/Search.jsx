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
import ModalWindow from './ModalWindows/ModalWindows';

function Search() {
  const [active, setActive] = useState(false);
  const [value, setValue] = useState('');
  const handleSetEditButton = () => (
    setActive('true'),
    setValue(requestVideo)
  )

  const [requestVideo, setRequestVideo] = useState('');
  const [requestVideoWhole, setRequestVideoWhole] = useState('');
  const [layout, setLayout] = useState(true);
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();
  const {data, likedRequests} = useSelector(store => store);
  console.log(data);
  
  useEffect(() => {
    
  }, [])

  const handleChange = (e) => {
    setRequestVideo(e)
    likedRequests.includes(e) ? setLiked(true) : setLiked(false)
  }

  const handleLike = () => {
    // dispatch(setLikedRequest(requestVideo))
    // setLiked(true)
    handleSetEditButton()
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

  const handlePressBut = () => {
    dispatch(axiosGetVideos(requestVideoWhole));
    setRequestVideoWhole(requestVideo)
  }


  return (
    <main>
      <div className="container">
        <ModalWindow active={active} setActive={setActive} value={value} />
        <div className={data.length > 0 ? "wrapper" : "wrapper flex"}>
          
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
                  {
                    data.length > 0 
                      ? <FontAwesomeIcon 
                          icon={faHeart} 
                          className={liked ? 'liked' : 'liked dis'}  
                          onClick={() => liked ? handleDeletionLike() : handleLike()} 
                        />
                      : null
                  }
                  
                </div>

                <button className='button' onClick={() => handlePressBut()}>Найти</button>

              </div>
          </div>

          <div className="content__block">

            {
              data && data.map(item => (
                <>
                  <div className='content_parametrs'>
                    <h3>Видео по запросу: <span className='search_title_bold'>{requestVideoWhole}</span></h3>
                    <div>
                      <FontAwesomeIcon 
                        icon={faTableCells} 
                        className={layout ? "icon_layout active" : "icon_layout"} 
                        onClick={() => setLayout(true)}
                      />
                      <FontAwesomeIcon 
                        icon={faList} 
                        className={layout ? "icon_layout" : "icon_layout active"} 
                        onClick={() => setLayout(false)}
                      />
                    </div>
                  </div>

                  <div className={layout ? "content grid" : "content flex"}>
                    {
                      layout 
                        ? <Grid data={item}/>
                        : <Flex data={item}/>
                    }
                  </div>
                </>
              ))
            }

          </div>
        </div>
      </div>
    </main>
  )
}

export default Search;