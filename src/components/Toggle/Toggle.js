import React from "react";
import '../Toggle/Toggle.css';


export default function Toggle( {isMonthly, handleSwitch} ) {

    return (
        <>
        <div className="toggle-container">
        {isMonthly ? 
            <div className="toggle-text smallfont bold">Monthly</div> :
            <div className="toggle-text smallfont light bold">Monthly</div> 
            }
            <input 
                type="checkbox" 
                id="checkbox-input" 
                onClick={handleSwitch}
            />
            <label htmlFor="checkbox-input"
            className="round-slider-container">
              {isMonthly ?
            <div className="round-slider"></div> :
            <div className="round-slider-right"></div>
          }
            </label>
            {isMonthly ? 
            <div className="toggle-text smallfont light bold">Yearly</div> :
            <div className="toggle-text smallfont bold">Yearly</div> 
            }
        </div>
        </>
    );
  }
