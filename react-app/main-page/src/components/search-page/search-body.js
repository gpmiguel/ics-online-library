import React, { useEffect } from 'react';
import '../../css/main.css';
import JSONDATA from './MOCK_DATA2.json';
import { useState, useRef } from 'react';

const SearchPageBody = () => {
	useEffect(() => {
		document.title = 'Search Page';
	});

	{/*by using the 'setTerm' fxn, 'term' will be assigned the string in the search bar, obtained through 'searchForm'*/ }
	const [term, setTerm] = useState("");
	const searchForm = useRef(null);

	{/*when the 'search button' is clicked, the string in the search bar (searchTerm) will be assigned to 'term'*/ }
	const handleClickEvent = () => {
		const form = searchForm.current;
		setTerm(`${form['searchTerm'].value}`)
	};

	return (
		<div className="container">
			<div className="row">
				<div className="col-2" id="sort-filter-bar">
					<span className="side-search-title"> Sort By:  </span>
					<ul className="left-bar-container">
						<li><button className="left-bar" href="search.html">Title</button> </li>
						<li><button className="left-bar" href="#">Author</button></li>
						<li><button className="left-bar" href="#">Date Published</button></li>
					</ul>
					<span className="side-search-title"> Filter By:  </span>
					<ul className="left-bar-container">
						<li><button className="left-bar" href="search.html">Title</button> </li>
						<li><button className="left-bar" href="#">Author</button></li>
						<li><button className="left-bar" href="#">Date Published</button></li>
					</ul>
				</div>

				<div className="col-10" id="search-div">
					<div className="input-group col-md-10 search-page-search">
						<div className="dropdown">
							<a className="btn btn-secondary dropdown-toggle filter" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> Filter </a>
							<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<li><a className="dropdown-item" href="#">Keyword</a></li>
								<li><a className="dropdown-item" href="#">Title</a></li>
								<li><a className="dropdown-item" href="#">Author</a></li>
								<li><a className="dropdown-item" href="#">Subject</a></li>
							</ul>
						</div>
						<form ref={searchForm}>
							<input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" name={'searchTerm'} />
						</form>
						<button type="button" class="btn btn-primary btn-md col-md-2" onClick={handleClickEvent}>search</button>
						<div className="col-10">
							{JSONDATA.filter((val) => {
								if (term == "") {
									return val;
								}
								/*only checks the first_name of the mock data as of now*/
								else if (val.title.toLowerCase().includes(term.toLowerCase())) {
									return val;
								}
								{/*displays the first name and last name of the mock data as of now*/ }
							}).map((val, key) => {
								return (
									<div>
										<br></br>
										<p><div style={{ fontSize: 30, color: 'blue' }} >{val.title}</div>
											<div>
												<p>
													Authors: {val.authors[0]}
													<br></br>Date Published: {val.publishedDate.$date}
													<br></br>Status: {val.status} | Subject: {val.categories}
												</p>
											</div>
										</p>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SearchPageBody;