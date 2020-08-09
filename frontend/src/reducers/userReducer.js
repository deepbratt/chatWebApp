const initialNewsState = {
  user: {},
  isLoggedin: false,
};
const userReducer = (state = initialNewsState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedin: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedin: false,
      };
    default:
      return state;
  }
};

export default userReducer;
