import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { recipes } from "./recipes";
import { breakfasts } from "./breakfasts";
import { lunches } from "./lunches";
import { dinners } from "./dinners";


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      recipes,
      breakfasts,
      lunches,
      dinners,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};