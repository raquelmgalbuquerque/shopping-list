const useFormValidation = () => {
  const validation = (values) => {
    const errors = {};

    // Title
    if (!values.title) {
      errors.title = "Campo obrigatório";
    }

    // Category
    if (!values.category) {
      errors.category = "Campo obrigatório";
    }

    // Price
    if (!values.price) {
      errors.price = "Campo obrigatório";
    } else if (!/[+-]?([0-9]*[.])?[0-9]+$/g.test(values.price)) {
      errors.price = "Preço inválido";
    }

    // Rating
    if (!values.rating) {
      errors.rating = "Campo obrigatório";
    }

    return errors;
  };

  return { validation };
};

export default useFormValidation;
