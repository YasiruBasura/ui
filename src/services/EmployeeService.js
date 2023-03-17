import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee"
class EmployeeService{

    saveEmployee(employee) { //take employee object as the input parameter
    
            return axios.post(EMPLOYEE_API_BASE_URL,employee)  //here we are passing the entire object to the localhost url 
    
    
    }

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService();