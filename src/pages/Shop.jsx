import React from 'react';
import { useSelector } from 'react-redux';

export default function Shop() {
  const basket = useSelector(state => state.basket);
  return (
    <ul>
      {basket.map(item => (
        <li>
          <span>
            name={item.name}: price={item.price}
          </span>
        </li>
      ))}
      <li> </li>
    </ul>
  );
}
