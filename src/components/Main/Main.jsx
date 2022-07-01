import '../Search/Search.css';
import { Routes, Route } from 'react-router-dom';

import Search from "../Search/Search";
import SearchResult from "../Search result/SearchResult";
import Favorites from "../Favorites/Favorites";
import ModalWindow from '../ModalWindow/ModalWindow';
import Authorization from '../Authorization/Authorization';


function Main() {
  return (
    <main>
        <div className="main__container">
          <Routes>
            <Route path="/" element={<Authorization />} />
            <Route path="/search" element={<SearchResult />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/modalWindow" element={<ModalWindow />} />
          </Routes>
        </div>
    </main>
  )
}

export default Main