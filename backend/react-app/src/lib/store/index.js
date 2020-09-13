import { combineReducers, createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
// import { sideBarReducer, categoriesReducer } from "../../features";
import { mainReducer } from "./reducer";

const rootReducer = combineReducers({
    main: mainReducer,
    // sidebar: sideBarReducer,
    // categories: categoriesReducer,
});

let enhacers;

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
    enhacers = applyMiddleware(thunk, createLogger({ collapsed: true }));
} else {
    enhacers = applyMiddleware(thunk);
}

function configureStore() {
    const store = createStore(rootReducer, undefined, enhacers);
    return store;
}

export const store = configureStore();