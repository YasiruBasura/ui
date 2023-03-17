import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/v1/employee"
class EmployeeService{

    saveEmployee(employee) { //take employee object as the input parameter
    
            return axios.post(EMPLOYEE_API_BASE_URL,employee)  //here we are passing the entire object to the localhost url 
    
    
    }

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }


deleteEmployee(id){
    return axios.delete(EMPLOYEE_API_BASE_URL+"/"+id);
}

}

export default new EmployeeService();