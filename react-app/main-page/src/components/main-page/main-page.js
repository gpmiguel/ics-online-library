import React, { Component } from "react"; 
import '../../css/main.css';

//COMPONENTS
import Nav from './nav';
import Body from './body';
import Footer from './footer';

const MainPage = () => {
    return (
     <div>
       <Nav/>
       <Body />
       <Footer />
     </div>
    );
}

export default MainPage;