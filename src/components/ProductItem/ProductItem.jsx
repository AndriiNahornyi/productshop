import css from './ProductItem.module.css';
import { FiBriefcase } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../redux/sliceShop';

export const ProductItem = ({
  onClick,
  name,
  id,
  price,
  getIconColor,
  deleteProduct,
}) => {
  const basketProducts = useSelector(state => state.basket);
  const dispatch = useDispatch();
  const buyProduct = () => {
    dispatch(
      addProduct({
        name,
        id,
        price,
      })
    );
  };
  const disableBtn = id => basketProducts.some(product => product.id === id);
  return (
    <div className={css.Container}>
      <li className={css.Item} onClick={onClick} data-id={id}>
        <div className={css.Content}>
          <span className={css.Paragraph}>name: </span>
          {name}, <span className={css.Paragraph}>price: </span>
          {price}
          <FiBriefcase
            className={css.Icon}
            style={{ color: `${getIconColor()}` }}
            onClick={() => deleteProduct(id)}
          />
        </div>
        <button
          onClick={buyProduct}
          type="button"
          disabled={disableBtn(id)}
          className={css.Hover}
        >
          Add to basket
        </button>
      </li>
    </div>
  );
};
