import React, { Component } from "react"; 
import '../../css/main.css';
import MainBG from '../../img/main-bg.png';

class Body extends Component {

	state = {
		search_item : ""
	}

	search = (data) => {
		console.log("SEARCH FOR", data);
	}

	handleChange = (data)=>{
		this.setState({search_item: this.state.search_item + data.nativeEvent.data})
	}

    render() {
        return (
        <div>
			<main style={{
				backgroundImage: `url(${MainBG})`,
				height: '550px'}}>
				<div className = "input-group col-md-10 main-search">
					<input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={this.handleChange}/>
					<button type="button" className="btn btn-primary btn-md col-md-2" onClick={this.search(this.state.search_item)}>search</button>
				</div>
			</main>
        </div>
        );
    }
}

export default Body;