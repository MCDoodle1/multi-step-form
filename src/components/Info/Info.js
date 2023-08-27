import React from "react";
import '../Info/Info.css';

export default function Info( {
  errors,
  formData,
  handleInputChange, 
  handleSubmit
} ) 
{

  return (

  <form className="info-topcontainer" autoComplete="off" onSubmit={handleSubmit}>
    <div className="info-container">
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>          
      <div className="info-box-container">            
        <div className="info-label-box">
        <label htmlFor="name" className="info-label smallerfont dark">Name</label>  
        { errors.name && <div className="errormessage"> {errors.name} </div> }
        </div>
        <div className="info-box">
            <input
              type="text" 
              id="name"
              name="name"
              className="smallfont light bold"
              placeholder="e.g. Stephen King"
              onChange={handleInputChange}
              value={formData.name}
              style={errors.name && {border: 'var(--border-width) solid var(--strawberry-red)'}}
              />
            
        </div>
        <div className="info-label-box">
          <label htmlFor="email" className="info-label smallerfont dark">Email Address</label>
          { errors.email && <div className="errormessage"> {errors.email} </div> }
        </div>
        <div className="info-box">
          <input
            type="text" 
            id="name"
            name="email"
            className="smallfont light bold"
            placeholder="e.g. stephenking@lorem.com"
            onChange={handleInputChange}
            value={formData.email}
            style={errors.email && {border: 'var(--border-width) solid var(--strawberry-red)'}}
          />
        </div>
        <div className="info-label-box">
          <label htmlFor="phone" className="info-label smallerfont dark">Phone Number</label>
            { errors.phone && <div className="errormessage"> {errors.phone} </div> }
        </div>
        <div className="info-box">
          <input
            type="text"
            id="phone" 
            name='phone'
            className="smallfont light bold"
            placeholder="e.g. +1 234 567 890"
            onChange={handleInputChange}
            value={formData.phone}
            style={errors.phone && {border: 'var(--border-width) solid var(--strawberry-red)'}}
            />
        </div>
    </div>
    </div>
    <div className="info-box-button-container">
    <button type="submit" className="info-box-button">Next Step</button>
    </div>
  </form>           

  )
}
