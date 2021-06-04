import React, {Component} from 'react';
import {Modal, ModalBody, ModalFooter, ModalHeader, Table} from "reactstrap";
import axios from "axios";
import {AvField, AvForm} from 'availity-reactstrap-validation';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Test extends Component {
    state = {
        testlar: [],
        open: false,
        delModal: false,
        selectedId: ''
    }

    componentDidMount() {
        this.getTest();
    }


    getTest() {
        console.log("keldi")
        axios.get('https://60a359a57c6e8b0017e26bb4.mockapi.io/kom/test').then(
            nimadr => {
                console.log(nimadr)
                this.setState({
                    testlar: nimadr.data
                })
            }
        )
    }

    render() {
        const modOpen = () => {
            this.setState(
                {
                    open: !this.state.open
                }
            )
        }
        const delModal = () => {
            this.setState(
                {
                    delModal: !this.state.delModal
                }
            )
        }
        const change = (id) => {
            console.log(id)
            this.setState(
                {
                    selectedId: id
                }
            )
            delModal()
        }
        const saveTest = (event, errors, values) => {
            console.log(values.videocard);
            axios.post("https://60a359a57c6e8b0017e26bb4.mockapi.io/kom/test", {
                nomi: values.ketmon,
                rusumi: values.model,
                videocarta: values.videocard
            }).then(
            )
        }
        const deleteTest = (event, errors, values) => {
            axios.delete("https://60a359a57c6e8b0017e26bb4.mockapi.io/kom/test/" +
                this.state.selectedId).then(
                toast.error("O'chdi")
            )
            this.setState({
                delModal: !this.state.delModal
            })
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-3 offset-9">
                            <button className="btn btn-success" onClick={modOpen}>+ Add Test</button>
                        </div>
                    </div>
                    <Table striped>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Nomi</th>
                            <th>Rusumi</th>
                            <th>VideoKarta</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.testlar.map((value, index) => {
                                return <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{value.nomi}</td>
                                    <td>{value.rusumi}</td>
                                    <td>{value.videocarta}</td>
                                    <td>
                                        <button className="btn btn-warning mx-2">Edit</button>
                                        <button className="btn btn-danger mx-2"
                                                onClick={() => change(value.id)}>Delete
                                        </button>
                                    </td>
                                </tr>
                            })
                        }
                        </tbody>
                    </Table>
                    <Modal isOpen={this.state.open} toggle={modOpen}>
                        <ModalHeader toggle={modOpen}>
                            <h3>Malumot kiriting</h3>
                        </ModalHeader>
                        <AvForm onSubmit={saveTest}>
                            <ModalBody>
                                <AvField type="text" name="ketmon" label="Kompyuter Nomi"/>
                                <AvField type="text" name="model" label="Kompyuter Rusumi"/>
                                <AvField type="number" name="videocard" label="Video karta"/>
                            </ModalBody>
                            <ModalFooter>
                                <button type='submit' className="btn btn-success" onClick={modOpen}>Save</button>
                                <button type='button' className="btn btn-danger" onClick={modOpen}>Cancel</button>
                            </ModalFooter>
                        </AvForm>

                    </Modal>

                    <Modal isOpen={this.state.delModal} toggle={delModal}>
                        <ModalHeader toggle={delModal}>
                            O'chrishni tasdiqlayszmi?
                        </ModalHeader>
                        <ModalFooter>
                            <button type='submit' className="btn btn-success" onClick={deleteTest}>Xa</button>
                            <button type='button' className="btn btn-danger" onClick={delModal}>Yo'q</button>
                        </ModalFooter>

                    </Modal>
                    <ToastContainer autoClose={1000}/>
                </div>
            </div>
        );
    }
}

export default Test;