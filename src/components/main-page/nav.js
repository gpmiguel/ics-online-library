import React, { Component } from "react"; 
import { Link, withRouter } from "react-router-dom";
import {Navbar} from "react-bootstrap"; //Modal is the pop up screen
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import axios from 'axios';

import '../../css/main.css';

import ICSLogo from '../../img/ics-logo.png';

const guest = {
    name:"Anonymous Panda",
}

class Navigation extends Component {
    state = {
        current_user : '',
        resources : this.props.resources,
        loggedin: false,
        isAdmin: false
    }

    responseGoogle = async (res_google)=>{

        await axios
          .get(`http://localhost:3001/auth/${res_google.profileObj.email}`
          )
          .then(res =>{
            /*eslint no-unused-expressions: ["error", {"allowShortCircuit": true,  "allowTernary": true }]*/
            if (res == null) this.newGuest();
            else this.setState({
                current_user: res.data.email,
                resources: this.state.resources,
                loggedin: true,
                isAdmin: (res.data.usertype == "Admin")
    
            })
            
            console.log('LOG',this.state)
          })
          .catch(err => console.log(err));


        console.log('LOG 2', this.state)
    }

    
    logout = async () => {
        this.setState({
            current_user: '',
            resources: this.state.resources,
            loggedin: false,
            isAdmin: false

        })

        console.log("EXIT");
    }

    newGuest = async () =>{
        const guest = {
            activityid: []
        }


        await axios.post('http://localhost:3001/add-guest', guest).then(res => {

            console.log(res);

            this.setState({
                current_user: "Guest",
                resources: this.state.resources,
                loggedin: false,
                isAdmin: false
    
            })
        })
        console.log('LOG 3', this.state)
    }

    render() {
    return (
    <div>
        <nav className = "navbar navbar-expand-lg container-fluid">
                <div >
                    <Link className = "navbar-brand" to= "/">
                        <img src={ICSLogo} alt="ICS Logo"/>
                        <a className="collapse navbar-collapse">
                        <ul>
                        <li><h2>UPLB Institute of Computer Science</h2></li>
                        <li><h3>ONLINE LIBRARY</h3></li>
                        </ul>
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
                        {this.state.isAdmin && <Link className = " nav-item nav-link active nav-buttons " to="/admin-dashboard">Admin</Link>}
                        {
                        this.state.loggedin ? 
                          <GoogleLogout
                            buttonText="Logout" 
                            onLogoutSuccess={this.logout}
                
                        /> : <GoogleLogin 
                            className = "nav-buttons"
                            clientId="1025177859568-efs0a0c5t8vrrur2a8bbe5t1vd6n5a4l.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            uxMode='popup'
                            isSignedIn = {true}
                        />

                        }
                    </div>
                </div>
	    </nav>
    </div>
    );
    }
}

export default Navigation;