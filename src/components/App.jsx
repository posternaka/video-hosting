import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import route
import Authorization from './Authorization/Authorization';
import Content from './Content/Content';
import Favorites from './Content/Main/Favorites/Favorites';
import Auth from './hoc/Auth';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authorization />} />
          <Route 
            path="/search"
            element={
              <Auth>
                <Content />
              </Auth>
            }
          />
          <Route 
            path="/favorites"
            element={
              <Auth>
                <Favorites />
              </Auth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
