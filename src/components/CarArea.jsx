import React from 'react'

function CarArea({car, index,handleClick} ) {

    return (
   <>
  { car && 
        <div onClick={() => handleClick(index)} className='car-area'>
        <div className={car.isActive ? "car-area-back-circle": "d-none"}></div>
        <div className={car.isActive ? "thick" : "d-none"}>
        <i class="fa fa-check"></i>
        </div>
        <div className={car.isActive ? "ibiza-text": "d-none"}>
            IBIZA
        </div>
        <div className={car.isActive ? "car": "car car-low-opacity"}>
           <img src={car.imageUrl} alt="" />
        </div>
        <div className={car.isActive ? "car-area-text": "d-none"}>
        {car.text}
        </div>
        <button className={car.isActive ? "car-area-button": "d-none"}>
            Select
        </button>
    </div>

}
   
   </>
  )
}
export default CarArea