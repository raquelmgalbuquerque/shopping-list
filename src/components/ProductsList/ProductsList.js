import { useState, useEffect } from "react";
import Product from "../Product/Product";
import ProductsData from "../../data/ProductsData";
import Footer from "../Footer/Footer";
import "./ProductsList.scss";

const ProductsList = () => {
  let products = ProductsData;
  let initialBudget = 50;

  const [total, setTotal] = useState(0);
  const [balance, setBalance] = useState(initialBudget);

  useEffect(() => {
    let newBalance = initialBudget - total;
    setBalance(newBalance);
  }, [total]);

  return (
    <>
      <Footer budget={initialBudget} total={total} balance={balance} />
      <div className="products-container">
        {products.map((product) => (
          <div className="product-wrapper" key={product.id}>
            <Product
              product={product}
              products={products}
              total={total}
              setTotal={setTotal}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsList;
