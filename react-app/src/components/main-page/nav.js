import React, { Component } from "react"; 
import GoogleLogin from 'react-google-login';
import { Link, withRouter } from "react-router-dom";
import '../../css/main.css';

import ics_logo from "../../img/ics-logo.png";

const guest = {
    name:"Anonymous Panda",
}

class Navigation extends Component {

    state = {
        current_user : {guest},
        resources : this.props.resources
    }

    responseGoogle=(res)=>{
        console.log(res);
        console.log(res.profileObj);
        this.setState({current_user : res.profileObj})
        console.log("NAV", this.state)
    }

    componentDidMount() {
        console.log("Initial State of NAV", this.state)
    }

    render() {
    return (
    <div>
        <nav className = "navbar navbar-expand-lg container-fluid">
            <div>
                <a className = "navbar-brand" href= "http://localhost:3000/">
                    <img src={ics_logo} alt="ICS Logo"/>
                    <ul className="col-sm-7">
                        <li><h2>UPLB Institute of Computer Science</h2></li>
                        <li><h3>ONLINE LIBRARY</h3></li>
                    </ul>
                </a>
            </div>
            <div className="navbar-nav container-fluid">
                 <Link className = " nav-item nav-link active nav-buttons ml-auto col-auto" to="/search-results">Search</Link> 
                <Link className = " nav-item nav-link active nav-buttons col-auto" to="/admin-dashboard">Admin</Link>
                <GoogleLogin 
                    clientId="1025177859568-efs0a0c5t8vrrur2a8bbe5t1vd6n5a4l.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    uxMode='popup'
                />        
            </div>
        </nav>
    </div>
    );
    }
}

export default Navigation;