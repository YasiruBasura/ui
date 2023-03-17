import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';


const EmployeeList = () => {

    const navigate=useNavigate();
    const [loading, setloading] = useState(true);  //to check the data is loaded or not
    const [employees, setemployees] = useState(null);
   
   useEffect(() => {
    const fetchdata = ()=>{
         setloading(true);   //set loading to true as at this moment we are loading the data
         try{
            //calling the api itself in the try block
            const response = EmployeeService.getEmployees();

         }
         catch(error){
            console.log(error);
         }
         setloading(false); //when everything is done set loading to false
    };

//above is the declaration of the function "fetchdata"
    fetchdata(); //calling of the function

   } , []);
   

    


  return (
 <div className='container mx-auto my-8'>
    <div className='h-12'>
        <button
        onClick={()=>navigate("/addEmployee")} 
        className='rounded bg-slate-600 text-white px-6 py-2 font-semibold'> Add Employee </button>

    </div>
    <div className='shadow border-b'>
        <table className='min-w-full'>
            <thead className='bg-gray-50 '>
                <tr className='text-left font-medium text-gray-500 uppercase tracking-wider '>
                    <th >First Name</th>
                    <th>Last Name</th>
                    <th>Email Id</th>
                    <th className='text-right px-2 py-2'>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr className='text-left font-semibold text-gray-500 text-sm px-2 py-2 whitespace-nowrap'>
                <td>Yasiru</td>
                <td>Basura</td>
                <td>yasirukanakkahewa@gmail.com</td>
                <td className='font-semibold text-right px-3 py-2'>
                    <a href='#' className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</a>
                    <a href='#'className='text-indigo-600 hover:text-indigo-800 px-4'>Delete</a>
                    </td>
                </tr>
            </tbody>


        </table>
    </div>
 
 </div>
  )
}

export default EmployeeList