import React, { useEffect } from 'react'
import {useData} from '../context/DataContext'
function Colors() {
  const {carOptions,setCarOptions} = useData()
  const handleClick = (e) => {
    setCarOptions(prev => ({...prev, [e.target.name]: e.target.value}))
  }
  useEffect(()=> {
setCarOptions(prev => ({...prev, color:"red"}))
  },[])
    console.log(carOptions)
  return (
    <div>
        <div className="content">
          <div className="text">
            <p>Hayalindeki araca dair rengini <br /> seç, tarzını hemen yansıt</p>
          </div>
          <div className="color-page-ibiza">
          IBIZA
          </div>
          <div className="color-car">
            <img src="https://i.ibb.co/YtLfw3j/Bitmap-3.png" alt="" />
          </div>
          <div className="color-palette">
            <input defaultChecked type="radio" onClick={handleClick} className='oval-1' name='color' value="red" />
            <input type="radio" onClick={handleClick} className='oval-2' name='color' value="black" />
            <input type="radio" onClick={handleClick} className='oval-3' name='color' value="grey" />
          </div>
        </div>

    </div>
  )
}

export default Colors