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
export const storeAllData = (arr)=>{
    return{
        type: "storeAllData",
        payload: arr,
    }
}

// reducers
const initialState = {
    cart: [],
    loading: false,
    error: "",
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

const initialState2 = {
    apiData: [],
    loading: false,
    error: "",

}
export const allApiDataReducer = (state=initialState2, action)=>{
    switch(action.type){
        case "storeAllData":
            return{
                ...state,
                apiData: action.payload
            }
        default:{
            return state
        }
    }
}

export const rootReducer =  combineReducers({
        cartReducer,
        allApiDataReducer
    })


// store
export const store = createStore(
    rootReducer,
)