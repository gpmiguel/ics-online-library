import React, { Component } from "react"; 
import '../../css/main.css';
import { Link } from "react-router-dom";
import MainBG from '../../img/main-bg.png';

class Body extends Component {

	state = {
		search_item : ""
	}

	search = (data) => {
		// console.log("SEARCH FOR", data);
	}

	handleChange = (e)=>{
		this.setState({ [e.target.name]: e.target.value })
	}

    render() {
        return (
        <div>
			<main style={{
				backgroundImage: `url(${MainBG})`,
				height: '550px'}}>
				<div className = "input-group col-md-10 main-search">

					<input type="search" className="form-control rounded" placeholder="Search" aria-label="Search"  name = "search_item" aria-describedby="search-addon" onChange={e => this.handleChange(e)} onKeyDown={(e) => {
						if(e.key === 'Enter'){
							this.search(this.state.search_item)
							console.log("enter")
							window.location.href =`/search-results/${this.state.search_item}` ;
						}
						}}
						to={`/search-results/${this.state.search_item}`}
						/>
					<Link type="button" className="btn btn-primary btn-md col-md-2" onClick={this.search(this.state.search_item)} to={`/search-results/${this.state.search_item}`} >search</Link>
				</div>
			</main>
        </div>
        );
    }
}

export default Body;