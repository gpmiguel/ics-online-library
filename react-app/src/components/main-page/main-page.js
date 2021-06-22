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
    user: null
  }

  async componentDidMount(){
    console.log("MAIN PAGE LANDED\n");

    await axios.get("http://localhost:3001/acad-papers")
	  .then(res => {
    this.setState({
      resource_array: res.data
    })

    })
	
    await axios.get("http://localhost:3001/books")
	  .then(res => this.setState({
      resource_array: this.state.resource_array.concat(res.data)  
    }))

    const guest = {
      activityid: []
    }
    
    await axios.post('http://localhost:3001/add-guest', guest).then(res => {

            this.setState({
                resource_array: this.state.resource_array,
                user: res.data
    
            })
        })
        console.log('LOG GUEST', this.state)

    console.log("MAIN PAGE DATA",this.state);
  }

  render() {
    return (
     <div>
       <Nav resources={this.state.resource_array} user={this.state.user}/>
       <Body user={this.state.user}/>
       <Footer />
     </div>
    );
  }
}

export default MainPage;