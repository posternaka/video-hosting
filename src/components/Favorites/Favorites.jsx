import { useDispatch, useSelector } from 'react-redux';
import './Favorites.css';
import { setDeletionLikedRequest } from '../../redux/actions/setLikedRequestAction';
import { Link } from 'react-router-dom';



function Favorites() {
  const dispatch = useDispatch();
  const likedRequests = useSelector(store => store.likedRequests); 

  const handleDeletionLike = (id) => {
    dispatch(setDeletionLikedRequest(id))
  }

  return (
    <div className='container'>
      <div className="result__wrapper">
        <div className="result__flex">

          {
            likedRequests &&
              likedRequests.map((item, index) => (
                <div className="favorites_item">
                  <p>{item}</p>
                  <div className="editing">
                    <Link to="/modalWindow">Изменить</Link>
                    <p onClick={() => handleDeletionLike(index)}>Удалить</p>
                  </div>
                </div>
              ))
          }

        </div>
      </div>
    </div>
  )
}

export default Favorites;