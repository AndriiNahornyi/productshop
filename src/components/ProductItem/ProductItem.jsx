// import css from './ProductItem.module.css';
import { FiBriefcase } from 'react-icons/fi';
export const ProductItem = ({
  onClick,
  name,
  id,
  price,
  getIconColor,
  deleteProduct,
}) => {
  // console.log('onClick', iconColor);
  return (
    <li onClick={onClick} data-id={id}>
      <span>name: {name}</span>
      <span>price: {price}</span>
      <FiBriefcase
        style={{ color: `${getIconColor()}` }}
        onClick={() => deleteProduct(id)}
      />
    </li>
  );
};
