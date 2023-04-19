import axios from "axios";

const EMPLOYEE_BASE_URL = "http://localhost:8080/api/v1/employees";

class EmployeeService{
    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_URL);
    }
    getSingleEMployee(id){
        return axios.get(EMPLOYEE_BASE_URL + "/" + id);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_URL, employee);
    }
    updateEmployee(id, employee){
        return axios.put(EMPLOYEE_BASE_URL + "/" + id, employee);
    }
    deleteEmployee(id){
        return axios.delete(EMPLOYEE_BASE_URL + "/" + id);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new EmployeeService();