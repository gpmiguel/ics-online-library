import React, { Component } from "react"; 
import axios from 'axios';
import { Link, withRouter } from "react-router-dom";
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
        author:"",
        subject: "",
        yearPublished: "",
        pageCount:"",
        publisher:"",
        edition:"",
        isbn:"",
        introduction:"",
        mainCopy:"",
        resourceImage:"",
    });

    const onChange = (e) => {
        setBookData({...bookData, [e.target.name]:e.target.value});
    }

    const saveBook = (e) => {
        // to make it not submit the data to a page by default
        e.preventDefault();

        //checks if input fields are all filled up
        if(!bookData.title){
            alert('Please add a Title.');
            return;
        }

        //uncomment if author and subject fields' TagsInput issue is resolved

        if(!bookData.author){
            alert('Please add the Author.');
            return;
        }
        if(!bookData.subject){
            alert('Please add the Subject.');
            return;
        }
        if(!bookData.yearPublished){
            alert('Please add the Year Published.');
            return;
        }
        if(!bookData.pageCount){
            alert('Please add the Page Count.');
            return;
        }
        if(!bookData.publisher){
            alert('Please add the Publisher.');
            return;
        }
        if(!bookData.edition){
            alert('Please add the Edition.');
            return;
        }
        if(!bookData.isbn){
            alert('Please add a ISBN.');
            return;
        }
        if(!bookData.introduction){
            alert('Please add an introduction.');
            return;
        }
        if(!bookData.mainCopy){
            alert('Please add the main copy of the material.');
            return;
        }
        // resourceImage not checked since it's optional 

        //currently prints the object only to the console
        console.log(bookData);

        //clear the form
        setBookData({
        title: "",
        author:"",
        subject: "",
        yearPublished: "",
        pageCount:"",
        publisher:"",
        edition:"",
        isbn:"",
        introduction:"",
        mainCopy:"",
        resourceImage:"",
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
                                <input type="text" value={bookData.title} name="title" onChange={onChange} className="form-control" id="bookTitleFormInput"/>
                                {/* ask about why tagsinput */}
{/*                                <label className="form-label mt-3">Author</label>
                                <TagsInput/>
                                <label className="form-label mt-3">Subject</label>
                                <TagsInput/>*/}                                
                                <label className="form-label mt-3">Author</label>
                                <input type="text" value={bookData.author} name="author" onChange={onChange} className="form-control" id="bookAuthorFormInput"/>

                                <label className="form-label mt-3">Subject</label>
                                <input type="text" value={bookData.subject} name="subject" onChange={onChange} className="form-control" id="bookSubjectFormInput"/>

                                <label for="yearpublishedFormInput" className="form-label mt-3">Year Published</label>
                                <input type="text" value={bookData.yearPublished} name="yearPublished" onChange={onChange} className="form-control" id="yearpublishedFormInput"/>
                                
                                <label for="pagecountFormInput" className="form-label mt-3">Page Count</label>
                                <input type="text" value={bookData.pageCount} name="pageCount" onChange={onChange} className="form-control" id="pagecountFormInput"/>

                                <label for="publisherFormInput" className="form-label mt-3">Publisher</label>
                                <input type="text" value={bookData.publisher} name="publisher" onChange={onChange} className="form-control" id="publisherFormInput"/>

                                <label for="editionFormInput" className="form-label mt-3">Edition</label>
                                <input type="text" value={bookData.edition} name="edition" onChange={onChange} className="form-control" id="editionFormInput"/>

                                <label for="isbnFormInput" className="form-label mt-3">ISBN</label>
                                <input type="text" value={bookData.isbn} name="isbn" onChange={onChange} className="form-control" id="isbnFormInput"/>

                                <label for="introductionFormInput" className="form-label mt-3">Introduction</label>
                                <textarea value={bookData.introduction} name="introduction" onChange={onChange} className="form-control" id="introductionFormInput" rows="6"></textarea>                               

                                {/* file uploads */}
                                <div className="row mt-3">
                                    <div className="col-3">
                                        <label for="maincopyFormFile" className="form-label">Main Copy</label>
                                        <input value={bookData.mainCopy} name="mainCopy" onChange={onChange} className="form-control" type="file" id="maincopy"/>
                                    </div>
                                </div>

                                <div className="row mt-3 mb-5">
                                    <div className="col-3">
                                        <label for="resourceImageFormFile" className="form-label">Resource Display Image</label>
                                        <input value={bookData.resourceImage} name="resourceImage" onChange={onChange} className="form-control" type="file" id="resourceImageFormFile"/>
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