let initialState = {
  products: [],
  display: []
};

const products = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'GET':
      return { products: payload, display: state.display };
    case 'ACTIVE':
      let products = state.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { products: state.products, display: products };
    case 'INCREMENT':
      let productList = state.products.map((product) =>
        payload.name === product.name
          ? {
              _id: product._id,
              name: product.name,
              url: product.url,
              category: product.category,
              price: product.price,
              inStock: product.inStock - 1,
              count: product.count + 1,
            }
          : product
      );
      let displayList = state.display.map((product) =>
        payload.name === product.name
          ? {
              _id: product._id,
              name: product.name,
              url: product.url,
              category: product.category,
              price: product.price,
              inStock: product.inStock - 1,
              count: product.count + 1,
            }
          : product
      );
      return { products: productList, display: displayList };
    case 'DECREMENT':
      let newProducts = state.products.map((product) =>
        payload.name === product.name
          ? {
              _id: product._id,
              name: product.name,
              url: product.url,
              category: product.category,
              price: product.price,
              inStock: product.inStock + payload.count + 1,
              count: product.count - payload.count - 1,
            }
          : product
      );
      let newDisplayProducts = state.display.map((product) =>
        payload.name === product.name
          ? {
              _id: product._id,
              name: product.name,
              url: product.url,
              category: product.category,
              price: product.price,
              inStock: product.inStock + payload.count + 1,
              count: product.count - payload.count - 1,
            }
          : product
      );
      return { products: newProducts, display: newDisplayProducts };
    default:
      return state;
  }
};

export default products;