import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from 'redux/sliceShop';
import css from './Shop.module.css';

export default function Shop() {
  const basket = useSelector(state => state.basket);
  const dispatch = useDispatch();
  const deleteProduct = id => {
    dispatch(removeProduct(id));
  };
  return (
    <section className={css.Section}>
      <ul>
        {basket.map(item => (
          <li className={css.Item}>
            <div className={css.Content}>
              <span className={css.Paragraph}>name: </span>
              {item.name}, <span className={css.Paragraph}>price: </span>
              {item.price}
            </div>
            <button
              onClick={() => deleteProduct(item.id)}
              type="button"
              className={css.Hover}
            >
              Remove product
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
