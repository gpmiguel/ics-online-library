import React, { Component } from "react"; 
import GoogleLogin from 'react-google-login'
import icsLogo from '../../img/ics-logo.png';
import '../../css/main.css';

import {Redirect} from 'react-router-dom';

class Navigation extends Component {

    responseGoogle=(res)=>{
        console.log(res);
        console.log(res.profileObj);
    }

    redirectSearch = () => {
        return  <Redirect to="/search" />
    };

    render() {
    return (
    <div>
        <nav className = "navbar navbar-expand-lg container-fluid">
            <div>
                <a className = "navbar-brand" href= "http://localhost:3000/">
                    <img src={icsLogo} alt="ICS Logo"/>
                    <ul className="col-sm-7">
                        <li><h2>UPLB Institute of Computer Science</h2></li>
                        <li><h3>ONLINE LIBRARY</h3></li>
                    </ul>
                </a>
            </div>
            <div className="navbar-nav container-fluid">
                <a className = " nav-item nav-link active nav-buttons ml-auto col-auto" href="./search">Search</a> 
                <a className = " nav-item nav-link active nav-buttons col-auto" href="http://localhost:3000/">Admin</a>
                <GoogleLogin 
                    clientId="1025177859568-efs0a0c5t8vrrur2a8bbe5t1vd6n5a4l.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    uxMode='popup'
                    className = " nav-item nav-link active nav-buttons col-auto"
                />        
            </div>
	    </nav>
    </div>
    );
    }
}

export default Navigation;