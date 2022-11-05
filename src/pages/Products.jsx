import React, { useEffect, useState } from 'react';
import { ItemInform } from '../components/ItemInform/ItemInform';
import { deleteProductById, getProductById, getProducts } from '../helpers/api';
import { ProductGallery } from '../components/ProductGallery/ProductGallery';

export default function Products() {
  const [products, setProducts] = useState([]);
  //   const [activeproducts, setActiveProducts] = useState(null);
  useEffect(() => {
    getProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error.message));
  }, []);
  //   const onClick = e => {
  //     getProductById(e.currentTarget.dataset.id).then(response =>
  //       setActiveProducts(response.data)
  //     );
  //   };
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
        // onClick={onClick}
        getIconColor={getRandomIconColor}
        deleteProduct={deleteProduct}
      />
      {/* {activeproducts && (
        <ItemInform
          name={activeproducts.name}
          description={activeproducts.description}
          createdAt={activeproducts.createdAt}
        />
      )} */}
    </div>
  );
}
