import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Cart = () => {

  const dispatch = useDispatch()
  
  const {error, loading, cartReducer} = useSelector(state=>{
    console.log(state)
    return state.cartReducer
  })

  return (
    <div>
      Cart
    </div>
  )
}


