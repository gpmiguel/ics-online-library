import React, { Component } from "react";
import '../../css/main.css';

//COMPONENTS
import Nav from './nav';
import Body from './body';
import Footer from './footer';

class MainPage extends Component {
  state = {
    resource_array: [],
  }

  componentDidMount() {
    console.log("MAIN PAGE LANDED\n");
    fetch("/").then(res => {
      if (res.ok) {
        this.setState({
          resource_array: res
        })
      }
    });
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <Nav resources={this.state.resource_array} />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default MainPage;