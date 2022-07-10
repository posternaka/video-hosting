import './ModalWindow.css';
import { useState } from 'react';

function ModalWindow({active, setActive, value}) {
  const [rangeValue, setValueRange] = useState(0);

    console.log(value);
  return (
    <div className={active ? 'modalWindow active' : 'modalWindow'} onClick={() => setActive(false)}>
      <div className="modalWindow__flex" onClick={e => e.stopPropagation()}>

        <h1 className='modalWindow__title'>Сохранить запрос</h1>

        <form action="">
            <div className="requie">
                <label htmlFor="">Запрос</label>
                <input 
                  type="text" 
                  required="required" 
                  className='ban'
                  value={value}
                />
            </div>

            <div className="requie">
                <label htmlFor=""><span className='red'>*</span>Название</label>
                <input 
                  type="text" 
                  required="required" 
                  placeholder='Укажите название'
                />
            </div>

            <div className="requie">
                <label htmlFor="">Сортировать по</label>
                <select>
                  <option value="1" selected>Алфовиту Верх</option>
                  <option>Алфовиту Вниз</option>
                  <option>По просмотрам Верх</option>
                  <option>По просмотрам Вниз</option>
                </select>
            </div>

            <div className="range_grid">
              <div>
                <label htmlFor="">Максимальное количество</label>
                <input 
                  type="range" 
                  className='slider'
                  name="" 
                  id="" 
                  min="1" 
                  max="25" 
                  value={rangeValue} 
                  step="1" 
                  onChange={(e) => setValueRange(e.target.value)} 
                />
              </div> 
              <div className='requie'>
                <input 
                  type="text" 
                  required=""
                  value={rangeValue}
                  onChange={(e) => setValueRange(e.target.value)}
                />
              </div>  
            </div>

            <div className='button_group'>
                <button className='butt inversion' ><span>Не сохранять</span></button>
                <button className='butt' ><span>Сохранить</span></button>
            </div>
          </form>

      </div>
    </div>
  )
}

export default ModalWindow

//<button onClick={() => setActive(false)} className="auth_but sigin">