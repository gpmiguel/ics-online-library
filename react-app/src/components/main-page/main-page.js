import React, { Component } from "react"; 
import axios from 'axios';
import '../../css/main.css';

//COMPONENTS
import Nav from './nav';
import Body from './body';
import Footer from './footer';

class MainPage extends Component {
  state = {
    resource_array : [],
  }

  componentDidMount(){
    console.log("MAIN PAGE LANDED\n");
    // axios.get('http://localhost:3000/resources')
    //   .then (res => {
    //     this.setState({
    //       resource_array : {res}
    //     })
    //   })
  }

  render() {
    return (
     <div>
       <Nav resources={this.state.resource_array}/>
       <Body />
       <Footer />
     </div>
    );
  }
}

export default MainPage;