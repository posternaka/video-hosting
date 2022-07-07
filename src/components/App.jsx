import './App.css';
import { Routes, Route } from "react-router-dom";

//import route
import Authorization from './Authorization/Authorization';
import Favorites from './Favorites/Favorites';
import Search from './Search/Search';
import Header from './Header/Header';
import Auth from './hoc/Auth';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Authorization />} />
      
      <Route 
        path="/search"
        element={
          <Auth>
            <Header />
            <Search />
          </Auth>
        }
      />
      
      <Route 
        path="/favorites"
        element={
          <Auth>
            <Header />
            <Favorites />
          </Auth>
        }
      />
    </Routes>
  )
}

export default App;


