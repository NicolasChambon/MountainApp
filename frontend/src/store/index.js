import { legacy_createStore as createStore, applyMiddleware } from "redux";

import { composeWithDevTools } from "@redux-devtools/extension";

import reducer from "../reducers/reducer";

import middleware from "../middleware/middleware";

const enhancer = composeWithDevTools(applyMiddleware(middleware));

const store = createStore(reducer, enhancer);

export default store;
