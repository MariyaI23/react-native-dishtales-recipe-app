import * as ActionTypes from "./ActionTypes";

export const breakfasts = (
  state = { isLoading: true, errMess: null, breakfasts: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_BREAKFASTS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        breakfasts: action.payload,
      };

    case ActionTypes.BREAKFASTS_LOADING:
      return { ...state, isLoading: true, errMess: null, breakfasts: [] };

    case ActionTypes.BREAKFASTS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
