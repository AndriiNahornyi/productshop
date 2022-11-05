import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts, getProductById, deleteProductById } from '../helpers/api';
import './App.css';
import { ProductGallery } from './ProductGallery/ProductGallery';
import { ItemInform } from './ItemInform/ItemInform';
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
