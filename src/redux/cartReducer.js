const initialState = {
  cart: []
};

function isItemExist(arr, item) {
  let flag = false;
  arr.forEach((element) => {
    if (element.id === item.id) {
      flag = true;
    }
  });

  return flag;
}

export const cartReducer = (state = initialState, action) => {
  console.log(action.payload, "sdf");

  if (action.type === "addToCart") {
    if (isItemExist(state.cart, action.payload)) {
      return state;
    }
    state.cart.push(action.payload);
    return { ...state };
  }
  if (action.type === "removeToCart") {
    state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    return { ...state };
  }
  return state;
};
