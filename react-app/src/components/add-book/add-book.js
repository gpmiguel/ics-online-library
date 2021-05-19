import React, { Component } from "react"; 
import { Link, withRouter } from "react-router-dom";
import '../../css/main.css';

//COMPONENTS
import Nav from '../main-page/nav';
import Footer from '../main-page/footer';
import AdminSidebar from '../adminsidebar/adminsidebar.js';
import TagsInput from '../tagsinput/tagsinput';

class AddBook extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <div className ="container-fluid">
                    <Link to="/admin-dashboard"><button type="button" className ="btn btn-primary my-2">Back</button></Link>
                    
                    <div className ="row mx-5">
                        <div className ="col-2">
                            <AdminSidebar/>
                        </div>
                    
                        {/* book fields */}
                        <div className="col-10">
                            <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Add Book</p>
                            
                            <label for="bookTitleFormInput" className="form-label">Title</label>
                            <input type="text" className="form-control" id="bookTitleFormInput"/>

                            <label className="form-label mt-3">Author</label>
                            <TagsInput/>

                            <label className="form-label mt-3">Subject</label>
                            <TagsInput/>

                            <label for="yearpublishedFormInput" className="form-label mt-3">Year Published</label>
                            <input type="text" className="form-control" id="yearpublishedFormInput"/>
                            
                            <label for="pagecountFormInput" className="form-label mt-3">Page Count</label>
                            <input type="text" className="form-control" id="pagecountFormInput"/>

                            <label for="publisherFormInput" className="form-label mt-3">Publisher</label>
                            <input type="text" className="form-control" id="publisherFormInput"/>

                            <label for="editionFormInput" className="form-label mt-3">Edition</label>
                            <input type="text" className="form-control" id="editionFormInput"/>

                            <label for="isbnFormInput" className="form-label mt-3">ISBN</label>
                            <input type="text" className="form-control" id="isbnFormInput"/>

                            <label for="introductionFormInput" className="form-label mt-3">Introduction</label>
                            <textarea className="form-control" id="introductionFormInput" rows="6"></textarea>                               

                            {/* file uploads */}
                            <div className="row mt-3">
                                <div className="col-3">
                                    <label for="maincopyFormFile" className="form-label">Main Copy</label>
                                    <input className="form-control" type="file" id="maincopy"/>
                                </div>
                            </div>

                            <div className="row mt-3 mb-5">
                                <div className="col-3">
                                    <label for="resourceImageFormFile" className="form-label">Resource Display Image</label>
                                    <input className="form-control" type="file" id="resourceImageFormFile"/>
                                </div>
                            </div>

                            <button type="button" className ="btn btn-primary mb-5">Save</button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AddBook;