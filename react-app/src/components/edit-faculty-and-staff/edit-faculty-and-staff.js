import React, { useEffect } from 'react';
import { useState } from "react"; 
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal"; //Modal is the pop up screen
import '../../css/main.css';
// import JSONDATA from './MOCK_DATA.json';
import axios from 'axios';


//COMPONENTS
import Nav from '../main-page/nav';
import Footer from '../main-page/footer';
import AdminSidebar from '../adminsidebar/adminsidebar.js';
import TagsInput from '../tagsinput/tagsinput';

const EditFacultyAndStaff = () =>{

    //toggles open or close of popup
    const [isOpenModal, setIsOpenModal] = useState(false);


    //sets the preview value of the user
    const [id_val, setid_val] = useState('');
    const [first_name_val, setfirst_name_val] = useState('');
    const [last_name_val, setlast_name_val] = useState('');
    const [email_val, setemail_val] = useState('');
    const [usertype_val, setusertype_val] = useState('');
    const [activityid_val, setactivityid_val] = useState('');


    const [data, setData] = useState([]);

    //holds the current value of the input fields
    const [facultyAndStaffData, setFacultyAndStaffData] = useState({
        lastname: "",
        firstname: "",
        email: "",
        usertype: "",
        activityid: [],
    });

    useEffect(() => {
        axios.get('http://localhost:3001/users/')
            .then(res => {
                console.log("GET Users");
                console.log(res.data);
                setData(res.data);
                
            })
            .catch(err => console.error(err));
    }, []);

    // deleteUser(id){
    //     axios.delete('http://localhost:3001/user/'+id)  //make the delete function in user routes
    //         .then(res => console.log(res.data));

    //     //make a new list of users without the deleted one
    //     setData(data.filter(e => e._id !== id)); 
    // }

    const deleteUser = (id) => {
        axios.get('http://localhost:3001/delete-user/'+id) 
            .then(res => console.log(res.data));

        //make a new list of users without the deleted one
        setData(data.filter(e => e._id !== id)); 
    }

    const onChange = (e) => {
        setFacultyAndStaffData({...facultyAndStaffData, [e.target.name]:e.target.value});
    };

    const openEdit=(idx)=>{//passes the id edit row clicked
        const e = data.find(e => e._id === idx);
        //gets the value of the json data from the id
        setid_val(e._id);
        setfirst_name_val(e.firstname);
        setlast_name_val(e.lastname);
        setemail_val(e.email);
        setusertype_val(e.usertype);
        setactivityid_val(e.activityid);
        setIsOpenModal(true);
    };

    const closeEdit=()=>{ //closes the pop up
        setIsOpenModal(false);
    };

    const editSave = (e) =>{
        e.preventDefault();

        const user = {
            _id: id_val,
            lastname: (facultyAndStaffData.lastname === "") ? last_name_val : facultyAndStaffData.lastname,
            firstname: (facultyAndStaffData.firstname === "") ? first_name_val : facultyAndStaffData.firstname,
            email: (facultyAndStaffData.email === "") ? email_val : facultyAndStaffData.email,
            usertype: usertype_val,
            activityid: activityid_val,
        }

        console.log(user);
        axios.put('http://localhost:3001/edit-user/'+id_val, user)
            .then(res => console.log(res.data));
    }

        return(
            <div>
                <Nav/>
                <div className ="container-fluid">
                    <Link to="/admin-dashboard"><button type="button" className ="btn btn-primary my-2">Back</button></Link>
                    
                    <div className ="row mx-5">
                        <div className ="col-lg-2">
                            <AdminSidebar/>
                        </div>
                        <div className="col-lg-10">
                            <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Edit Faculty and Staff</p>
                            
                            <div className="table-responsive">
                                <table className="table table-striped table-hover table-condensed text-center">
                                  <thead className= "thead-dark">
                                    <tr>
                                      <th> #</th>
                                      <th>Last name</th>
                                      <th> First name</th>
                                      <th>Email</th>
                                      <th>Action
                                        {/*<button id="addNewRow" className="btn btn-primary btn-sm">Add New Row</button>*/}
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                   {/*Generate rows by what is written on the json file*/}
                                    {data.map((val, key)=>{
                                        return( 
                                            <tr key={val._id}>
                                            <td>1</td>
                                            <td>{val.lastname}</td>
                                            <td>{val.firstname}</td>
                                            <td>{val.email}</td>
                                            <td><button className="btn btn-primary btn-sm" onClick={ () => {openEdit(val._id);}}>Edit</button>
                                            <button className="btn btn-secondary btn-sm" onClick={ () => {deleteUser(val._id);}}>Del</button>
                                            </td>
                                            </tr>);
                                    })
                                    }
                                  </tbody>
                                </table>
                        </div>
                    </div>
                </div>
            </div>
            {/* edit pop up will show when a button is clicked*/}
            <Modal show={isOpenModal}>
                <Modal.Header>
                    <h5 className="modal-title" id="exampleModalLongTitle">Edit Faculty and Staff Member</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={ () => {closeEdit();}}>
                    <span aria-hidden="true">&times;</span>
                    </button>
                </Modal.Header>
                <Modal.Body>
                    <label for="first_name_edit" className="form-label">First name</label>
                    <input type="text" className="form-control" require placeholder = {first_name_val} name="firstname" onChange={onChange} id="first_name_edit"/>
                    <label for="last_name_edit" className="form-label">Last name</label>
                    <input type="text" className="form-control" require placeholder = {last_name_val} ame="lastname" onChange={onChange} id="last_name_edit"/>
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" require placeholder = {email_val} name="email" onChange={onChange} id="email_edit"/>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={ () => {closeEdit();}}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={editSave}>Save changes</button>
                </Modal.Footer>
            </Modal>
            <Footer/>
            </div>
        );
    
}

export default EditFacultyAndStaff;