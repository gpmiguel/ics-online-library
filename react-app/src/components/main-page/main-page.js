import React, { Component } from "react"; 
import axios from 'axios';
import '../../css/main.css';

//COMPONENTS
import Nav from './nav';
import Body from './body';
import Footer from './footer';

const admintemp = "jdmacam@up.edu.ph"

class MainPage extends Component {
  state = {
    resource_array : [],
    user_list: []
  }

  async componentDidMount(){
    console.log("MAIN PAGE LANDED\n");

    await axios.get("http://localhost:3001/resource-acad-paper/")
	  .then(res => {
    this.setState({
      resource_array: res.data
    })
    })
	
    // await axios.get("http://localhost:3001/resource-book/")
	  // .then(res => this.setState({
    //   resource_array: this.state.resource_array + res.data 
    // }))


    await axios.get("http://localhost:3001/user/")
	  .then(res => {
        console.log(res.data);
        
        this.setState({
          user_list: res.data
        })

    }) 


    console.log("MAIN PAGE DATA",this.state);
  }

  render() {
    return (
     <div>
       <Nav resources={this.state.resource_array} admins={admintemp}/>
       <Body />
       <Footer />
     </div>
    );
  }
}

export default MainPage;