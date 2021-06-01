import React, { Component } from "react"; 
import { Link, withRouter } from "react-router-dom"; 
import '../../css/main.css';

class AdminSidebar extends Component{
    render(){
        return(
            <div>
                <p className="subhead-text" style={{fontSize: "18px"}}>Manage Resources</p>
                <p><Link to ="/add-book"> <button type="button" className="btn btn-primary btn-block btn-md ">Add Book</button></Link></p>
                <p><Link to ="/add-academic-paper"><button type="button" className="btn btn-primary btn-block btn-md">Add Academic Paper</button></Link></p>

                <p className="subhead-text" style={{fontSize: "18px"}}>Manage Faculty and Staff</p>
                <Link to ="/add-academic-paper"><button type="button" className="btn btn-primary btn-md">Add Faculty and Staff</button></Link>
                <Link to ="/"><button type="button" className="btn btn-primary btn-md">Edit Faculty and Staff</button></Link>

                <p className="subhead-text" style={{fontSize: "18px"}}>Generate Reports</p>
                <button type="button" className="btn btn-primary btn-block btn-md">Summary Report</button>
                <button type="button" className="btn btn-primary btn-block btn-md">Activity Report</button>
            </div>
        );
    }
}

export default AdminSidebar;