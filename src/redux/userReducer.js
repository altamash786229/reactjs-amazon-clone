const initialState = {
  user: false
};

export const userReducer = (state = initialState, action) => {
  if (action.type === "login") {
    state.user = true;
    return { ...state };
  }
  if (action.type === "logout") {
    state.user = false;
    return { ...state };
  }
  return state;
};
