import * as ActionTypes from "./ActionTypes";

export const dinners = (
  state = { isLoading: true, errMess: null, dinners: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DINNERS:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        dinners: action.payload,
      };

    case ActionTypes.DINNERS_LOADING:
      return { ...state, isLoading: true, errMess: null, dinners: [] };

    case ActionTypes.DINNERS_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
