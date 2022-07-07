import './ModalWindow.css';

function ModalWindow({active, setActive, value}) {
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
                value={value}
                />
            </div>

            <div className="requie">
                <label htmlFor=""><span>*</span>Название</label>
                <input 
                type="text" 
                required="required" 
                placeholder='Укажите название'
                />
            </div>

            <div className="requie">
                <label htmlFor="">Сортировать по</label>
                <input 
                type="text" 
                required="Как сортировать" 
                />
            </div>

            <div className="requie">
                <label htmlFor="">Максимальное количество</label>
                <input type="range" name="" id="" />
                <input 
                type="text" 
                required="Как сортировать" 
                />
            </div>


            <div className='button_group'>
                <button className='butt' ><span>Не сохранять</span></button>
                <button className='butt inversion' ><span>Сохранить</span></button>
            </div>

          </form>

      </div>
    </div>
  )
}

export default ModalWindow

//<button onClick={() => setActive(false)} className="auth_but sigin">