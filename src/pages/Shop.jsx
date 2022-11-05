import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from 'redux/sliceShop';

export default function Shop() {
  const basket = useSelector(state => state.basket);
  const dispatch = useDispatch();
  const deleteProduct = id => {
    dispatch(removeProduct(id));
  };
  return (
    <ul>
      {basket.map(item => (
        <li>
          <span>
            name={item.name}: price={item.price}
          </span>
          <button onClick={() => deleteProduct(item.id)} type="button">
            Remove product
          </button>
        </li>
      ))}
    </ul>
  );
}
