import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {ProductsList} from "../ProductsList/ProductsList"

export const Cart = () => {

  const dispatch = useDispatch()

  const {error, loading, cartReducer} = useSelector(state=>{
    console.log(state)
    return state.cartReducer
  })

  return (
    <div>
      Cart

      {cartReducer && cartReducer.map(()=>{
        return (
          <div>
            <ProductsList />
          </div>
        )
      })}

    </div>
  )
}


