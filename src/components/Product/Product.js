import { useState } from "react";

import "./Product.scss";

const Product = ({ product, products, total, setTotal }) => {
  const [productQuantity, setProductQuantity] = useState(0);

  const addProduct = () => {
    setProductQuantity(productQuantity + 1);
    let updateTotal = total + product.price;
    setTotal(updateTotal);
  };

  const removeProduct = () => {
    if (productQuantity > 0) {
      setProductQuantity(productQuantity - 1);
      let updateTotal = total - product.price;
      setTotal(updateTotal);
    }
  };

  return (
    <>
      <p className="product-title">{product.title}</p>
      <p className="product-category">{product.category}</p>
      <p className="product-price">{product.price}€</p>
      <img
        className="product-image"
        src={product.imageURL}
        alt={product.title}
      />
      <p className="product-rating">{product.rating}</p>
      <div>
        <button className="product-quantity-button" onClick={removeProduct}>
          -
        </button>
        <span>{productQuantity}</span>

        <button className="product-quantity-button" onClick={addProduct}>
          +
        </button>
      </div>
    </>
  );
};

export default Product;
