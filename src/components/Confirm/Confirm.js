import React from "react";
import '../Confirm/Confirm.css';
import thankYouIcon from '../../images/icon-thank-you.svg';


export default function Confirm() {
    return (
        <div className="confirm-topcontainer">
            <div className="confirm-container">
                <div className="confirm-box-container">
                    <img src={thankYouIcon} alt="" />
                    <h1>Thank you!</h1>
                    <p>Thanks for confirming your subscription! We hope you have fun
                    using our platform. If you ever need support, please feel free
                    to email us at support@loremgaming.com.</p>
                </div>
            </div>
        </div>
    )
}

