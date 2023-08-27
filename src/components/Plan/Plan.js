import React from "react";
import '../Plan/Plan.css';
import Toggle from '../Toggle/Toggle';
import Button from "../Button/Button";


export default function Plan( {
    isMonthly, 
    plans, 
    handleSwitch, 
    addPlanData,
} ) {

    return (
        <>
        <div className="plan-topcontainer">
          <div className="plan-container">
              <h1>Select your plan</h1>
              <p>You have the option of monthly or yearly billing.</p>
              <div className="plan-box-container">
                  {plans.map((plan, id) => (
          
                      <button onClick={() => addPlanData(plan)} className="plan-box" key={id}>
                          <div className="plan-icon"><img src={plan.icon} alt="Advanced icon" /></div>
                          <div className="plan-wrapper">
                              <div className="plan-label mediumfont dark bold">{plan.name}</div>
                              {isMonthly ?
                              <div className="smallfont light">${plan.price.month}/mo</div> :
                              <>
                              <div className="smallfont light">${plan.price.year}/yr</div>
                              <div className="smallerfont dark bold">2 months free</div>
                              </>
                              }
                          </div>
                      </button >
          
                  ))}
              </div>
              <Toggle handleSwitch={handleSwitch} isMonthly={isMonthly}/>
          </div>
        <Button />
        </div>
        </>
    )
}
