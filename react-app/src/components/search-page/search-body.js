import React, { useEffect } from 'react';
import '../../css/main.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import {useState, useRef} from 'react';
import { useParams } from 'react-router-dom';

const SearchPageBody = () => {

    {/*by using the 'setTerm' fxn, 'term' will be assigned the string in the search bar, obtained through 'searchForm'*/}
	const {searched} = useParams();
	const [term, setTerm] = useState("");
	const searchForm = useRef(null);
	const [filter, setFilter] = useState("");
	const [sort, setSort] = useState("");
	const [data, setData] = useState([]);


    useEffect(async () => {
        // document.title = 'Search Page';
        var temp;
		setTerm(searched);

		await axios.get('http://localhost:3001/books')
				.then(res => {
					temp = res.data;
				})
			.catch(err => console.error(err));
		await axios.get('http://localhost:3001/acad-papers')
				.then(res => {
					Array.prototype.push.apply(temp, res.data);
					console.log(data);
					
				})
			.catch(err => console.error(err));
			
			
			console.log("DATRA", temp);
			setData(temp);
			setTerm(searched);
    }, []);
	

	{/*when the 'search button' is clicked, the string in the search bar (searchTerm) will be assigned to 'term'*/}
    const handleClickEvent = (e) => {
		const form = searchForm.current;
		setTerm(`${form['searchTerm'].value}`)
	};

	const handleKeyPressEvent = (e) => {
    	if(e.charCode === 13){
    		e.preventDefault();
			const form = searchForm.current;
			setTerm(`${form['searchTerm'].value}`);
    	}		
	}

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
						setData(data.sort((a, b) => a.title.localeCompare(b.title)))
					}} href="search.html">Title</button> </li>


					<li><button className = "left-bar" name="author" onClick={(e) =>{
						setSort(e.target.name);
						// localeCompare ensures that sorting ignores case, unintended symbols, etc.
						// for now sorts by author; on actual data, use a.{sort} b.{sort}
						setData(data.sort((a, b) =>
 						 a.author[0].localeCompare(b.author[0])				

						))
					}} href="#">Author</button></li>


					<li><button className = "left-bar" name="year" onClick={(e) =>{
						setSort(e.target.name);
						// localeCompare ensures that sorting ignores case, unintended symbols, etc.
						// for now sorts by date; on actual data, use a.{sort} b.{sort}
						setData(data.sort((a, b) => (a.year > b.year) ? 1 : -1));
					}} href="#">Year</button></li>
				</ul>
				
				{/* NON FUNCTIONAL */}
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

			  </div>

			  <div className="col-10" id="search-div">
					<div className="input-group col-md-12 search-page-search">
						<div className="dropdown">
							<a className="btn btn-secondary dropdown-toggle filter" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"> Category </a>
							<ul className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuLink">
								<li><a className="dropdown-item" href="#">Academic Paper</a></li>
								<li><a className="dropdown-item" href="#">Book</a></li>
							</ul>
						</div>
						<form name="resultForm" ref={searchForm} onKeyPress={handleKeyPressEvent}>
							<input type="search" class="form-control rounded" placeholder={term} aria-label="Search" aria-describedby="search-addon" name={'searchTerm'} />
						</form>
						<button type="button" class="btn btn-primary btn-md col-md-2" onClick={handleClickEvent}>search</button>
						<div className="col-10">
							{data.filter((val) => {
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
										<p><Link style={{ fontSize: 30, color: 'blue' }} to={{
											pathname : val.resourcetype === "Book" ? `/book/${val}` : `/academic-paper/${val}`,
											state: {
												val : val
											}

										}}>{val.title}</Link>
											<div>
												<p>
													Authors: {typeof val.author === 'undefined' ? "None" : val.author.map(author => `${author} `)}
													<br></br>Year Published: {typeof val.year === 'undefined' ? "None" : val.year}
													<br></br>Resource Type: {val.resourcetype} 
													<br></br>Subject: {typeof val.subject === 'undefined' ? "None" : val.subject.map(subs => `${subs} `)}

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