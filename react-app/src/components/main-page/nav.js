import React, { Component } from "react"; 
import { Link, withRouter } from "react-router-dom";
import {Navbar} from "react-bootstrap"; //Modal is the pop up screen
import GoogleLogin from 'react-google-login'
import '../../css/main.css';

import ICSLogo from '../../img/ics-logo.png';

const guest = {
    name:"Anonymous Panda",
}

class Navigation extends Component {

    state = {
        current_user : {guest},
        resources : this.props.resources,
        loggedin: false,
        isAdmin: false
    }

    responseGoogle=(res)=>{
        // console.log(res);
        // console.log(res.profileObj);
        this.setState({
            current_user: res.profileObj,
            resources: this.state.resources,
            loggedin: true,
            isAdmin: this.state.isAdmin

        })
        console.log(this.state)

        if (res.profileObj.email === this.props.admins){
            this.setState({
            current_user: res.profileObj,
            resources: this.state.resources,
            loggedin: true,
            isAdmin: true
            })
        }

        console.log(this.state)
    }

    render() {
    return (
    <div>
        <nav className = "navbar navbar-expand-lg container-fluid">
                <div >
                    <Link className = "navbar-brand" to= "/">
                        <img src={ICSLogo} alt="ICS Logo"/>
                        <a className="collapse navbar-collapse">
                        {/*
                        <ul>
                        <li><h2>UPLB Institute of Computer Science</h2></li>
                        <li><h3>ONLINE LIBRARY</h3></li>
                        </ul>
                        */}
                        <h2> &nbsp; ICS StackUP Lib</h2>
                        </a>
                    </Link>
                </div>
                <button className="navbar-toggler toggler-example navbar-dark" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarSupportedContent1" aria-haspopup="true" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarContent">
                    <div className="navbar-nav ml-auto">
                        <Link className = " nav-item nav-link active nav-buttons" to="/search-results">Search</Link> 
                        <Link className = " nav-item nav-link active nav-buttons " to="/admin-dashboard">Admin</Link>                        
                        {/* {this.state.isAdmin && <Link className = " nav-item nav-link active nav-buttons " to="/admin-dashboard">Admin</Link>} */}
                        <GoogleLogin 
                            className = "nav-buttons btn-primary"
                            clientId="1025177859568-efs0a0c5t8vrrur2a8bbe5t1vd6n5a4l.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            uxMode='popup'
                        />        
                    </div>
                </div>
	    </nav>
    </div>
    );
    }
}

export default Navigation;