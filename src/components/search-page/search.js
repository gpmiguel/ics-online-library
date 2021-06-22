import React, {Component} from 'react';
import Nav from '../main-page/nav';
import SearchPageBody from './search-body';
import Footer from '../main-page/footer';
import axios from 'axios';


class SearchPage extends Component {
    state = {
        resource_array : [],
      }

    async componentDidMount(){
        console.log("SEARCH PAGE LANDED\n");
    
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
        
        console.log("SEARCH PAGE DATA",this.state);
      }

    render(){
        return (
            <div>
                <Nav/>
                <SearchPageBody resources={this.state.resource_array}/>
                <Footer />
            </div>
        );
    }
};
export default SearchPage;