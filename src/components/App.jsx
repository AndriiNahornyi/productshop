import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts, getProductById, deleteProductById } from '../helpers/api';
import './App.css';
import { ProductGallery } from './ProductGallery/ProductGallery';
import { ItemInform } from './ItemInform/ItemInform';

function App() {
  const [products, setProducts] = useState([]);
  const [activeproducts, setActiveProducts] = useState(null);
  useEffect(() => {
    getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error.message));
  }, []);
  const onClick = e => {
    getProductById(e.currentTarget.dataset.id).then(response =>
      setActiveProducts(response.data)
    );
  };
  const getRandomIconColor = () => {
    return (
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase()
    );
  };
  const deleteProduct = id => {
    deleteProductById(id).then(response =>
      setProducts(
        products.filter(
          product =>
            product.id !== response.data.id &&
            product.name !== response.data.name
        )
      )
    );
  };
  return (
    <div className="App">
      <ProductGallery
        products={products}
        onClick={onClick}
        getIconColor={getRandomIconColor}
        deleteProduct={deleteProduct}
      />
      {activeproducts && (
        <ItemInform
          name={activeproducts.name}
          description={activeproducts.description}
          createdAt={activeproducts.createdAt}
        />
      )}
    </div>
  );
}

export default App;
