import './Search.css';
import SearchResult from '../Search result/SearchResult';

function Search() {
  return (
    <div className='search__container'>
      <div className="search__wrapper">
        <div className="search__flex">

          <h1 className='search_title'>Поиск видео</h1>
          <label>

            <div className="inputBox input_searchgreen">
              <input type="text" required="required" />
              <span>Поиск видео</span>
              <button>Найти</button>
            </div>
            
          </label>

        </div>
      </div>
    </div>
  )
}

export default Search;