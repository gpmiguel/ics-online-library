import React, { Component } from "react"; 
import { Link, withRouter } from "react-router-dom";
import '../../css/main.css';

//COMPONENTS
import Nav from '../main-page/nav';
import Footer from '../main-page/footer';
import AdminSidebar from '../adminsidebar/adminsidebar.js';
import TagsInput from '../tagsinput/tagsinput';

class AddFacultyAndStaff extends Component{
 
    /*constructor for this class */
    constructor(props){
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: ''
        }

        /*bind to avoid errors */
        this.onValueChange = this.onValueChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    /*Note: only accepts input on basic input fields */

    /* method in accepting inputs in input fields*/
    onValueChange(e){
        this.setState({
            [e.target.dataset.name]: e.target.value
        })
    }

    /* method on save button */
    onSave(e){
        e.preventDefault(); 
        console.log(this.state);

        const faculty_and_staff = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email
            // usertype: (to be added)
        }

        axios.post('http://localhost:3001/user/add-user', faculty_and_staff)    // todo: fix user "/" and "/add-user" routes first
            .then(res => console.log(res.data));

        alert('Faculty/Staff Added!')
    }

    render(){
        return(
             <div>
                <Nav/>
                <div className ="container-fluid">
                    <Link to="/admin-dashboard"><button type="button" className ="btn btn-primary my-2">Back</button></Link>
                    
                    <div className ="row mx-5">
                        <div className ="col-lg-2">
                            <AdminSidebar/>
                        </div>

                        {/*fields*/}
                        <div className="col-lg-10" >
                        <form onSubmit={this.onSave}>
                            <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Add Faculty And Staff</p>
                            
                            <label for="firstNameFormInput" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="firstNameFormInput" data-name="firstname" required onChange={this.onValueChange}/>

                            <label for="lastNameFormInput" className="form-label mt-3">Last Name</label>
                            <input type="text" className="form-control" id="lastNameFormInput" data-name="lastname" required onChange={this.onValueChange}/>

                            <label for="emailFormInput" className="form-label mt-3">Email</label>
                            <input type="email" className="form-control mb-3" id="emailFormInput" data-name="email" required onChange={this.onValueChange}/>

                            <button type="submit" className ="btn btn-primary mt-2">Add</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
                <div style={{marginTop:"15%"}}>
                    <Footer/>
                </div>
                
            </div>
        );
    }
}

export default AddFacultyAndStaff;