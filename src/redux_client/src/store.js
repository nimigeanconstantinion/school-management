import {applyMiddleware, combineReducers, createStore} from "redux";

import thunk from "redux-thunk";
import {configureStore} from '@reduxjs/toolkit';
import {composeWithDevTools} from "redux-devtools-extension";
import {loginReducer} from "./reducers/userReducers";

const reducer=combineReducers({
    login:loginReducer
});

const middleware = [thunk];

const initialState = {};
const preloadedState={};

export const store=configureStore({
    reducer,
    preloadedState,
    middleware: [ ...middleware],
})