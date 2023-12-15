import React from "react"
import { useLocation } from "react-router-dom";

const View = () => {
  const location = useLocation();
  const formData = location.state;  
  return (
    <div className="view">
       <span>Name: {formData.name}</span>
       <span>Skills: {formData.skills}</span>
       <span>experience: {formData.experience}</span>
       <span>Designation: {formData.designation}</span>
       <span>Looking for : {formData.jobType}</span>
      
    </div>
  )
};

export default View;
