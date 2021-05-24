import React, { Component } from "react"; 
import { Link, withRouter } from "react-router-dom";
import '../../css/main.css';

//COMPONENTS
import AdminSidebar from '../adminsidebar/adminsidebar.js';
import TagsInput from '../tagsinput/tagsinput';

class EditBody extends Component{
    render(){
        //placeholder for resource type to be gathered from the database
        let x = 1;

        const renderEdit = () => {
            if (x == 1) {
                return (
                <div><p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Edit Book</p>
              
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
    
                 </div>                              
                );
            } else {
              return (
                <div>  
                <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Edit Academic Paper</p>

                <label for="academicPaperTitleFormInput" className="form-label">Title</label>
                <input type="text" className="form-control" id="academicPaperTitleFormInput"/>

                <label className="form-label mt-3">Author</label>
                <TagsInput/>

                <label className="form-label mt-3">Subject</label>
                <TagsInput/>

                <label for="yearpublishedFormInput" className="form-label mt-3">Year Published</label>
                <input type="text" className="form-control" id="yearpublishedFormInput"/>
                
                <label for="pagecountFormInput" className="form-label mt-3">Page Count</label>
                <input type="text" className="form-control" id="pagecountFormInput"/>
                
                <label for="papertypeFormInput" className="form-label mt-3">Paper Type</label>
                <input type="text" className="form-control" id="papertypeFormInput"/>

                <label for="degreetypeFormInput" className="form-label mt-3">Degree Type</label>
                <input type="text" className="form-control" id="degreetypeFormInput"/>

                <label for="institutionFormInput" className="form-label mt-3">Institution</label>
                <input type="text" className="form-control" id="institutionFormInput"/>
                
                <label className="form-label mt-3">Adviser</label>
                <TagsInput/>

                <label for="academicPaperAbstract" className="form-label mt-3">Abstract</label>
                <textarea className="form-control" id="academicPaperAbstract" rows="6"></textarea>

                <div className="row mt-3">
                    <div className="col-3">
                        <label for="pdfFormFile" className="form-label">PDF</label>
                        <input className="form-control" type="file" id="pdfFormFile"/>
                    </div>

                    <div className="col-3">
                        <label for="manuscriptFormFile" className="form-label">Manuscript</label>
                        <input className="form-control" type="file" id="manuscriptFormFile"/>
                    </div>

                    <div className="col-3">
                        <label for="posterFormFile" className="form-label">Poster</label>
                        <input className="form-control" type="file" id="posterFormFile"/>
                    </div>

                    <div className="col-3">
                        <label for="sourcecodeFormFile" className="form-label">Source Code</label>
                        <input className="form-control" type="file" id="sourcecodeFormFile"/>
                    </div>
                </div>

                <div className="row mt-3 mb-5">
                    <div className="col-3">
                        <label for="resourceImageFormFile" className="form-label">Resource Display Image</label>
                        <input className="form-control" type="file" id="resourceImageFormFile"/>
                    </div>
                </div>

                </div>
              );
            }
        }

        return(
            <div className ="container-fluid">
                    <Link to="/admin-dashboard"><button type="button" className ="btn btn-primary my-2 back-button">Back</button></Link>
                    
                    <div className ="row mx-5">
                        <div className ="col-2">
                            <AdminSidebar/>
                        </div>
                    
                        {/* render fields */}
                        <div className="col-10">
                            {renderEdit()}
                            <div className ="">
                                <button type="button" className ="btn btn-primary btn-block save-button">Save</button>
                                <button type="button" className ="btn btn-secondary mb-5 btn-block delete-button">Delete</button>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default EditBody;


