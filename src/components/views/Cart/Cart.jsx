import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import  {ProductsList} from "../ProductsList/ProductsList"

export const Cart = () => {

  const dispatch = useDispatch()

  const {error, loading, cartReducer} = useSelector(state=>{
    console.log(state)      // TODO el estado de redux
    console.log(state.cartReducer) // Solo el reducer del Cart (1 de todo el state de redux)
    return state.cartReducer
  })

  return (
    <div>
      Cart

      {cartReducer && cartReducer.map(()=>{
        return (
          <div>
            card component con el producto
            {/* <ProductsList /> */}
          </div>
        )
      })}

    </div>
  )
}


