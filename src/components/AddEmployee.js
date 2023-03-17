import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployee = () => {

const [employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
      //setting the initial values
});

const navigate=useNavigate();

const handleChange=(e) =>{
  const value=e.target.value; //the value which are getting
  setEmployee({...employee,[e.target.name]:value});   //form this the update in your input field the same will be updated to the state as well.
}

const saveEmployee=(e) =>{ //this function is nothing but taking the event as input parameter
  e.preventDefault();       //this will disable the refreshing of the page
  EmployeeService.saveEmployee(employee).then((response) =>{
      console.log(response);
      navigate("/employeeList"); //we have defined this /employeeList in our router in app.js

  }).catch((Error)=>{
    console.log(Error);
  });
};

const reset =(e)=>{
  e.preventDefault(); //because we dont want to refresh the page when using 'clear' button
  setEmployee({
    id:"",
    firstName:"",
    lastName:"",
    emailId:"",
  //setting the initial values
});
}

  return (
  <div className='flex max-w-xl mx-auto shadow border-b'>
    <div className='px-8 py-8'>
      <div className='font-thin text-2xl tracking-wider'>
      <h1>Add new Employee</h1>
      </div>
      



      <div className='items-center justify-center h-14 w-full my-4'>
        <label className="block text-gray-600 text-sm font-normal">
          First Name
        </label>
      <input type="text"
      name='firstName'              //define the name of the tag
      value={employee.firstName}   //define the value of the tag //state.firstName
      onChange={(e)=>handleChange(e)}  //onchange of the input field here we are creating a method
      className="h-8 w-96 border mt-2 px-2 py-2">
      </input>
      </div>


      <div className='items-center justify-center h-14 w-full my-4'>
      <label className="block text-gray-600 text-sm font-normal">
        Last Name
      </label>
      <input type="text"
      name='lastName'   //here the name of the curent element is lastName
      value={employee.lastName}
      onChange={(e)=>handleChange(e)}   //So here 'e' would be the the current element and e.target for the event.(here it will be the particular input) and e.target.name
      className="h-8 w-96 border mt-2 px-2 py-2">
      </input>
      </div>


      <div className='items-center justify-center h-14 w-full my-4'>
      <label className="block text-gray-600 text-sm font-normal">
        Email
      </label>
      <input type= "email" 
       name='emailId'
       value={employee.emailId}
       onChange={(e)=>handleChange(e)}
      className="h-8 w-96 border mt-2 px-2 py-2">
      </input>
      </div>

     <div className=' justify content-center  h-10 w-full  space-x-2 pt-4'>
        <button onClick={saveEmployee} className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700">
          Save
        </button>
        <button 
        onClick={reset}
        className="rounded text-white font-semibold bg-red-400 py-2 px-2 hover:bg-red-700">
          Clear
        </button>
          
      </div>
    </div>
  </div>

    
  )
}

export default AddEmployee



