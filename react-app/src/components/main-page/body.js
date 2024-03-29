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
					<div className="dropdown">
						<h2 className="btn btn-secondary dropdown-toggle filter" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-expanded="false" href="http://localhost:3000/"> Filter </h2>
						<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
							<li><a className="dropdown-item" href="https://www.google.com/">Keyword</a></li>
							<li><a className="dropdown-item" href="https://www.google.com/">Title</a></li>
							<li><a className="dropdown-item" href="https://www.google.com/">Author</a></li>
							<li><a className="dropdown-item" href="https://www.google.com/">Subject</a></li>
						</ul>
					</div>
					<input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" onChange={this.handleChange}/>
					<button type="button" className="btn btn-primary btn-md col-md-2" onClick={this.search(this.state.search_item)}>search</button>
				</div>
			</main>
        </div>
        );
    }
}

export default Body;