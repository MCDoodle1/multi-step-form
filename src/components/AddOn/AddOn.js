import React from "react";
import '../AddOn/AddOn.css';
import Button from "../Button/Button";

export default function AddOn({ 
  addOns,
  isMonthly, 
  addOnOne, 
  addOnTwo, 
  addOnThree, 
  addOnOneClicked,
  addOnTwoClicked,
  addOnThreeClicked,
}) {

    return (
        <>
        <div className="addon-topcontainer">
            <div className="addon-container">
                <h1>Pick add-ons</h1>
                <p>Add-ons help enhance your gaming experience.</p>
                <div className="addon-box-container">
                    <button onClick={() => addOnOneClicked()} className={addOnOne ? "addon-box-clicked" : "addon-box"}>
                        <div className={addOnOne ? "checkmark-clicked" : "checkmark"}></div>
                        <div className="addon-wrapper">
                            <div className="addon-label smallfont dark bold">{addOns[0].title}</div>
                            <div className="smallerfont light">{addOns[0].subtitle}</div>
                        </div>
                        {isMonthly ?
                            <div className="addon-amount smallfont light bold">+${addOns[0].price.month}/mo</div> :
                            <div className="addon-amount smallfont light bold">+${addOns[0].price.year}/yr</div>}
                    </button>
                    <button onClick={() => addOnTwoClicked()} className={addOnTwo ? "addon-box-clicked" : "addon-box"}>
                        <div className={addOnTwo ? "checkmark-clicked" : "checkmark"}></div>
                        <div className="addon-wrapper">
                            <div className="addon-label smallfont dark bold">{addOns[1].title}</div>
                            <div className="smallerfont light">{addOns[1].subtitle}</div>
                        </div>
                        {isMonthly ?
                            <div className="addon-amount smallfont light bold">+${addOns[1].price.month}/mo</div> :
                            <div className="addon-amount smallfont light bold">+${addOns[1].price.year}/yr</div>}
                    </button>
                    <button onClick={() => addOnThreeClicked()} className={addOnThree ? "addon-box-clicked" : "addon-box"}>
                        <div className={addOnThree ? "checkmark-clicked" : "checkmark"}></div>
                        <div className="addon-wrapper">
                            <div className="addon-label smallfont dark bold">{addOns[2].title}</div>
                            <div className="smallerfont light">{addOns[2].subtitle}</div>
                        </div>
                        {isMonthly ?
                            <div className="addon-amount smallfont light bold">+${addOns[2].price.month}/mo</div> :
                            <div className="addon-amount smallfont light bold">+${addOns[2].price.year}/yr</div>}
                    </button>
                </div>
            </div>
        <Button />
        </div>
        </>
    )
}