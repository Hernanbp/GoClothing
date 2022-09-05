// import { applyMiddleware } from "redux";
// import { composeWithDevTools } from "@redux-devtools/extension"
// import thunk from "redux-thunk";
import { createStore } from "redux";
import {rootReducer, cartReducer} from "./reduxFunctions"

export const store = createStore(
    rootReducer,
    // composeWithDevTools(applyMiddleware(thunk))
)
