import { ProductItem } from '../ProductItem';
export const ProductGallery = ({
  products,
  onClick,
  getIconColor,
  deleteProduct,
}) => {
  return (
    <div>
      <ul>
        {products.map(product => (
          <ProductItem
            onClick={onClick}
            getIconColor={getIconColor}
            key={product.id + product.name}
            id={product.id}
            name={product.name}
            price={product.price}
            deleteProduct={deleteProduct}
          />
        ))}
      </ul>{' '}
    </div>
  );
};
