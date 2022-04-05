import React, { useEffect } from 'react'
import { useData } from '../context/DataContext'

function Summary() {
    const {carOptions, setCarOptions} = useData()

    useEffect(() => {
        console.log(carOptions.accessories[0].name);
    }, [])
  return (
   <>
   <div className='summary-part'>
             <div className="selection-car">
                 <div className="back-circle"></div>
                <div className="selection-ibiza-text">
                    IBIZA
                </div>
                <div className="car-part">
                    <img src={carOptions.selectedCar.imageUrl} alt="" />
                </div>
            </div>
            <div className="summary-text-part">
                <div className="first">
                    <h4>Model</h4>
                    <p>{carOptions.selectedCar.text}</p>
                    <div className="lines"></div>
                </div>
                <div className="second">
                    <h4>Color</h4>
                    <p>{carOptions.color}</p>
                     <div className="lines"></div>
                </div>
                <div className="first">
                    <h4>ACCESSORIES</h4>
                    <p>{carOptions.accessories[0].name}, {carOptions.accessories[0].price}</p>
                   
                </div>
            </div>
   </div>
   </>
  )
}

export default Summary