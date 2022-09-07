import React, { useState } from 'react'


export const ProductSize = () => {

    
    const [selected, setSelected] = useState(1)







  return (
    <>
        <span className='size'>Select Size: <span>Medium</span></span>
        <div className='size-options'>
            <div className={selected === 1 && "select"} onClick={ () => setSelected(1)}><span>134mm</span><span>Medium</span></div>
            <div className={selected === 2 && "select"} onClick={ () => setSelected(2)}><span>134mm</span><span>Medium</span></div>
            <div className={selected === 3 && "select"} onClick={ () => setSelected(3)}><span>134mm</span><span>Medium</span></div>
        </div>
    </>
  )
}
