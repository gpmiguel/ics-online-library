import React, { Component } from "react"; 
import '../../css/main.css';
import bg from '../../img/main-bg.png';
// import {ButtonDropdown} from 'reactstrap';

class Body extends Component {

	state = {
		search_item : ""
	}

	search = (data) => {
		console.log("SEARCH FOR", data);
	}

	handleChange = (data)=>{
		this.setState({search_item: data})
	}

    render() {
        return (
        <div>
			<main style={{
				backgroundImage: `url(${bg})`,
				height: 600}}>
				<div className = "input-group col-md-10 main-search">
					<div className="dropdown">
						<h2 className="btn btn-secondary dropdown-toggle filter" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" href="http://localhost:3000/"> Filter</h2>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li><a className="dropdown-item" href="https://www.google.com/">Keyword</a></li>
							<li><a className="dropdown-item" href="https://www.google.com/">Title</a></li>
							<li><a className="dropdown-item" href="https://www.google.com/">Author</a></li>
							<li><a className="dropdown-item" href="https://www.google.com/">Subject</a></li>
						</ul>
					</div>
					<input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={(data) => this.handleChange(data)}/>
					<button type="button" className="btn btn-primary btn-md col-md-2" onClick={this.search(this.state.search_item)}>search</button>
				</div>
			</main>
        </div>
        );
    }
}

export default Body;