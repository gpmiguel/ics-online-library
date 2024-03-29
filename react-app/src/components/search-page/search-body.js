import React, { useEffect } from 'react';
import '../../css/main.css';
import JSONDATA from './MOCK_DATA.json';
import {useState, useRef} from 'react';

const SearchPageBody = () => {
    useEffect(() => {
        document.title = 'Search Page';
    });

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
			<div className="row">
			  <div className="col-2" id="sort-filter-bar">
				<span className="side-search-title"> Sort By:  </span>
				<ul className="left-bar-container">
					<li><button className = "left-bar" name="title" onClick={(e) =>{
						setSort(e.target.name);
						// localeCompare ensures that sorting ignores case, unintended symbols, etc.
						// for now sorts by first_name; on actual data, use a.{sort} b.{sort}
						setData(JSONDATA.sort((a, b) => a.first_name.localeCompare(b.first_name)))
					}} href="search.html">Title</button> </li>

					<li><button className = "left-bar" name="author" onClick={(e) =>{
						setSort(e.target.name);
						// localeCompare ensures that sorting ignores case, unintended symbols, etc.
						// for now sorts by last_name; on actual data, use a.{sort} b.{sort}
						setData(JSONDATA.sort((a, b) => a.last_name.localeCompare(b.last_name)))
					}} href="#">Author</button></li>
					<li><button className = "left-bar" name="date" onClick={(e) =>{
						setSort(e.target.name);
						// localeCompare ensures that sorting ignores case, unintended symbols, etc.
						// for now sorts by ip_address; on actual data, use a.{sort} b.{sort}
						setData(JSONDATA.sort((a, b) => a.ip_address.localeCompare(b.ip_address)))
					}} href="#">Date Published</button></li>
				</ul>

				<span className="side-search-title"> Filter By:  </span>
				<ul className="left-bar-container">
					<li><button className = "left-bar" name="title" onClick={(e) =>{
						setFilter(e.target.name);
					}} href="search.html">Title</button> </li>

					<li><button className = "left-bar" name="author" onClick={(e) =>{
						setFilter(e.target.name)
					}} href="#">Author</button></li>

					<li><button className = "left-bar" name="date" onClick={(e) =>{
						setFilter(e.target.name)
					}} href="#">Date Published</button></li>

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
					<form ref={searchForm}>
						<input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" name={'searchTerm'} />
					</form> 
					<button type="button" class="btn btn-primary btn-md col-md-2" onClick={handleClickEvent}>search</button>
					{data.filter((val)=>{
					if(term==""){
						return val;
					}
					/*only checks the first_name of the mock data as of now*/
					else if(val.first_name.toLowerCase().includes(term.toLowerCase())){
						return val;
					}
					{/*displays the first name and last name of the mock data as of now*/}
					}).map((val, key)=>{
						return <div><p>{val.first_name} {val.last_name}</p></div>
					})};
				</div>
			  </div>
			</div>
		</div>
    );
};

export default SearchPageBody;