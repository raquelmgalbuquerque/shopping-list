import { FaTrash, FaEdit } from "react-icons/fa";
import "./ProductOptions.scss";

const ProductRemove = ({ product, products, setProducts, setProductPrice }) => {
  const removeProduct = (productId) => {
    const updatedProducts = products.filter((item) => item.id !== productId);

    setProducts(updatedProducts);
  };

  const editProduct = (product) => {
    let newPrice = parseFloat(
      prompt(`Introduza o novo preço do produto ${product.title}:`)
    );

    const productIndex = products.findIndex((item) => item.id === product.id);

    products[productIndex].price = newPrice;

    setProducts(products);
    setProductPrice(newPrice);
  };

  return (
    <div className="product-options-container">
      <button
        className="product-option-button"
        onClick={() => removeProduct(product.id)}
      >
        <FaTrash className="option-icon" />
      </button>
      <button
        className="product-option-button"
        onClick={() => editProduct(product)}
      >
        <FaEdit className="option-icon" />
      </button>
    </div>
  );
};

export default ProductRemove;
