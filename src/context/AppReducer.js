import { actionTypes } from "./actionTypes";

const appReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload.credentials,
      };
    default:
      return state;
  }
};
export default appReducer;
