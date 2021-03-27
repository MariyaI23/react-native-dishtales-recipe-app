import * as ActionTypes from "./ActionTypes";

export const lunches = (
  state = { isLoading: true, errMess: null, lunches: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_LUNCHES:
      return {
        ...state,
        isLoading: false,
        errMess: null,
        lunches: action.payload,
      };

    case ActionTypes.LUNCHES_LOADING:
      return { ...state, isLoading: true, errMess: null, lunches: [] };

    case ActionTypes.LUNCHES_FAILED:
      return { ...state, isLoading: false, errMess: action.payload };

    default:
      return state;
  }
};
