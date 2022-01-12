import { BrowserRouter, Routes , Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import Categories from './components/Categories';
import Discounts from './components/Discounts';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} /> 
        <Route path="/discounts" element={<Discounts />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
