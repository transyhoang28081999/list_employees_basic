import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([])
  useEffect(() => {
    getAllEmployees();
  }, [])

  const getAllEmployees = async () => {
    let res = await EmployeeService.getAllEmployees();
    console.log(res.data)
    setEmployees(res.data);
  }
  const handleDeleteEmployee = async (id) => {
    await EmployeeService.deleteEmployee(id);
    getAllEmployees();
    toast.success("Delete successfully!")
  }
  return (
    <>
      <div className="container">
        <h2 className="text-center"> List Employees</h2>
        <Link to="/add-employee" className="btn btn-info _add">Add Employee</Link>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(employee =>
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  <td>{employee.name}</td>
                  <td>{employee.email}</td>
                  <td>{employee.address}</td>
                  <td>
                    <button className="btn btn-info _button">Read</button>
                    <Link to={`/${employee.id}`} className="btn btn-success _button">Update</Link>
                    <button className="btn btn-danger _button" onClick={() => handleDeleteEmployee(employee.id)}>Delete</button>
                  </td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ListEmployeeComponent;