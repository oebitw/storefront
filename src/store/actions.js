import superagent from 'superagent';

export const getRemoteData = function (api) {
  return (dispatch) => {
    return superagent
      .get(api)
      .then((res) => {
        dispatch(getProducts({ results: res.body.products }));
      })
      .catch((e) => console.error(e));
  };
};


// actions:
export const getProducts = (products) => {
  return {
    type: 'GET',
    payload: products.results,
  };
};

export const active = (name) => {
  return {
    type: 'ACTIVE',
    payload: name,
  };
};

export const increment = (product) => {
  return {
    type: 'INCREMENT',
    payload: product,
  };
};

export const show = (bool) => {
  return {
    type: 'SHOW_CART',
    payload: bool,
  };
};

export const decrement = (product) => {
  return {
    type: 'DECREMENT',
    payload: product,
  };
};