import React from "react";
import '../Summary/Summary.css'
import Button from "../Button/Button";


export default function Summary( {
    isMonthly, 
    planPrice, 
    planName, 
    summaryItems, 
    totalPrice
    } ) {

    return (
    <>
    <div className="summary-topcontainer">
        <div className="summary-container">
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming.</p>
                <div className="purchases-container">
                    <div className="purchase-plan">
                        <div className="purchase-plan-sub">
                            <div className="purchase-label smallfont dark bold">{planName} ({isMonthly ? 'Monthly' : 'Yearly'})</div>
                            <a href="Plan" className="href smallfont light">Change</a>
                        </div>
                        <div className="purchase-amount smallfont dark bolder">${planPrice} {isMonthly ? '/mo' : '/yr'}</div>
                    </div>
                    <hr />
                    <div className="purchase-addons">
                        {summaryItems.map((item, id) => (
                            <div key={id} className="purchase-addon">
                            <div className="purchase-label smallfont light">{item.title}</div>
                            <div className="purchase-amount smallfont dark">+${isMonthly ? item.price.month : item.price.year} {isMonthly ? '/mo' : '/yr'}</div>
                        </div>
                        ))}
                    </div>
                </div>
                    <div className="purchase-total">
                        <div className="total-label smallfont light">Total ({isMonthly ? 'per month' : 'per year'})</div>
                        <div className="total-amount mediumfont purple bold">+${totalPrice}{isMonthly ? '/mo' : '/yr'}</div>
                    </div>
        </div>
        <Button /> 
    </div>
    </>
    )
}