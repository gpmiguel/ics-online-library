import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom"; 
import '../../css/main.css';

class AdminMainPageBody extends Component{
    render(){
        return(
           <div className = "container-fluid">
            <div className = "row"> 
                <div className = "col-sm-1"></div>
                <h1 className = "col-sm-10 head-text"> Administrator</h1>
                <div className = "col-sm-1"></div>
            </div>
            <div className = "row"><p></p></div>
            <div className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-3 center">
                    <h4 className = "subhead-text">Manage Resources</h4><br/>
                    <Link to="/add-book"><button type="button" className="btn btn-primary btn-md admin-btn">Add Book</button> </Link>
                    <Link to ="/add-academic-paper"><button type="button" className="btn btn-primary btn-md admin-btn">Add Academic paper</button></Link>
                </div>
                <div className = "col-md-3 center">
                    <h4 className = "subhead-text">Manage Faculty and Staff</h4><br/>
                    <Link to ="/add-faculty-and-staff"> <button type="button" className="btn btn-primary btn-md admin-btn">Add Faculty and Staff</button> </Link>
                    <Link to ="/edit-faculty-and-staff"> <button type="button" className="btn btn-primary btn-md admin-btn" >Edit Faculty and Staff</button></Link>
                </div>
                <div className = "col-md-3 center">
                    <h4 className = "subhead-text">Generate Reports</h4><br/> {/*Links for viewing purposes only- may remove when generate reports will be used*/}
                    <button type="button" className="btn btn-primary btn-md admin-btn" onClick="">Summary report</button> 
                    <button type="button" className="btn btn-primary btn-md admin-btn" onClick="">Activity report</button>
                </div> 
                <div className = "col-md-1"></div>
            </div>
        </div>
        );
    }
}

export default AdminMainPageBody;