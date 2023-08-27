import React from "react";
import '../Menu/Menu.css';
import { useLocation } from "react-router-dom";

export default function Menu() {

    const location = useLocation()
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <>
        <div className="menu-container-mobile">
            <div className={splitLocation[1] === "" ? "circle-active" : "circle"}>1</div>
            <div className={splitLocation[1] === "Plan" ? "circle-active" : "circle"}>2</div>
            <div className={splitLocation[1] === "AddOn" ? "circle-active" : "circle"}>3</div>
            <div className={splitLocation[1] === "Summary" || splitLocation[1] ==="Confirm" ? "circle-active" : "circle"}>4</div>
        </div>
        <div className="menu-container-desktop">
            <div className="circle-wrapper">
                <div className={splitLocation[1] === "" ? "circle-active" : "circle"}>1</div>
                <div className="step-wrapper">
                    <div className="step smallerfont">step 1</div>
                    <div className="desktop-label smallerfont bold">your info</div>
                </div>
            </div>
            <div className="circle-wrapper">
                <div className={splitLocation[1] === "Plan" ? "circle-active" : "circle"}>2</div>
                <div className="step-wrapper">
                    <div className="step smallerfont">step 2</div>
                    <div className="desktop-label smallerfont bold">select plan</div>
                </div>
            </div>
            <div className="circle-wrapper">
                <div className={splitLocation[1] === "AddOn" ? "circle-active" : "circle"}>3</div>
                <div className="step-wrapper">
                    <div className="step smallerfont">step 3</div>
                    <div className="desktop-label smallerfont bold">add-ons</div>
                </div>
            </div>
            <div className="circle-wrapper">
                <div className={(splitLocation[1] === "Summary" || splitLocation[1] === "Confirm") ? "circle-active" : "circle"}>4</div>
                <div className="step-wrapper">
                    <div className="step smallerfont">step 4</div>
                    <div className="desktop-label smallerfont bold">summary</div>
                </div>
            </div>
        </div>
        </>
    )
}