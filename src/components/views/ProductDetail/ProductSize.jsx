import React, { useState } from 'react'


export const ProductSize = ({products}) => {

    
  const [selected, setSelected] = useState(1)
  const [size, setSize] = useState(null)
  // const cat = products.category

  // 'pants'
  // 'shoes'
  // 'purses'
  // 't-shirts'
  // 'jackets'

  
  // use efect()

  if (products.category === 'pants') {
    return setSize({ first: '38"', second: '38"', third: '42"' })
  }
  if (products.category === 'shoes') {
    return setSize({ first: '38', second: '42', third: '44' })
  }
  if (products.category === 't-shirts' || products.category === 'jackets' ) {
    return setSize({ first: 'S', second: 'M', third: 'L' })
  }




  return (
    <>
        <span className='size'>Select Size: <span>Medium</span></span>
        <div className='size-options'>
            <div className={selected === 1 && "select"} onClick={ () => setSelected(1)}><span>{ size.first }</span><span>Small</span></div>
            <div className={selected === 2 && "select"} onClick={ () => setSelected(2)}><span>{ size.second }</span><span>Medium</span></div>
            <div className={selected === 3 && "select"} onClick={ () => setSelected(3)}><span>{ size.third }</span><span>Large</span></div>
        </div>
    </>
  )
}
