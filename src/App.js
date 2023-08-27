import React, {useState} from "react";
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Menu from '../src/components/Menu/Menu';
import Info from '../src/components/Info/Info';
import Plan from '../src/components/Plan/Plan';
import AddOn from '../src/components/AddOn/AddOn';
import Summary from '../src/components/Summary/Summary';
import Confirm from '../src/components/Confirm/Confirm';
import Footer from '../src/components/Footer/Footer';
import PlanList from './PlanList.json';
import AddOnList from './AddOnList.json';



function App() {
    
  const [formData, setFormData] = useState({name: '', email: '', phone: ''});
  const [errors, setErrors] = useState({});
  const [plans] = useState(PlanList);
  const [addOns]= useState(AddOnList);
  const [isMonthly, isYearly] = useState('Monthly');
  const [planPrice, setPlanPrice] = useState(0);
  const [planName, setPlanName] = useState('');
  const [summaryItems, setSummaryItems] = useState([]);
  const [addOnOne, setAddOnOne] = useState(false)
  const [addOnTwo, setAddOnTwo] = useState(false)
  const [addOnThree, setAddOnThree] = useState(false)
  
  const navigate = useNavigate();
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'This field is required';
    }

    if (!formData.email) {
      newErrors.email = 'This field is required';
    }

    if (!formData.phone) {
      newErrors.phone = 'This field is required';
    }


    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log(errors)
      navigate('/Plan'); 
    }
  };

  const addPlanData = (plan) => {
    const planId = plans.find((x) => x.id === plan.id)
    const price = planId.price
    const name = planId.name
    setPlanName(name)
    isMonthly ?
    setPlanPrice(price.month) :
    setPlanPrice(price.year)    
  };

  const handleSwitch = () => {
    isYearly(!isMonthly)
  };

  const addOnOneClicked = () => {
    const exists = summaryItems.some(element => element.id === 1);
    if (!exists) {
      setSummaryItems((prev) => [...prev, addOns[0]])}
    else {
      setSummaryItems((prev) => [...prev.filter((element) => element.id !== 1 )])
    } 
    setAddOnOne(!addOnOne)  
  }

  const addOnTwoClicked = () => {
    const exists = summaryItems.some(element => element.id === 2);
    if (!exists) {
    setSummaryItems((prev) => [...prev, addOns[1]])}
    else {
      setSummaryItems((prev) => [...prev.filter((element) => element.id !== 2 )])
    } 
    setAddOnTwo(!addOnTwo)  
  }

  const addOnThreeClicked = () => {
    const exists = summaryItems.some(element => element.id === 3);
    if (!exists) {
    setSummaryItems((prev) => [...prev, addOns[2]])}
    else {
      setSummaryItems((prev) => [...prev.filter((element) => element.id !== 3 )])
    } 
    setAddOnThree(!addOnThree)  
  }
          
  const totalPrice = 
    isMonthly ? 
    summaryItems.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price.month, 0) + planPrice :
    summaryItems.reduce(
      (prevValue, currentValue) => prevValue + currentValue.price.year, 0) + planPrice 

  
  return (
    <>
    <div className="main-container">
      <main>  
        <Menu />
          <Routes>
            <Route 
              path="/" 
              element={<Info 
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit} 
                errors={errors}
                formData={formData}            
              />} />
            <Route 
              path="/Plan" 
              element={<Plan 
                isMonthly={isMonthly} 
                handleSwitch={handleSwitch}
                plans={plans}
                addPlanData={addPlanData}
                />} 
                />
            <Route 
              path="/AddOn" 
              element={<AddOn 
                isMonthly={isMonthly} 
                addOns={addOns}
                addOnOne={addOnOne}
                addOnTwo={addOnTwo}
                addOnThree={addOnThree}
                addOnOneClicked={addOnOneClicked}
                addOnTwoClicked={addOnTwoClicked}
                addOnThreeClicked={addOnThreeClicked}
                />
              } 
              />
            <Route 
              path="/Summary" 
              element={<Summary
                isMonthly={isMonthly}
                summaryItems={summaryItems}
                planPrice={planPrice}
                planName={planName}
                totalPrice={totalPrice}
                />} />
            <Route 
              path="/Confirm" 
              element={<Confirm />} />
          </Routes>
      </main>
    </div>
    <footer>
      <Footer />
    </footer>   
    </>
  );
  
}

export default App;