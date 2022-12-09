import { useState } from "react";

import ProductOptions from "../ProductOptions/ProductOptions";

import "./Product.scss";

const Product = ({ product, products, setProducts, total, setTotal }) => {
  const [productQuantity, setProductQuantity] = useState(0);
  const [productPrice, setProductPrice] = useState(product.price);

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
      <p className="product-price">{productPrice.toFixed(2)}€</p>
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
      <ProductOptions
        product={product}
        products={products}
        setProducts={setProducts}
        productPrice={productPrice}
        setProductPrice={setProductPrice}
      />
    </>
  );
};

export default Product;
