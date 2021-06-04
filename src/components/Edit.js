
import React, {Component} from 'react';
import {Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap";
import {AvForm, AvField} from "availity-reactstrap-validation";
import axios from "axios";
import {ClipLoader} from "react-spinners";

import {ToastContainer, toast} from "react-toastify";

class Employee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
            employees: [],
            deleteOpen: false,
            selectedId: "",
            selectedItem: {},
            isLoading: true,
            saveLoading: false,
            saveLoader: false
        }
    }

    componentDidMount() {
        axios.get("https://nimadir.herokuapp.com/api/employee")
            .then((res2) => {
                console.log(res2);
                this.setState({
                    employees: res2.data.object,
                    isLoading: false
                    // employeesForFilter: res2.data.object
                })
            })
    }

    render() {

        const changeModal = () => {
            this.setState({
                open: !this.state.open
            })
        }

        const changeDeleteModal = (id) => {
            this.setState({
                deleteOpen: !this.state.deleteOpen,
                selectedId : id
            })
        }

        const saveEmployee = (event, errors, values) => {
            this.setState({
                saveLoading: true
            })
            if (this.state.selectedItem.id){
                axios.put("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedItem.id, values)
                    .then((res) => {
                        getEmployees();
                        changeModal();
                        toast.success(res.data.message);
                        this.setState({
                            selectedItem: {}
                        })
                    })
            } else {
                axios.post("https://nimadir.herokuapp.com/api/employee", values)
                    .then((res) => {
                        getEmployees();
                        changeModal();
                        toast.success(res.data.message);

                    })
                    .catch((error) => {
                        toast.error("Xatolik!");
                    })
                    .finally(() => {
                        this.setState({
                            saveLoading: false
                        })
                    })
            }

        }

        const deleteEmployee = () => {
            // for (let i = 0; i < 2000; i++) {
            //     axios.delete("https://nimadir.herokuapp.com/api/employee/" + this.state.employees[i].id)
                axios.delete("https://nimadir.herokuapp.com/api/employee/" + this.state.selectedId)
                    .then((res) => {
                        getEmployees();
                        changeDeleteModal();
                        toast.error(res.data.message);
                    })
            // }
        }

        const getEmployees = () => {
            axios.get("https://nimadir.herokuapp.com/api/employee")
                .then((res2) => {
                    console.log(res2);
                    this.setState({
                        employees: res2.data.object
                    })
                })
        }

        const editModal = (item) => {
            this.setState({
                selectedItem: item,
                
            })


            changeModal();
        }

        return (
            <div className="container">

                {this.state.isLoading ?
                    <div className="loader">
                        <ClipLoader color="red" loading={this.state.isLoading}/>
                    </div>  : ""
                }

                <div className="row">
                    <div className="col-12">
                        {/*<input type="text" onChange={search} className="mt-5"/>*/}
                        <button type="button" className="btn btn-dark btn-block my-5 ml-auto d-block"
                                onClick={changeModal}>Add
                        </button>
                    </div>

                    {this.state.employees.map((item, index) => {
                        return (
                            <div className="col-4 mt-3">
                                <div className="card">
                                    <div className="card-header">
                                        <h5>{item.firstName} {item.lastName}</h5>
                                    </div>
                                    <div className="card-body">
                                        <p>Position: <b>{item.position}</b></p>
                                        <p>Age: <b>{item.age}</b></p>
                                        <p>Salary: <b>{item.salary}$</b></p>
                                    </div>
                                    <div className="card-footer d-flex justify-content-between">
                                        <button type="button" className="btn btn-warning" onClick={() => editModal(item)}>Edit</button>
                                        <button type="button" className="btn btn-danger" onClick={() => changeDeleteModal(item.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <Modal isOpen={this.state.open} toggle={changeModal}>
                    <ModalHeader toggle={changeModal}>
                        Add employee
                    </ModalHeader>
                    <AvForm onSubmit={saveEmployee} model={this.state.selectedItem}>
                        <ModalBody>
                            <AvField type="text" name="firstName" label="Employee name"/>

                            <AvField type="text" name="lastName" label="Employee surname"/>

                            <AvField type="number" name="age" label="Employee age"/>

                            <AvField type="number" name="salary" label="Employee salary"/>

                            <AvField type="select" name="position" label="Employee position">
                                <option value="Security">Security</option>
                                <option value="Driver">Driver</option>
                                <option value="Director">Director</option>
                                <option value="Programmer">Programmer</option>
                            </AvField>

                        </ModalBody>
                        <ModalFooter>
                            <button type="submit" className="btn btn-success" disabled={this.state.saveLoading} onClick={this.state.saveLoader}>Save</button>
                            <button type="button" className="btn btn-secondary" onClick={changeModal}>Cancel</button>
                        </ModalFooter>
                    </AvForm>
                </Modal>

                <Modal isOpen={this.state.deleteOpen} toggle={changeDeleteModal}>
                    <ModalBody>
                        <h4>Rostdan ham o'chirmoqchimisiz?</h4>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn btn-danger" onClick={deleteEmployee}>Ha</button>
                        <button type="button" className="btn btn-secondary" onClick={changeDeleteModal}>Yo'q</button>
                    </ModalFooter>
                </Modal>

                <ToastContainer autoClose={1500}/>
            </div>
        );
    }
}

export default Employee;