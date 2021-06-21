import React from "react"; 
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../css/main.css';
import {useState} from 'react';

//COMPONENTS
import Nav from '../main-page/nav';
import Footer from '../main-page/footer';
import AdminSidebar from '../adminsidebar/adminsidebar.js';
import TagsInput from '../tagsinput/tagsinput';

const AddBook = () =>{
    const [bookData, setBookData] = useState({
        title: "",
        author:[],
        subject: [],
        year: "",
        pagecount:"",
        resourcetype:"",
        publisher:"",
        edition:"",
        isbn:[],
        introduction:"",
        maincopy: "",
        displayimage: "",
    });

    const onChange = (e) => {
        setBookData({...bookData, [e.target.name]:e.target.value});
    }

    const onFileChange = (e) => {
        console.log(e.target.files[0]);
        setBookData({...bookData, [e.target.name]:e.target.files[0]});
    }

    const saveBook = (e) => {
        // to make it not submit the data to a page by default
        e.preventDefault();

        //currently prints the object only to the console
        console.log(bookData);

        const book = {
            title: bookData.title,
            author:bookData.author,
            subject: bookData.subject,
            year: bookData.yearPublished,
            pagecount:bookData.pagecount,
            resourcetype:bookData.resourcetype,
            publisher:bookData.publisher,
            edition:bookData.edition,
            isbn:bookData.isbn,
            introduction:bookData.introduction,
            maincopy:bookData.maincopy,
            displayimage:bookData.displayimage,    
        }

        axios.post('http://localhost:3001/add-book', book)
            .then(res => console.log(res.data));

        alert('Book Added!')

        //clear the form
        setBookData({
            title: "",
            author:[],
            subject: [],
            year: "",
            pagecount:"",
            resourcetype:"",
            publisher:"",
            edition:"",
            isbn:[],
            introduction:"",
            maincopy: {},
            displayimage: {},
        });
    }

        return(
            <div>
                <Nav/>
                <div className ="container-fluid">
                    <Link to="/admin-dashboard"><button type="button" className ="btn btn-primary my-2">Back</button></Link>
                    
                    <div className ="row mx-5">
                        <div className ="col-lg-2">
                            <AdminSidebar/>
                        </div>
                    
                        {/* book fields */}
                        <div className="col-lg-10">
                        <form onSubmit={saveBook}>
                                <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Add Book</p>
                                
                                <label for="bookTitleFormInput" className="form-label">Title</label>
                                <input type="text" value={bookData.title} required name="title" onChange={onChange} className="form-control" id="bookTitleFormInput"/>
                                
                                <label className="form-label mt-3">Author</label>
                                <ReactTagInput tags={bookData.author} required name="author" onChange={(newTags) => setBookData({...bookData, author : newTags })} />
                               
                                <label className="form-label mt-3">Subject</label>
                                <ReactTagInput tags={bookData.subject} required name="subject" onChange={(newTags) => setBookData({...bookData, subject: newTags })} />                              

                                <label for="yearpublishedFormInput" className="form-label mt-3">Year Published</label>
                                <input type="text" value={bookData.year} required name="year" onChange={onChange} className="form-control" id="yearpublishedFormInput"/>
                                
                                <label for="pagecountFormInput" className="form-label mt-3">Page Count</label>
                                <input type="text" value={bookData.pagecount} required name="pagecount" onChange={onChange} className="form-control" id="pagecountFormInput"/>

                                <label for="publisherFormInput" className="form-label mt-3">Publisher</label>
                                <input type="text" value={bookData.publisher} required name="publisher" onChange={onChange} className="form-control" id="publisherFormInput"/>

                                <label for="editionFormInput" className="form-label mt-3">Edition</label>
                                <input type="text" value={bookData.edition} required name="edition" onChange={onChange} className="form-control" id="editionFormInput"/>

                                <label for="isbnFormInput" className="form-label mt-3">ISBN</label>
                                <input type="text" value={bookData.isbn} required name="isbn" onChange={onChange} className="form-control" id="isbnFormInput"/>

                                <label for="introductionFormInput" className="form-label mt-3">Introduction</label>
                                <textarea value={bookData.introduction} required name="introduction" onChange={onChange} className="form-control" id="introductionFormInput" rows="6"></textarea>                               

                                {/* file uploads */}
                                <div className="row mt-3">
                                    <div className="col-3">
                                        <label for="maincopyFormFile" className="form-label">Main Copy</label>
                                        <input defaultValue={bookData.maincopy} required name="maincopy" onChange={onFileChange} className="form-control" type="file" id="maincopy"/>
                                    </div>
                                </div>

                                <div className="row mt-3 mb-5">
                                    <div className="col-3">
                                        <label for="resourceImageFormFile" className="form-label">Resource Display Image</label>
                                        <input defaultValue={bookData.displayimage} required name="displayimage" onChange={onFileChange} className="form-control" type="file" id="resourceImageFormFile"/>
                                    </div>
                                </div>
                                {/*<h1>{JSON.stringify(bookData)}</h1>*/}
                                <input type="submit" value="Save" className ="btn btn-primary mb-5" />
                        </form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    
}

export default AddBook;