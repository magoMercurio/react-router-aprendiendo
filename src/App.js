import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Page404 from "./pages/page404";
import Header from './component/Header';
import Post from './pages/Post';

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route
          path='/' 
          element={<Home/>}
        />
        <Route
          path='/sobre'
          element={<Sobre/>}
        />
        <Route
        path='/posts/:id'
        element={<Post/>}
        />
        <Route
          path='*'
          element={<Page404/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
