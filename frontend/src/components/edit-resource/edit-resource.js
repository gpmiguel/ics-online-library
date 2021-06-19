import React, { Component } from "react"; 
import { Link, withRouter } from "react-router-dom";
import '../../css/main.css';

//COMPONENTS
import Nav from '../main-page/nav';
import Footer from '../main-page/footer';
import EditBody from './body'

class AddBook extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <EditBody/>
                <Footer/>
            </div>
        );
    }
}

export default AddBook;