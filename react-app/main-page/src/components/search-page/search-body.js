import React, { useEffect } from 'react';
import '../../css/main.css';

const SearchPageBody = () => {
    useEffect(() => {
        document.title = 'Search Page';
    });

    return (
        <div className="container">
			<div className="row">
			  <div className="col-2" id="sort-filter-bar">
				<span className="side-search-title"> Sort By:  </span>
				<ul className="left-bar-container">
					<li><button className = "left-bar" href="search.html">Title</button> </li>
					<li><button className = "left-bar" href="#">Author</button></li>
					<li><button className = "left-bar" href="#">Date Published</button></li>
				</ul>
				<span className="side-search-title"> Filter By:  </span>
				<ul className="left-bar-container">
					<li><button className = "left-bar" href="search.html">Title</button> </li>
					<li><button className = "left-bar" href="#">Author</button></li>
					<li><button className = "left-bar" href="#">Date Published</button></li>
				</ul>
			  </div>

			  <div className="col-10" id="search-div">
				<div className = "input-group col-md-10 search-page-search">
					<div className="dropdown">
					  <a className="btn btn-secondary dropdown-toggle filter" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> Filter </a>
					  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
						<li><a className="dropdown-item" href="#">Keyword</a></li>
						<li><a className="dropdown-item" href="#">Title</a></li>
						<li><a className="dropdown-item" href="#">Author</a></li>
						<li><a className="dropdown-item" href="#">Subject</a></li>
					  </ul>
					</div>
					<input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
					<button type="button" className="btn btn-primary btn-md col-md-2">search</button>
				</div>
			  </div>
			</div>
		</div>
    );
};

export default SearchPageBody;