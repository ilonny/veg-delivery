import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import {
  sideBarReducer,
  categoriesReducer,
  productReducer,
  cartReducer,
} from "../../features";
import { mainReducer } from "./mainReducer";

const rootReducer = combineReducers({
  main: mainReducer,
  sidebar: sideBarReducer,
  categories: categoriesReducer,
  product: productReducer,
  cart: cartReducer,
});

let enhacers;

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  enhacers = applyMiddleware(thunk, createLogger({ collapsed: true }));
} else {
  enhacers = applyMiddleware(thunk);
}

function configureStore() {
  const store = createStore(persistedReducer, undefined, enhacers);
  return store;
}

export const store = configureStore();
export const persistor = persistStore(store);
