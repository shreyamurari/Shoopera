import React from 'react'
import '../Breadcrum/Breadcrum.css'
import arrow_icon from '../Assets/arrow.png'
const Breadcum = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt='' /> {product.category} <img src={arrow_icon} alt='' /> {product.name}
    </div>
  )
}

export default Breadcum
