import { products } from "../data/prducts";


export const getProductById = ( _id ) => {

    return products.find( product => product._id === _id );
}