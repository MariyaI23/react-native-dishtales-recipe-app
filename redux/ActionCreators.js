import * as ActionTypes from "./ActionTypes";
import { baseUrl } from "../shared/baseUrl";

/*     export const fetchComments = () => (dispatch) => {
    return fetch(baseUrl + "comments")
        .then(
        (response) => {
            if (response.ok) {
            return response;
            } else {
            const error = new Error(
                `Error ${response.status}: ${response.statusText}`
            );
            error.response = response;
            throw error;
            }
        },
        (error) => {
            const errMess = new Error(error.message);
            throw errMess;
        }
        )
        .then((response) => response.json())
        .then((comments) => dispatch(addComments(comments)))
        .catch((error) => dispatch(commentsFailed(error.message)));
    };

    export const commentsFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess,
    });

    export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
    }); */

export const fetchRecipes = () => (dispatch) => {
  dispatch(recipesLoading());

  return fetch(baseUrl + "recipes")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((campsites) => dispatch(addRecipes(recipes)))
    .catch((error) => dispatch(recipesFailed(error.message)));
};

export const recipesLoading = () => ({
  type: ActionTypes.RECIPES_LOADING,
});

export const recipesFailed = (errMess) => ({
  type: ActionTypes.RECIPES_FAILED,
  payload: errMess,
});

export const addRecipes = (recipes) => ({
  type: ActionTypes.ADD_RECIPES,
  payload: recipes,
});

export const fetchBreakfasts = () => (dispatch) => {
  dispatch(breakfastsLoading());

  return fetch(baseUrl + "breakfasts")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((breakfasts) => dispatch(addBreakfasts(breakfasts)))
    .catch((error) => dispatch(breakfastsFailed(error.message)));
};

export const breakfastsLoading = () => ({
  type: ActionTypes.BREAKFASTS_LOADING,
});

export const breakfastsFailed = (errMess) => ({
  type: ActionTypes.BREAKFASTS_FAILED,
  payload: errMess,
});

export const addBreakfasts = (breakfasts) => ({
  type: ActionTypes.ADD_BREAKFASTS,
  payload: breakfasts,
});

export const fetchLunches = () => (dispatch) => {
  dispatch(lunchesLoading());

  return fetch(baseUrl + "lunches")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((lunches) => dispatch(addLunches(lunches)))
    .catch((error) => dispatch(lunchesFailed(error.message)));
};

export const lunchesLoading = () => ({
  type: ActionTypes.LUNCHES_LOADING,
});

export const lunchesFailed = (errMess) => ({
  type: ActionTypes.LUNCHES_FAILED,
  payload: errMess,
});

export const addLunches = (lunches) => ({
  type: ActionTypes.ADD_LUNCHES,
  payload: lunches,
});

export const fetchDinners = () => (dispatch) => {
  dispatch(dinnersLoading());

  return fetch(baseUrl + "dinners")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          const error = new Error(
            `Error ${response.status}: ${response.statusText}`
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        const errMess = new Error(error.message);
        throw errMess;
      }
    )
    .then((response) => response.json())
    .then((dinners) => dispatch(addDinners(dinners)))
    .catch((error) => dispatch(dinnersFailed(error.message)));
};

export const dinnersLoading = () => ({
  type: ActionTypes.DINNERS_LOADING,
});

export const dinnersFailed = (errMess) => ({
  type: ActionTypes.DINNERS_FAILED,
  payload: errMess,
});

export const addDinners = (dinners) => ({
  type: ActionTypes.ADD_DINNERS,
  payload: dinners,
});