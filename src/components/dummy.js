import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';


const dummy = () => {

    const navigate=useNavigate();
    const [loading, setloading] = useState(true);  //to check the data is loaded or not
    const [employees, setemployees] = useState(null);
   
   useEffect(() => {
    const fetchdata = async ()=>{
         setloading(true);   //set loading to true as at this moment we are loading the data
         try{
            //calling the api itself in the try block
            const response = await EmployeeService.getEmployees();
            //to get the data from the api it may take some time. so we need to wait until we get the data
            //so we Use the "await" & ** must include the "async" to the funcion itselt as 'await' expressions are only allowed within async functions and at the top levels of modules.
            setemployees(response.data) //setting the response to the state(useState) and passing the whatever data 

         }
         catch(error){
            console.log(error);
         }
         setloading(false); //when everything is done set loading to false
    };

//above is the declaration of the function "fetchdata"
    fetchdata(); //calling of the function

   } , []);  //here we pass an empty array to the useEffect hook so it will be triggered only once.(when the component is mounted)
   
const deleteEmployee=(e,id)=>{
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) =>{  //deleting the data from the database by calling deleteEmployee and "then" once we get the response back
        if(employees){
            setemployees((prevElement)=>{           //we are setting the state again
                return prevElement.filter((employee)=>employee.id !=id);
            });
        }
    });

}
    


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
            {!loading && ( 
            <tbody>
                {employees.map((employee)=>(
                <tr className='text-left font-semibold text-gray-500 text-sm px-2 py-2 whitespace-nowrap'>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td className='font-semibold text-right px-3 py-2'>
                    <a href='#' className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</a>
                    <a href='#'className='text-indigo-600 hover:text-indigo-800 px-4'>Delete</a>
                    </td>
                </tr>
                ))}
            </tbody>
            )}

        </table>
    </div>

 </div>
  )
}

export default dummy