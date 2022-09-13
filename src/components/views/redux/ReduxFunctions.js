import {createStore, combineReducers} from "redux"


// actions
export const addToCart = (product)=>{
    return{
        type: "addToCart",
        payload: product,
    }
}
export const removeFromCart = (product)=>{
    return{
        type:"removeFromCart",
        payload: product,
    }
}


// reducers
const initialState = {
    cart: [],
    loading: false,
    error: ""
}

export const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case "addToCart":
            return{
                ...state,
                cart: [...state.cart, action.payload]
            }
        // case "removeFromCart":
        //     return{
        //         ...state,

        //     }
        default:{
            return state
        }
    }
}

export const rootReducer =  combineReducers({
        cartReducer,
    })


// store
export const store = createStore(
    rootReducer,
)