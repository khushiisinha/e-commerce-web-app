import React from 'react'

function BagDisplay(props) {
  return (
    <div className='flex w-full p-2 border-y-2 gap-4 mb-2 '>
<div className='font-sans font-bold'>{props.index+1}. </div>
    <div className='border p-2'><img src={props.productImage} alt="" className='w-20 h-20'/></div>
    <div className='flex flex-col gap-1 text-sm items-start'><span className='font-bold font-sans'>{props.brand}</span><span className='font-sans'>{props.productName}</span> <span className='font-bold font-sans'>₹{props.productPrice}</span></div>
</div>
  )
}

export default BagDisplay