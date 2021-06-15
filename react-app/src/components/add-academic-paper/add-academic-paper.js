import React, { Component, useState} from "react"; 
import { Link, withRouter } from "react-router-dom";
import axios from 'axios';
import '../../css/main.css';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

//COMPONENTS
import Nav from '../main-page/nav';
import Footer from '../main-page/footer';
import AdminSidebar from '../adminsidebar/adminsidebar.js';
import TagsInput from '../tagsinput/tagsinput';

var temp = 999;

class AddAcademicPaper extends Component{

    /*constructor for this class */
    constructor(props){
        super(props);

        this.state = {
            _id: temp,
            title: '',
            author:[],
            subject:[],
            year: 0,
            pagecount: 0,
            resourcetype: '',
            degreetype: '',
            institution: '',
            adviser:[],
            keyword:'',
            manuscript: '',
            abstract: '',
            journal: '',
            poster: '',
            sourcecode: '',
            displayimage: '',
        }

        /*bind to avoid errors */
        this.onValueChange = this.onValueChange.bind(this);
        this.onSave = this.onSave.bind(this);

    }

    /* method in accepting inputs in input fields*/
    onValueChange(e){
        this.setState({
            [e.target.dataset.name]: e.target.value
        })
    }

    /* method on save button */
    onSave(e){
        e.preventDefault(); 

        const acad_paper = {
            _id: this.state._id,
            title: this.state.title,      
            author: this.state.author,
            subject: this.state.subject,
            year: this.state.year,
            pagecount: this.state.pagecount,
            resourcetype: this.state.resourcetype,
            degreetype: this.state.degreetype,
            institution: this.state.institution,
            adviser: this.state.adviser,
            keyword: this.state.keyword,
            manuscript: this.state.manuscript,
            abstract: this.state.abstract,
            journal: this.state.journal,
            poster: this.state.poster,
            sourcecode: this.state.sourcecode,
            displayimage: this.state.displayimage,       
        }

        this.setState({
            _id: String(parseInt(this.state._id) + 1), 
        })  
        
        temp += 1;

        console.log(this.state);

        axios.post('http://localhost:3001/resource_acad_paper/add-academic-paper', acad_paper)
            .then(res => console.log(res.data));
  
        alert('Academic Paper Added!')
            
        // window.location = '/add-academic-paper';
    }

    render(){
        return(
             <div>
                <Nav/>
                <div className ="container-fluid">
                    <Link to="/admin-dashboard"><button type="button" className ="btn btn-primary my-2">Back</button></Link>
                    
                    <div className ="row mx-5">
                        <div className ="col-lg-2">
                            <AdminSidebar/>
                        </div>
                    
                        {/* acad paper fields */}
                        
                        <div className="col-lg-10" >
                        <form onSubmit={this.onSave}>
                            <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Add Academic Paper</p>
                            
                            <label for="academicPaperTitleFormInput" className="form-label">Title</label>
                            <input type="text" className="form-control" id="academicPaperTitleFormInput" data-name="title" required onChange={this.onValueChange}/>

                            <label className="form-label mt-3">Author</label>
                            <ReactTagInput tags={this.state.author} onChange={(newTags) => this.setState({ author: newTags })}/>
                            
                            <label className="form-label mt-3">Subject</label>
                            <ReactTagInput tags={this.state.subject} onChange={(newTags) => this.setState({ subject: newTags })}/>

                            <label for="yearpublishedFormInput" className="form-label mt-3">Year Published</label>
                            <input type="number" className="form-control" id="yearpublishedFormInput" data-name="year" /*required*/ onChange={this.onValueChange}/>
                            
                            <label for="pagecountFormInput" className="form-label mt-3">Page Count</label>
                            <input type="number" className="form-control" id="pagecountFormInput" data-name="pagecount" /*required*/ onChange={this.onValueChange}/>
                            
                            <label for="papertypeFormInput" className="form-label mt-3">Paper Type</label>
                            <input type="text" className="form-control" id="papertypeFormInput" data-name="resourcetype" /*required*/ onChange={this.onValueChange}/>

                            <label for="degreetypeFormInput" className="form-label mt-3">Degree Type</label>
                            <input type="text" className="form-control" id="degreetypeFormInput" data-name="degreetype" /*required*/ onChange={this.onValueChange}/>

                            <label for="institutionFormInput" className="form-label mt-3">Institution</label>
                            <input type="text" className="form-control" id="institutionFormInput" data-name="institution" /*required*/ onChange={this.onValueChange}/>
                            
                            <label className="form-label mt-3">Adviser</label>
                            <ReactTagInput tags={this.state.adviser} onChange={(newTags) => this.setState({ adviser: newTags })}/>

                            <label for="academicPaperAbstract" className="form-label mt-3">Abstract</label>
                            <textarea className="form-control" id="academicPaperAbstract" rows="6" data-name="abstract" /*required*/ onChange={this.onValueChange}></textarea>

                            {/* file uploads */}
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

                            <button type="submit" className ="btn btn-primary mb-5">Save</button>
                            </form>
                        </div>
                        
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default AddAcademicPaper;
