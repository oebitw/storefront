let initialState = {
  products: [
    {
      _id: '5f1a51f01910080017657ed2',
      name: 'TV',
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2018-03-20-at-7-50-11-am-0-1545168655.png?crop=1.00xw:0.753xh;0,0.139xh&resize=1200:*',
      category: 'electronics',
      price: 799.0,
      inStock: 5,
      count: 0,
    },
    {
      _id: '5f1a51f71910080017657ed3',
      name: 'Mobile',
      url: 'https://images.samsung.com/is/image/samsung/assets/levant/galaxy-s21/pfs/HOME_T_O_KV_Main_Animated_KV_720X1080.jpg?$ORIGIN_JPG$',
      category: 'electronics',
      price: 599.0,
      inStock: 3,
      count: 0,

    },
    {
      _id: '5f1a51ff1910080017657ed4',
      name: 'smart watch',
      url: 'https://www.counterpointresearch.com/wp-content/uploads/2021/05/Counterpoint-Research-Global-Smartwatch-Shipments-Jump-35-YoY-in-Q1-2021-uai-2880x1620.jpg',
      category: 'electronics',
      price: 99.0,
      inStock: 15,
      count: 0,

    },
    {
      _id: '5f1a52031910080017657ed5',
      name: 'Dresses',
      url: 'https://i.pinimg.com/originals/33/f6/e0/33f6e02a6b8d4d8b03afb2e5c7cfb097.jpg',
      category: 'clothing',
      price: 100.0,
      inStock: 24,
      count: 0,

    },
    {
      _id: '5f1a5f861910080017657ed7',
      name: 'Baby apron',
      url: 'https://www.kuberindustries.co.in/uploads/kuberindustries/products/kuber-industries-cotton-waterproof-baby-apron-with-baby-food-mat-blue-440778_l.jpg',
      category: 'clothing',
      price: 12.0,
      inStock: 10,
      count: 0,

    },
    {
      _id: '5f1a5f761910080017657ed6',
      name: 'guacamole salsa',
      url: 'https://www.jessicagavin.com/wp-content/uploads/2019/04/guacamole-6-1200.jpg',
      category: 'food',
      price: 2.99,
      inStock: 500,
      count: 0,

    },
    {
      _id: '5f1a5faf1910080017657ed8',
      name: 'Nachos',
      url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/torilla-chips-fried-1615217244.jpeg?crop=0.670xw:0.754xh;0.0918xw,0.0804xh&resize=640:*',
      category: 'food',
      price: 1.99,
      inStock: 12,
      count: 0,

    },
    {
      _id: '5f1a5faf1910080017657ed9',
      name: 'Tacos Bread',
      url: 'http://fitfunandfantastic.files.wordpress.com/2013/09/phonto-2.jpg',
      category: 'food',
      price: 2.39,
      inStock: 90,
      count: 0,

    },
  ]
};

const products = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'ACTIVE':
      let products = initialState.products.filter((product) =>
        product.category === payload ? product.category : null
      );
      return { products, count: state.count };
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
  return { products: productList };
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
      return { products: newProducts };
    default:
      return state;
  }
};

export default products;

