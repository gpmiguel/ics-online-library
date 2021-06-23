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


    //sets the  preview value of the name
    const [first_name_val, setfirst_name_val] = useState('');
    const [last_name_val, setlast_name_val] = useState('');
    const [email_val, setemail_val] = useState('');
    const [usertype_val, setusertype_val] = useState('');
    const [data, setData] = useState([]);
    const [id, setId] = useState('');

    useEffect(async () => {
        await axios.get('http://localhost:3001/users')
            .then(res => {
                console.log("GET User");
                console.log(res.data);
                setData(res.data.filter(e => (e.usertype === "Faculty" || e.usertype === "Staff") ));
                
            })
            .catch(err => console.error(err));

    }, []);

    const deleteUser = async (id)=> {
        await axios.get(`http://localhost:3001/delete-user/${id}`)
          .then(res =>{
              console.log(res)
          })
          .catch(err => console.error(err));

          setData(data.filter(e => e._id !== id)); 
    }

    const openEdit=(idx)=>{//passes the id edit row clicked
        const e = data.find(e => e._id === idx);
        setId(e._id)
        //gets the value of the json data from the id 
        setfirst_name_val(e.firstname);
        setlast_name_val(e.lastname);
        setemail_val(e.email);
        setusertype_val(e.usertype);
        setIsOpenModal(true);
    };

    const closeEdit=()=>{ //closes the pop up
        setIsOpenModal(false);
    };

    const editSave = async (idx) =>{
        const fname =  document.getElementById("first_name_edit").value
        const lname =  document.getElementById("last_name_edit").value
        const email =  document.getElementById("email_edit").value
        const usertype =  document.getElementById("usertype_edit").value

        const editUser = {
            lastname : lname,
            firstname : fname,
            email : email,
            usertype : usertype,

        }

        await axios.put(`http://localhost:3001/edit-user/${idx}`, editUser)

        setIsOpenModal(false);
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
                                            <td>{key + 1}</td>
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
                    <label for="first_name_edit" className="form-label" >First name</label>
                    <input type="text" className="form-control" require placeholder = {first_name_val} id="first_name_edit"/>
                    <label for="last_name_edit" className="form-label">Last name</label>
                    <input type="text" className="form-control" require placeholder = {last_name_val} id="last_name_edit"/>
                    <label for="email" className="form-label">Email</label>
                    <input type="email" className="form-control" require placeholder = {email_val} id="email_edit"/>
                    <label for="email" className="form-label">Type</label>
                    <input type="text" className="form-control" require placeholder = {usertype_val} id="usertype_edit"/>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={ () => {closeEdit();}}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={ () => {editSave(id);}}>Save changes</button>
                </Modal.Footer>
            </Modal>
            <Footer/>
            </div>
        );
    
}

export default EditFacultyAndStaff;