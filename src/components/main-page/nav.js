import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import {Navbar} from "react-bootstrap"; //Modal is the pop up screen
import {GoogleLogin, GoogleLogout} from 'react-google-login';
import axios from 'axios';

import '../../css/main.css';

import ICSLogo from '../../img/ics-logo.png';

const activity_types = ["Mangement", "Registry", "Acess"]

class Navigation extends Component {
    state = {
        current_user : this.props.user,
        ids: "",
        resources : this.props.resources,
        loggedin: false,
        isAdmin: false,
        iconUrl: ""
    }

    responseGoogle = async (res_google)=>{

        console.log(res_google.profileObj);

        var log;
        const upmail = res_google.profileObj.email.includes("@up.edu.ph")
        console.log(upmail);


        await axios
        .get(`http://localhost:3001/auth/${res_google.profileObj.email}`
        )
        .then(res =>{ 
            upmail ?
            this.setState({
                current_user: res.data,
                ids: res.data._id,
                resources: this.state.resources,
                loggedin: true,
                isAdmin: (res.data.usertype == "Admin"),
                iconUrl: res_google.profileObj.imageUrl
    
            })
            :
            this.newGuest();
            
            log = {
                userid : this.state.ids,
                activitytype : activity_types[1],
                action: "Sign In"
    
            }

            console.log('LOG',this.state)
          })
          .catch(err => console.error(err))
        

        
        
        await axios.post('http://localhost:3001/add-activity-log', log).then(
            res => {
                console.log(res.data);
                


                console.log("USER", this.state.current_user.guest_id);
                if(this.state.current_user.usertype == null){
                    const {email, firstname, lastname, usertype, activityid} = this.state.current_user;
                    axios.put(`http://localhost:3001/edit-guest/${this.state.current_user.guest_id}`, {$push: {activityid: res.data.log_id}});

                }else{
                    const {email, firstname, lastname, usertype, activityid} = this.state.current_user;
                    axios.put(`http://localhost:3001/edit-user/${log.userid}`,{
                        email: email, 
                        firstname: firstname, 
                        lastname: lastname, 
                        usertype: usertype, 
                        activityid: activityid.push(res.data.log_id)
                    })
                }
                
            }
        )

        console.log('LOG 2', this.state)
    }

    
    logout = async () => {
        const log = {
            userid : this.state.current_user._id,
            activitytype : activity_types[1],
            action: "Sign Out"

        }

        await axios.post('http://localhost:3001/add-activity-log', log).then(
            res => {
                console.log(res.data);
                const {email, firstname, lastname, usertype, activityid} = this.state.current_user;

                (this.state.current_user.usertype === "Guest") ?

                axios.put(`http://localhost:3001/edit-guest/${this.state.current_user._id}`, {activityid: activityid.push(res.data.log_id)})
                :
                axios.put(`http://localhost:3001/edit-user/${log.userid}`,{
                    email: email, 
                    firstname: firstname, 
                    lastname: lastname, 
                    usertype: usertype, 
                    activityid: activityid.push(res.data.log_id)
                })
            }
        )

        this.setState({
            current_user: {},
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
                current_user: res.data,
                ids: res.data.guest_id,
                resources: this.state.resources,
                loggedin: true,
                isAdmin: false
    
            })
        })
        console.log('LOG GUEST', this.state)
    }

    render() {
    return (
    <div>
        <nav className = "navbar navbar-expand-lg container-fluid">
                <div >
                    <Link className = "navbar-brand" to= "/">
                        <img src={ICSLogo} alt="ICS Logo"/>
                        <span className="collapse navbar-collapse">
                            <h2> &nbsp; ICS StackUP LiB</h2>
                        </span>
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
                        <Link className = " nav-item nav-link active nav-buttons" to="/search-results/ ">Search</Link> 
                        {this.state.isAdmin && <Link className = " nav-item nav-link active nav-buttons " to="/admin-dashboard">Admin</Link>}
                        {
                        this.state.loggedin ? 
                          <GoogleLogout
                            className = "nav-buttons btn-primary"
                            buttonText= {"Logout "} 
                            onLogoutSuccess={this.logout}
                
                        /> : <GoogleLogin 
                            className = "nav-buttons btn-primary"
                            clientId="216757647969-jhse00j4vl0s019v1urb2l5bvuul01ne.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            uxMode='popup'
                            // isSignedIn = {true}
                        />
                        }
                        {this.state.loggedin && <img src={this.state.iconUrl} className="rounded-circle img-fluid" alt="userIcon"/>}
                    </div>
                </div>
	    </nav>
    </div>
    );
    }
}

export default Navigation;
