import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import '../Button/Button.css';


export default function Button() {
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleNextButton = () => {    
    if (location.pathname === "/")  {     
      navigate('/Plan')
    }
    if (location.pathname === "/Plan") {
      navigate('/AddOn')
    }
    if (location.pathname === "/AddOn") {
      navigate('/Summary')
    }
    if (location.pathname === "/Summary") {
      navigate('/Confirm')
    }
  }
  
  const handleBackButton = () => {
    if (location.pathname === "/Plan") {
      navigate('/')
    }
    if (location.pathname === "/AddOn") {
      navigate('/Plan')
    }
    if (location.pathname === "/Summary") {
      navigate('/AddOn')
    }
  }

    return (
      <>
      <div className="button-container">
        <button 
          className={location.pathname === "/" ? "return-link invisible" : "return-link smallfont light bold"}
          onClick={handleBackButton}>Go Back
        </button>
        <button 
          className={location.pathname === "/Summary" ? "button-confirm" : "button-nextstep"}
          type='{location.pathname === "/" ? "submit" : "button"}'
          onClick={handleNextButton} >{location.pathname === "/Summary" ? 'Confirm' : 'Next Step'}
        </button> 
      </div>
      </>
    )
}