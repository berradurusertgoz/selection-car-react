import React, { useEffect, useState } from 'react'
import { useData } from '../context/DataContext'
import AccessorriesItem from './AccessorriesItem'

function Selection() {
    const {carOptions, setCarOptions} = useData()
    const [accessoriesList,setAccesorriesList] = useState([
        {
            name:"SEAT FREE SYNC PACK EASY JET",
            price:7500,
            isChecked:false
        },
        {
            name:"MAINTENANCE PROGRAM UPGRADE",
            price:1250,
            isChecked:false
        },
        {
            name:"SEAT FREE SYNC PACK EASY JET",
            price:7500,
            isChecked:false
        },
        {
            name:"SEAT FREE SYNC PACK EASY JET",
            price:1200,
            isChecked:false
        },
        {
            name:"SEAT FREE SYNC JET",
            price:750,
            isChecked:false
        },
        {
            name:"SEAT FREE SYNC JETS",
            price:850,
            isChecked:false
        }
    ])
    const handleClick = (index) => {
        setAccesorriesList(accessoriesList.map((item) => {
            if (item == accessoriesList[index]) {
                item.isChecked = !item.isChecked
                return item
            }else{
                return item
            }
        }))
    }
    useEffect(()=>{
        setCarOptions(prev => ({...prev, accessories:accessoriesList.filter(item => item.isChecked)}))
    },[accessoriesList])
    console.log(carOptions)
  return (
      <>
    <div className='selection-part'>
        <div className="selection-text">
            <p>Seçtiğin araca ait özellikler, <br /> konforun ve yaşam stilini belirler.</p>
            </div>
            <div className="card-box">
            {
                accessoriesList.map((item,i) => (
                    <AccessorriesItem key={i} accessory={item} handleClick={handleClick} index={i}/>
                ))
            }
        </div>
        
    </div>
    </>
  )
}

export default Selection