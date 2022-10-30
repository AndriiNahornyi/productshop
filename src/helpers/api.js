// Напишите на хуках приложение, которое работает так:
// выводит на экран список товаров. Для каждого товара выводится название (поле name) и цена (поле price);
// при клике на карточку товара открывается подробная информация о товаре во всплывающем окне;
// Чтобы получить список товаров, нужно отправит запрос по адресу:
// https://62becfba0bc9b125615fd0f7.mockapi.io/api/products
// Чтобы получить подробную информацию об одном товаре, нужно отправить запрос по адресу:
// https://62becfba0bc9b125615fd0f7.mockapi.io/api/products/:id
import axios from 'axios';
export const getProducts = () => {
  return axios.get('https://62becfba0bc9b125615fd0f7.mockapi.io/api/products');
};
export const getProductById = id => {
  return axios.get(
    `https://62becfba0bc9b125615fd0f7.mockapi.io/api/products/${id}`
  );
};
export const deleteProductById = id => {
  return axios.delete(
    `https://62becfba0bc9b125615fd0f7.mockapi.io/api/products/${id}`
  );
};
