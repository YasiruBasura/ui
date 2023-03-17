import React from 'react'

const Employee = ({employee}) => {
  return (
    <tr key={employee.id} className='text-left font-semibold text-gray-500 text-sm px-2 py-2 whitespace-nowrap'>  
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.emailId}</td>
                <td className='font-semibold text-right px-3 py-2'>
                    <a href='#' className='text-indigo-600 hover:text-indigo-800 px-4'>Edit</a>
                    <a href='#'className='text-indigo-600 hover:text-indigo-800 px-4'>Delete</a>
                    </td>
                </tr>
  )
}

export default Employee