// import css from './ProductItem.module.css';
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
    <li onClick={onClick} data-id={id}>
      <span>name: {name}</span>
      <span>price: {price}</span>
      <FiBriefcase
        style={{ color: `${getIconColor()}` }}
        onClick={() => deleteProduct(id)}
      />
      <button onClick={buyProduct} type="button" disabled={disableBtn(id)}>
        Add to basket
      </button>
    </li>
  );
};
