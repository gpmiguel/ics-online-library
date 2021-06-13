import React, { useEffect } from 'react';
import '../../css/main.css';
import axios from 'axios';
import JSONDATA from './MOCK_DATA2.json';
import {useState, useRef} from 'react';

const SearchPageBody = () => {
    useEffect(() => {
        document.title = 'Search Page';
    });
	

	// const acad_paper_arr = axios
	//   .get("http://localhost:3001/resource-acad-paper/")
	//   .then(res => console.log("GET PAPER "))
	//   .catch(err => console.error(err));

    {/*by using the 'setTerm' fxn, 'term' will be assigned the string in the search bar, obtained through 'searchForm'*/}
	const [term, setTerm] = useState("");
	const searchForm = useRef(null);
	const [filter, setFilter] = useState("");
	const [sort, setSort] = useState("");
	const [data, setData] = useState(JSONDATA);

	{/*when the 'search button' is clicked, the string in the search bar (searchTerm) will be assigned to 'term'*/}
    const handleClickEvent = () => {
		const form = searchForm.current;
		setTerm(`${form['searchTerm'].value}`)
	};

    return (
        <div className="container">
			<div className="row search-row">
			  <div className="col-2" id="sort-filter-bar">
				<span className="side-search-title"> Sort By:  </span>
				<ul className="left-bar-container">
					<li><button className = "left-bar" name="title" onClick={(e) =>{
						setSort(e.target.name);
						// localeCompare ensures that sorting ignores case, unintended symbols, etc.
						// for now sorts by title; on actual data, use a.{sort} b.{sort}
						setData(JSONDATA.sort((a, b) => a.title.localeCompare(b.title)))
					}} href="search.html">Title</button> </li>

					<li><button className = "left-bar" name="author" onClick={(e) =>{
						setSort(e.target.name);
						// localeCompare ensures that sorting ignores case, unintended symbols, etc.
						// for now sorts by author; on actual data, use a.{sort} b.{sort}
						setData(JSONDATA.sort((a, b) => a.author.localeCompare(b.author)))
					}} href="#">Author</button></li>
					<li><button className = "left-bar" name="date" onClick={(e) =>{
						setSort(e.target.name);
						// localeCompare ensures that sorting ignores case, unintended symbols, etc.
						// for now sorts by date; on actual data, use a.{sort} b.{sort}
						setData(JSONDATA.sort((a, b) => a.date.localeCompare(b.date)))
					}} href="#">Date Published</button></li>
				</ul>

				<span className="side-search-title"> Filter By: </span>
				<div className="dropdown">
					<a className="btn btn-secondary dropdown-toggle filter filter-arrange" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true"> Title </a>
					<ul className="dropdown-menu dropdown-menu-2 scrollable-menu" aria-labelledby="dropdownMenuLink">
						<li><a className="dropdown-item" href="#">A</a></li>
						<li><a className="dropdown-item" href="#">B</a></li>
						<li><a className="dropdown-item" href="#">C</a></li>
						<li><a className="dropdown-item" href="#">D</a></li>
						<li><a className="dropdown-item" href="#">E</a></li>
						<li><a className="dropdown-item" href="#">F</a></li>
						<li><a className="dropdown-item" href="#">G</a></li>
						<li><a className="dropdown-item" href="#">H</a></li>
						<li><a className="dropdown-item" href="#">I</a></li>
						<li><a className="dropdown-item" href="#">J</a></li>
						<li><a className="dropdown-item" href="#">K</a></li>
						<li><a className="dropdown-item" href="#">L</a></li>
						<li><a className="dropdown-item" href="#">M</a></li>
						<li><a className="dropdown-item" href="#">N</a></li>
						<li><a className="dropdown-item" href="#">O</a></li>
						<li><a className="dropdown-item" href="#">P</a></li>
						<li><a className="dropdown-item" href="#">Q</a></li>
						<li><a className="dropdown-item" href="#">R</a></li>
						<li><a className="dropdown-item" href="#">S</a></li>
						<li><a className="dropdown-item" href="#">T</a></li>
						<li><a className="dropdown-item" href="#">U</a></li>
						<li><a className="dropdown-item" href="#">V</a></li>
						<li><a className="dropdown-item" href="#">W</a></li>
						<li><a className="dropdown-item" href="#">X</a></li>
						<li><a className="dropdown-item" href="#">Y</a></li>
						<li><a className="dropdown-item" href="#">Z</a></li>
					</ul>
					<a className="btn btn-secondary dropdown-toggle filter filter-arrange" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true"> Year </a>
					<ul className="dropdown-menu dropdown-menu-2 scrollable-menu" aria-labelledby="dropdownMenuLink">
						<li><a className="dropdown-item" href="#">2021</a></li>
						<li><a className="dropdown-item" href="#">2020</a></li>
						<li><a className="dropdown-item" href="#">2019</a></li>
						<li><a className="dropdown-item" href="#">2018</a></li>
						<li><a className="dropdown-item" href="#">2017</a></li>
						<li><a className="dropdown-item" href="#">2016</a></li>
						<li><a className="dropdown-item" href="#">2015</a></li>
						<li><a className="dropdown-item" href="#">2014</a></li>
						<li><a className="dropdown-item" href="#">2013</a></li>
						<li><a className="dropdown-item" href="#">2012</a></li>
						<li><a className="dropdown-item" href="#">2011</a></li>
						<li><a className="dropdown-item" href="#">2010</a></li>
						<li><a className="dropdown-item" href="#">2009</a></li>
						<li><a className="dropdown-item" href="#">2008</a></li>
						<li><a className="dropdown-item" href="#">2007</a></li>
						<li><a className="dropdown-item" href="#">2006</a></li>
						<li><a className="dropdown-item" href="#">2005</a></li>
						<li><a className="dropdown-item" href="#">2004</a></li>
						<li><a className="dropdown-item" href="#">2003</a></li>
						<li><a className="dropdown-item" href="#">2002</a></li>
						<li><a className="dropdown-item" href="#">2001</a></li>
						<li><a className="dropdown-item" href="#">2000</a></li>
					</ul>
				</div>

				{/* former filter buttons */}
				
				{/* <ul className="left-bar-container">
					<li><button className = "left-bar" name="title" onClick={(e) =>{
						setFilter(e.target.name);
					}} href="search.html">Title</button> </li>
					<li><button className = "left-bar" name="author" onClick={(e) =>{
						setFilter(e.target.name)
					}} href="#">Author</button></li>
					<li><button className = "left-bar" name="date" onClick={(e) =>{
						setFilter(e.target.name)
					}} href="#">Date Published</button></li>
				</ul> */}

			  </div>

			  <div className="col-10" id="search-div">
					<div className="input-group col-md-12 search-page-search">
						<div className="dropdown">
							<a className="btn btn-secondary dropdown-toggle filter" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> Filter </a>
							<ul className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuLink">
								<li><a className="dropdown-item" href="#">Academic Paper</a></li>
								<li><a className="dropdown-item" href="#">Book</a></li>
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