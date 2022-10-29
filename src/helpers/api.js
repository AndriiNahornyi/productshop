import axios from 'axios';
export const getProducts = () => {
  return axios.get('https://62becfba0bc9b125615fd0f7.mockapi.io/api/products');
};
export const getProductById = id => {
  return axios.get(
    `https://62becfba0bc9b125615fd0f7.mockapi.io/api/products/${id}`
  );
};
