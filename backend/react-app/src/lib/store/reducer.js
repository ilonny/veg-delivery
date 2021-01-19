const initialState = {
  user: undefined,
};
export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      console.log("SET_USER", action);
      return {
        ...state,
        user: action.user,
      };
    default:
      return {
        ...state,
      };
  }
};
