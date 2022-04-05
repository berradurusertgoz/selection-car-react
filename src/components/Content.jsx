import React, { useEffect, useState } from "react";
import { useData } from "../context/DataContext"
import CarArea from "./CarArea";

function Content() {
  const {carOptions, setCarOptions} = useData()
  const [cars, setCars] = useState([
    {
      imageUrl: "https://i.ibb.co/p0ZKRJn/Bitmap-1.png",
      text: "153.500 TL‘den başlayan fiyatlarla",
      isActive: true,
    },
    {
      imageUrl: "https://i.ibb.co/jyhvZ4n/Bitmap-2.png",
      text: " 193.500 TL‘den başlayan fiyatlarla",
      isActive: false,
    },
  ]);
  useEffect(() => {
    setCarOptions({selectedCar:cars.find(x => x.isActive === true)})
  },[cars])
  console.log(carOptions)
  const handleClick = (index) => {
    if (cars[index].isActive) {
      return
    }else {
      setCars(cars.map((car,i) => ({...car,isActive : !cars[i].isActive})))
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center mt-91">
        {cars.map((car, index) => (
          <CarArea
            key={index}
            car={car}
            index={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}

export default Content;
