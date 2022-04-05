import React from 'react'

const AccessorriesItem = ({accessory, handleClick, index}) => {
  return (
     <div onClick={()=> handleClick(index)} className={accessory.isChecked ? "selection-card-black":"selection-card"}>
          <h4>{accessory.name}</h4>
          <div className="price-part">
          <p>{accessory.price} TL</p>
          <div className="selection-thick"></div>
          </div>
          
      </div>
  )
}

export default AccessorriesItem