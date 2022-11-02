import './ModalWindow.css';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setLikedRequest } from '../../../redux/actions/setLikedRequestAction';
import { setFavorites } from '../../../redux/actions/setFavoritesAction';

function ModalWindow({active, setActive, value}) {
  const [newValue, setNewValue] = useState('');
  const [rangeValue, setValueRange] = useState(1);
  const [choiceValue, setChoiceValue] = useState('alpUp');

  const dispatch = useDispatch();
  const state = useSelector(state => state);
  console.log(state);

  const handleExit = () => {
    setValueRange(1)
    setActive(false);
  }

  const handleSave = (e) => {
    e.preventDefault();
    dispatch(setLikedRequest(newValue));
    setActive(false);
    dispatch(setFavorites(newValue, rangeValue, choiceValue, ['t', 'b', 'e', 'n', 'a']))
  }




  return (
    <div className={active ? 'modalWindow active' : 'modalWindow'} onClick={() => setActive(false)}>
      <div className="modalWindow__flex" onClick={e => e.stopPropagation()}>

        <h1 className='modalWindow__title'>Сохранить запрос</h1>

        <form>
            <div className="requie">
                <label htmlFor="">Запрос</label>
                <input 
                  type="text" 
                  className='ban'
                  value={value}
                />
            </div>

            <div className="requie">
                <label htmlFor=""><span className='red'>*</span>Название</label>
                <input 
                  type="text" 
                  placeholder='Укажите название'
                  onChange={e => setNewValue(e.target.value)}
                />
            </div>

            <div className="requie">
                <label htmlFor="">Сортировать по</label>
                <select onChange={(e) => setChoiceValue(e.target.value)}>
                  <option value='alpUp'>Алфовиту Верх</option>
                  <option value='alpDown'>Алфовиту Вниз</option>
                  <option value='viewsUp'>По просмотрам Верх</option>
                  <option value='viewsDown'>По просмотрам Вниз</option>
                </select>
            </div>

            <div className="range_grid">
              <div>
                <label htmlFor="">Максимальное количество</label>
                <input 
                  type="range" 
                  className='slider'
                  min="1" 
                  max="25" 
                  step="1" 
                  value={rangeValue}
                  onChange={(e) => setValueRange(e.target.value)} 
                />
              </div> 
              <div className='requie'>
                <input 
                  type="text" 
                  value={rangeValue}
                  onChange={(e) => setValueRange(e.target.value)}
                />
              </div>  
            </div>

            <div className='button_group'>
                <button type='reset' className='butt inversion' onClick={() => handleExit()}><span>Не сохранять</span></button>
                <button type='submit' className='butt' onClick={e => handleSave(e)}><span>Сохранить</span></button>
            </div>
          </form>

      </div>
    </div>
  )
}

export default ModalWindow

//<button onClick={() => setActive(false)} className="auth_but sigin">