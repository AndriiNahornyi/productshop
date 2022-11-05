import './App.css';

import { NavLink, Route, Routes } from 'react-router-dom';
import Products from '../pages/Products';
import Shop from '../pages/Shop';

function App() {
  return (
    <>
      <NavLink to="/">products gallery</NavLink>
      <NavLink to="/shop">shop</NavLink>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
