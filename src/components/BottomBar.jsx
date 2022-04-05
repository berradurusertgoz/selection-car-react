import React from "react";
import { useData } from "../context/DataContext";
import{
  Link
  } from "react-router-dom"

function BottomBar() {
  const {steps, stepCount, setStepCount } = useData();
  return (
    <div>
      <div className="input-group mb-3 bottom-bar">
          
       <div className="bottom-left-area align-items-center d-flex">
           <div className="bottom-car">
           </div>
           <div className="line"></div>
           <div className="bottom-text">
               <div className="bottom-title">
                   Total
               </div>
               <div className="bottom-price">193.500 TL</div>
           </div>
       </div>
       <Link className="text-decaration" to={steps[stepCount].link}>
        <button onClick={() => setStepCount(stepCount+1)} className="bottom-button d-flex align-items-center justify-content-around">
            <span>{steps[stepCount].name}</span>
            <i class="fa-solid fa-arrow-right"></i>
        </button>
        </Link>
      </div>
    </div>
  );
}

export default BottomBar;
