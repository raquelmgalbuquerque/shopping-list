import { useState, useEffect } from "react";

import ProductForm from "../ProductForm/ProductForm";
import Product from "../Product/Product";
import ProductData from "../../data/ProductData";
import Footer from "../Footer/Footer";
import "./ProductList.scss";

const ProductList = () => {
  let initialBudget = 50;
  const [products, setProducts] = useState(ProductData);
  const [total, setTotal] = useState(0);
  const [balance, setBalance] = useState(initialBudget);

  useEffect(() => {
    let newBalance = initialBudget - total;
    setBalance(newBalance);
  }, [total]);

  return (
    <>
      <ProductForm products={products} setProducts={setProducts} />
      <div className="products-container">
        {products.map((product) => (
          <div className="product-wrapper" key={product.id}>
            <Product
              product={product}
              products={products}
              setProducts={setProducts}
              total={total}
              setTotal={setTotal}
            />
          </div>
        ))}
      </div>
      <div className="problem-solver-div"></div>
      <Footer budget={initialBudget} total={total} balance={balance} />
    </>
  );
};

export default ProductList;
