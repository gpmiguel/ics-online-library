import React, { Component} from "react"; 
import { Link } from "react-router-dom";
import axios from 'axios';
import '../../css/main.css';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";

//COMPONENTS
import Nav from '../main-page/nav';
import Footer from '../main-page/footer';
import AdminSidebar from '../adminsidebar/adminsidebar.js';
import TagsInput from '../tagsinput/tagsinput';



class AddAcademicPaper extends Component{

    /*constructor for this class */
    constructor(props){
        super(props);

        this.state = {
            title: '',
            author:[],
            subject:[],
            year: 0,
            pagecount: 0,
            resourcetype: '',
            degreetype: '',
            institution: '',
            adviser:[],
            keyword:[],
            abstract: '',
            journal: '',
            sourcecode: '',
        
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
    async onSave(e){
        e.preventDefault(); 

        var manus_data = new FormData()
        var poster_data = new FormData()
        var display_data = new FormData()


        const manus_file = document.getElementById('manuscriptFormFile').files[0]
        const poster_file = document.getElementById('posterFormFile').files[0]
        const display_file = document.getElementById('resourceImageFormFile').files[0]

        manus_data.append('manus', manus_file);
        poster_data.append('poster', poster_file);
        display_data.append('display', display_file);

        var files = [];

        await axios.post('http://localhost:3001/manus', manus_data)
        .then(res => {
            files.push(res.data.file.filename)
            console.log('manus ADDED', res.data.file.filename)
        });

        await axios.post('http://localhost:3001/poster', poster_data)
        .then(res => {
            files.push(res.data.file.filename)
            console.log('poster ADDED', res.data.file.filename)
        });

        await axios.post('http://localhost:3001/display', display_data)
        .then(res => {
            files.push(res.data.file.filename)
            console.log('display ADDED', res.data.file.filename)
        });


        const acad_paper = {
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
            manuscript: files[0],
            abstract: this.state.abstract,
            journal: this.state.journal,
            poster: files[1],
            sourcecode: this.state.sourcecode,
            displayimage: files[2],       
        }

    
        console.log(acad_paper);

        acad_paper.adviser.map(async (value) => {

            const data = {adviser: value}

            await axios.get(`http://localhost:3001/adviser/${value}`) ? 

            await axios.post('http://localhost:3001/add-adviser',data)
            .then(res => console.log("ADVISER ADDED")) :

            console.log("ALREADY EXISTING - NO NEW SAVE")
        })

        acad_paper.author.map(async (value) => {

            const data = {author: value}

            await axios.get(`http://localhost:3001/author/${value.toUpperCase()}`) ? 

            await axios.post('http://localhost:3001/add-author', data)
            .then(res => console.log("AUTHOR ADDED")) :

            console.log("ALREADY EXISTING - NO NEW SAVE")
        })

        acad_paper.subject.map(async (value) => {

            const data = {subject: value}

            await axios.get(`http://localhost:3001/subject/${value.toUpperCase()}`) ? 

            await axios.post('http://localhost:3001/add-subject', data)
            .then(res => console.log("SUBJECT ADDED")):

            console.log("ALREADY EXISTING - NO NEW SAVE")
        })

        acad_paper.keyword.map(async (value) => {

            const data = {keyword: value}

            await axios.get(`http://localhost:3001/keyword/${value.toUpperCase()}`) ? 

            await axios.post('http://localhost:3001/add-keyword', data)
            .then(res => console.log("KEYWORD ADDED")):

            console.log("ALREADY EXISTING - NO NEW SAVE")
        })
    
        await axios.post('http://localhost:3001/add-academic-paper', acad_paper)
            .then(res => console.log(res.data));

        alert("SAVED");
        document.getElementById("form").reset();
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
                        <form onSubmit={this.onSave} encType="multipart/form-data"  id="form">
                            <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Add Academic Paper</p>
                            
                            <label for="academicPaperTitleFormInput" className="form-label">Title</label>
                            <input type="text" className="form-control" id="academicPaperTitleFormInput" data-name="title" required onChange={this.onValueChange}/>

                            <label className="form-label mt-3">Author</label>
                            <ReactTagInput tags={this.state.author} onChange={(newTags) => this.setState({ author: newTags })}/>
                            
                            <label className="form-label mt-3">Subject</label>
                            <ReactTagInput tags={this.state.subject} onChange={(newTags) => this.setState({ subject: newTags })}/>

                            <label for="yearpublishedFormInput" className="form-label mt-3">Year Published</label>
                            <input type="number" className="form-control" id="yearpublishedFormInput" data-name="year" required onChange={this.onValueChange}/>
                            
                            <label for="pagecountFormInput" className="form-label mt-3">Page Count</label>
                            <input type="number" className="form-control" id="pagecountFormInput" data-name="pagecount" required onChange={this.onValueChange}/>
                            
                            <label for="papertypeFormInput" className="form-label mt-3">Paper Type</label>
                            <input type="text" className="form-control" id="papertypeFormInput" data-name="resourcetype" required onChange={this.onValueChange}/>

                            <label for="degreetypeFormInput" className="form-label mt-3">Degree Type</label>
                            <input type="text" className="form-control" id="degreetypeFormInput" data-name="degreetype" required onChange={this.onValueChange}/>

                            <label for="institutionFormInput" className="form-label mt-3">Institution</label>
                            <input type="text" className="form-control" id="institutionFormInput" data-name="institution" required onChange={this.onValueChange}/>
                            
                            <label className="form-label mt-3">Adviser</label>
                            <ReactTagInput tags={this.state.adviser} onChange={(newTags) => this.setState({ adviser: newTags })}/>

                            <label className="form-label mt-3">Keywords</label>
                            <ReactTagInput tags={this.state.keyword} onChange={(newTags) => this.setState({ keyword: newTags })}/>

                            <label for="academicPaperAbstract" className="form-label mt-3">Abstract</label>
                            <textarea className="form-control" id="academicPaperAbstract" rows="6" data-name="abstract" required onChange={this.onValueChange}></textarea>

                            <label for="sourceCodeFormInput" className="form-label mt-3">Source Code Link</label>
                            <input type="text" className="form-control" id="sourcecodeFormFile" data-name="sourceCode" required onChange={this.onValueChange}/>


                            {/* file uploads */}
                            <div className="row mt-3">

                                <div className="col-3">
                                    <label for="manuscriptFormFile" className="form-label" >Manuscript</label>
                                    <input className="form-control" type="file" id="manuscriptFormFile"
                                    name="manus" 
                                    />
                                </div>

                                <div className="col-3">
                                    <label for="posterFormFile" className="form-label" >Poster</label>
                                    <input className="form-control" type="file" id="posterFormFile" name="poster"/>
                                </div>

                                <div className="col-3">
                                    <label for="resourceImageFormFile" className="form-label">Resource Display Image</label>
                                    <input className="form-control" type="file" id="resourceImageFormFile" name='display'/>
                                </div>
                            </div>

                            <div className="row mt-3 mb-5">
                               
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
