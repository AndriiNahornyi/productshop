export const ProductItem = ({ onClick, name, id, price }) => {
  return (
    <li onClick={onClick} key={id} data-id={id}>
      <span>name: {name}</span>
      <span>price: {price}</span>
    </li>
  );
};
