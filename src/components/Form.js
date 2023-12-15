import React, {useState} from "react";

import {Routes, Route } from 'react-router-dom';
import {useNavigate} from "react-router-dom";
import View from './View';
import SpeakButton from "./SpeakButton";

const Form = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    skills: "",
    experience: "",
    designation: "",
    jobType: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/viewDetails",{state:formData});
  };
  return (
    <div className="container">
        <form >
        <div className="heading">
        <h2>Form</h2>  
        <SpeakButton />
        
        </div>
        <div className="input-container">
        <label>Enter your Name: </label>
        <input type="text" name="name" onChange={handleChange} />
        </div>  
        <div className="input-container">
        <label>Enter your skills: </label>
        <input type="text" name="skills" onChange={handleChange} />
        </div>  
        <div className="input-container">
        <label>Enter your years of experience: </label>
        <input type="text" name="experience" onChange={handleChange} />
        </div>  
        <div className="input-container">
        <label>Enter your current designation: </label>
        <input type="text" name="designation" onChange={handleChange} />
        </div>  
        <div className="input-container"> 
        <label>What kind of job are you looking for? </label>
        <input type="text" name="jobType" onChange={handleChange} />
        </div>  
        <button type="submit" className="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>

          </form>
       
    </div>
  )
};

export default Form;
