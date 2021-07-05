let initialState = {
    cart: [],
    count: 0,
    show: false,
};

const cart = (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'INCREMENT':
            let newList = [...state.cart, payload];
            return {
                cart: newList,
                display: uniqueArr(newList),
                count: state.count + 1,
                show: true,
            };
        case 'DECREMENT':
            const newProducts = state.cart.filter(
                (product) => product.name !== payload.name
            );
            return {
                cart: newProducts,
                display: uniqueArr(newProducts),
                count: state.count - payload.count - 1,
                show: true,
            };
        case 'SHOW_CART':
            return {
                cart: state.cart,
                display: state.display,
                count: state.count,
                show: payload,
            };
        default:
            return state;
    }
};

export default cart;

function uniqueArr(arr) {
    const map = new Map();
    for (const item of arr) {
        if (!map.has(item._id)) {
            map.set(item._id, {
                id: item._id,
                name: item.name,
                url: item.url,
                category: item.category,
                price: item.price,
                inStock: item.inStock,
                count: item.count,
            });
        } else {
            map.delete(item._id);
            map.set(item._id, {
                id: item._id,
                name: item.name,
                url: item.url,
                category: item.category,
                price: item.price,
                inStock: item.inStock,
                count: item.count,
            });
        }
    }
    return Array.from(map.values());
}