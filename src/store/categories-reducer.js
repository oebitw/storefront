let initialState = {
    categories: [
      {
        name: 'food',
        display_name: 'Food',
        description: 'Welcome to Food Section',
      },
      {
        name: 'electronics',
        display_name: 'Electronics',
        description: 'Make your Life Easier',
      },
      {
        name: 'clothing',
        display_name: 'Clothing',
        description: 'You are what you wear',
      },
    ],
    activeCategories: {},
  };
  
  const categories = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'ACTIVE':
        let activeCategories = initialState.categories.find((category)=>category.name === payload);
        return { categories: initialState.categories, activeCategories};
      default:
        return state;
    }
  };
  
  export default categories;
  
  // actions:
  export const active = (name) => {
    return {
      type: 'ACTIVE',
      payload: name,
    };
  };