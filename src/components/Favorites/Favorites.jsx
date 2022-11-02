import './Favorites.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeletionLikedRequest } from '../../redux/actions/setLikedRequestAction';
// import ModalWindow from '../ModalWindow/ModalWindow';

// FontAwesomeIcon 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function Favorites() {
  const [index, setIndex] = useState(false);
  const dispatch = useDispatch();
  const likedRequests = useSelector(store => store.likedRequests); 

  const handleDeletionLike = (id) => {
    dispatch(setDeletionLikedRequest(id))
    setIndex(id)
  }

  return (
    <div className="container">
      <div className="indent">
        {
          likedRequests.length > 0 
            ? likedRequests.map((item, index) => (
                <div className="favorite_item">
                  <p>{item}</p>
                  <div>
                    <FontAwesomeIcon icon={faTrashCan} title="Удалить" className="icon_layout" onClick={() => handleDeletionLike(index)} />
                  </div>
                </div>
              ))
            : <p className='result__missing_requests'>У вас нет сохраненных запросов</p>
          }
      </div>
    </div>
  )
}

export default Favorites