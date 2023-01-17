import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import { reducer as AuthReducer } from "./AuthReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  AuthReducer,
});

const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };
