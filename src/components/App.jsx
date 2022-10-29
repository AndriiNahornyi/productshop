import { useEffect } from 'react';
import { useState } from 'react';
import { getProducts, getProductById } from '../helpers/api';
import './App.css';
import { ProductItem } from './ProductItem/ProductItem';

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
  return (
    <div className="App">
      <ul>
        {products.map(product => (
          // <li onClick={onClick} key={product.id} data-id={product.id}>
          //   <span>name: {product.name}</span>
          //   <span>price: {product.price}</span>
          // </li>
          <ProductItem
            onClick={onClick}
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </ul>
      {activeproducts && (
        <div>
          <span>
            name: {activeproducts.name} createdAt: {activeproducts.createdAt}
            description: {activeproducts.description}
          </span>
        </div>
      )}
    </div>
  );
}

export default App;
