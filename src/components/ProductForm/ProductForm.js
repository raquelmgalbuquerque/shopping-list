import { Formik, Field, Form, ErrorMessage } from "formik";

import noImage from "../../assets/no-image.png";
import useFormValidation from "../../hooks/useFormValidation";
import "./ProductForm.scss";

const ProductForm = ({ products, setProducts }) => {
  const { validation } = useFormValidation();

  return (
    <div className="add-product-container">
      <Formik
        initialValues={{
          title: "",
          category: "",
          price: "",
          rating: "",
          imageURL: noImage,
        }}
        validate={(values) => validation(values)}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          let newProduct = values;
          newProduct["id"] = products.length;
          newProduct["price"] = parseFloat(values.price);

          setProducts((prevState) => [...prevState, newProduct]);
          resetForm({ values: "" });
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-field-container">
              <div className="form-field-wrapper">
                <div className="form-field">
                  <label>Título:</label>
                  <Field type="title" name="title" className="field" />
                  <ErrorMessage
                    className="error-message"
                    name="title"
                    component="div"
                  />
                </div>

                <div className="form-field">
                  <label>Categoria:</label>
                  <Field
                    name="category"
                    as="select"
                    className="field form-select"
                  >
                    <option value="">(Seleccione)</option>
                    <option value="Arroz, Massa e Farinha">
                      Arroz, Massa e Farinha
                    </option>
                    <option value="Beleza e Higiene">Beleza e Higiene</option>
                    <option value="Café, Chá e Chocolate Solúvel">
                      Café, Chá e Chocolate Solúvel
                    </option>
                    <option value="Cereais e barras">Cereais e barras</option>
                    <option value="Frutas e Legumes">Frutas e Legumes</option>
                    <option value="Laticínios e Ovos">Laticínios e Ovos</option>
                    <option value="Limpeza da Cozinha">
                      Limpeza da Cozinha
                    </option>
                    <option value="Limpeza da Roupa e Calçado">
                      Limpeza da Roupa e Calçado
                    </option>
                    <option value="Molhos, Temperos e Sal">
                      Molhos, Temperos e Sal
                    </option>
                    <option value="Peixaria">Peixaria</option>
                    <option value="Talho">Talho</option>
                  </Field>
                  <ErrorMessage
                    className="error-message"
                    name="category"
                    component="div"
                  />
                </div>
              </div>

              <div className="form-field-wrapper">
                <div className="form-field">
                  <label>Preço:</label>
                  <Field type="price" name="price" className="field" />
                  <ErrorMessage
                    className="error-message"
                    name="price"
                    component="div"
                  />
                </div>

                <div className="form-field">
                  <label>Rating:</label>
                  <Field
                    name="rating"
                    as="select"
                    className="field form-select"
                  >
                    <option value="">(Seleccione)</option>
                    <option value="⭐">⭐</option>
                    <option value="⭐⭐">⭐⭐</option>
                    <option value="⭐⭐⭐">⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                    <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
                  </Field>
                  <ErrorMessage
                    className="error-message"
                    name="rating"
                    component="div"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="add-product-button"
              >
                Adicionar produto
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
