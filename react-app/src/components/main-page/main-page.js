import React, { Component } from "react"; 
import '../../css/main.css';

//COMPONENTS
import Nav from './nav';
import Body from './body';
import Footer from './footer';

class MainPage extends Component {
  render() {
    return (
     <div>
       <Nav/>
       <Body />
       <Footer />
     </div>
    );
  }
}

export default MainPage;