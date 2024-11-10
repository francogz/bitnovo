import { combineReducers } from "@reduxjs/toolkit";
import * as APIs from "../api/_index";

// Crear los reducers a partir de los endpoints
const apiReducers = Object.keys(APIs).reduce((acc, current) => {
    if (
        !APIs[current] ||
        !APIs[current]?.reducerPath ||
        !APIs[current].reducer
    ) {
        console.error(`No existe el path "${current}"`);
        return acc;
    } else {
        return { ...acc, [APIs[current]?.reducerPath]: APIs[current].reducer };
    }
}, {});

const appReducer = combineReducers({
    ...apiReducers,
});

export const rootReducer = (state: any, action: any) => {
    if (action.type === 'NEW_ORDER') {
        state = undefined;
    }
    return appReducer(state, action);
};

export const apiMiddlewares = Object.keys(APIs).map(
    (key) => APIs[key]?.middleware
);
