import React, { Component } from "react"; 
import { Link } from "react-router-dom"; 
import '../../css/main.css';

class AdminSidebar extends Component{
    render(){
        return(
            <div className= "d-none d-lg-block" >
                <div className="row"><br/><br/></div>
                <div>
                <p className="subhead-text" style={{fontSize: "18px"}}>Manage Resources</p>
                <Link to ="/add-book" className="rem-link"> <button type="button" className="btn btn-primary btn-block btn-md side-btn">Add Book</button></Link>
                <Link to ="/add-academic-paper" className="rem-link"><button type="button" className="btn btn-primary btn-block btn-md side-btn">Add Academic Paper</button></Link>

                <p className="subhead-text" style={{fontSize: "18px"}}>Manage Faculty and Staff</p>
                <Link to ="/add-faculty-and-staff" className="rem-link"><button type="button" className="btn btn-primary btn-block btn-md side-btn">Add Faculty and Staff</button></Link>
                <Link to ="/edit-faculty-and-staff" className="rem-link"><button type="button" className="btn btn-primary btn-block btn-md side-btn">Edit Faculty and Staff</button></Link>

                <p className="subhead-text" style={{fontSize: "18px"}}>Generate Reports</p>
                <button type="button" className="btn btn-primary btn-block btn-md side-btn">Summary Report</button>
                <button type="button" className="btn btn-primary btn-block btn-md side-btn">Activity Report</button>
                </div>
            </div>
        );
    }
}

export default AdminSidebar;