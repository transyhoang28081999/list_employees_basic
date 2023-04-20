import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import { toast } from 'react-toastify'

const AddEmployeeComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const { id } = useParams();
    const navigate = useNavigate();

    const saveOrUpdateEmployee = async (e) => {
        e.preventDefault();

        const employee = { name, email, address }
        if (id === "add-employee") await EmployeeService.createEmployee(employee);
        else await EmployeeService.updateEmployee(id, employee);

        toast.success("Successfully!")
        navigate("/")
    }
    useEffect(() => {
        getEmployeeById();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const getEmployeeById = async () => {
        let res = await EmployeeService.getSingleEmployee(id);
        setName(res.data.name)
        setEmail(res.data.email)
        setAddress(res.data.address)
    }
    return (
        <>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {id === "add-employee"
                            ?
                            <h2 className="text-center"> Add Employee</h2>
                            :
                            <h2 className="text-center"> Update Employee</h2>
                        }

                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Name: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter name"
                                        className='form-control'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Email: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter email"
                                        className='form-control'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label"> Address: </label>
                                    <input
                                        type="text"
                                        placeholder="Enter address"
                                        className='form-control'
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)} />
                                </div>
                                <button className='btn btn-success' onClick={(e) => saveOrUpdateEmployee(e)}>Submit</button>
                                <Link to="/" className='btn btn-warning _button'>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddEmployeeComponent;