import React, { Component } from "react"; 
import { Link, withRouter } from "react-router-dom";
import { EditText, EditTextarea } from 'react-edit-text';  // for editable text area
import '../../css/main.css';
import ReactTagInput from "@pathofdev/react-tag-input";
import axios from 'axios';

//COMPONENTS
import AdminSidebar from '../adminsidebar/adminsidebar.js';
import TagsInput from '../tagsinput/tagsinput';

class EditBody extends Component{
    constructor(props){
        super(props);

        this.state = {
            type: this.props.data.resourcetype,
            resourcetype: this.props.data.resourcetype,
            title: this.props.data.title,
            author:this.props.data.author,
            subject:this.props.data.subject,
            year: this.props.data.year,
            pagecount: this.props.data.pagecount,
            publisher: this.props.data.publisher,
            edition: this.props.data.edition,
            isbn:[],
            introduction:this.props.data.introduction,
            maincopy: this.props.data.maincopy,
            displayimage: this.props.data.displayimage,
            keyword: this.props.data.keyword,
            degreetype: this.props.data.degreetype,
            institution: this.props.data.institution,
            adviser:this.props.data.adviser,
            abstract: this.props.data.abstract,
            journal: this.props.data.journal,
            sourcecode: this.props.data.sourcecode,
        }

        this.onValueChange = this.onValueChange.bind(this);
        this.onSaveBook = this.onSaveBook.bind(this);
        this.onDeleteBook = this.onDeleteBook.bind(this);
        this.onSaveAcad = this.onSaveAcad.bind(this);
        this.onDeleteAcad = this.onDeleteAcad.bind(this);
    }

    componentDidMount(){

        var newisbn;
        if(this.props.data.isbn){
             newisbn =  [this.props.data.isbn.isbn10, this.props.data.isbn.isbn13]
        }else{
            newisbn = []
        }

        var adviser;
        if(this.props.data.adviser){
             adviser =  this.props.data.adviser;
        }else{
            adviser = []
        }

        this.setState({
            id: this.props.data._id,
            type: this.props.data.resourcetype,
            title: this.props.data.title,
            author:this.props.data.author,
            subject:this.props.data.subject,
            year: this.props.data.year,
            pagecount: this.props.data.pagecount,
            publisher: this.props.data.publisher,
            edition: this.props.data.edition,
            isbn:newisbn,
            introduction:this.props.data.introduction,
            maincopy: this.props.data.maincopy,
            displayimage: this.props.data.displayimage,
            keyword: this.props.data.keyword,
            degreetype: this.props.data.degreetype,
            institution: this.props.data.institution,
            adviser:this.props.data.adviser,
            abstract: this.props.data.abstract,
            journal: this.props.data.journal,
            manuscript: this.props.data.manuscript,
            sourcecode: this.props.data.sourcecode,
        })

        console.log(this.state)
    }

    onValueChange(e){
        this.setState({
            [e.target.dataset.name]: e.target.value
        })
    }

    async onSaveBook(e){
        e.preventDefault(); 

        
        var display_data = new FormData()
        var maincopy_data = new FormData()

        const display_file = document.getElementById('resourceImageFormFile').files[0]
        const maincopy_file = document.getElementById('maincopyFormFile').files[0]

        display_data.append('display', display_file);
        maincopy_data.append('maincopy', maincopy_file);

        var files =[];

        const {title, author, subject, year, pagecount, publisher, edition, isbn, introduction, keyword} = this.state

        await axios.post('http://localhost:3001/display', display_data)
        .then(res => {
            files.push(res.data.file.filename)
            console.log('display ADDED')
        });

        await axios.post('http://localhost:3001/maincopy', maincopy_data)
        .then(res => {
            files.push(res.data.file.filename)
            console.log('maincopy ADDED')
        });

        const book = {
            title: title,
            author:author,
            subject:subject,
            year: year,
            pagecount: pagecount,
            publisher: publisher,
            edition: edition,
            isbn:{
                isbn10: isbn[0],
                isbn13: isbn[1]
            },
            introduction:introduction,
            maincopy: files[1],
            displayimage: files[0],
            keyword: keyword
        }

        book.author.map(async (value) => {

            const data = {author: value}

            await axios.get(`http://localhost:3001/author/${value.toUpperCase()}`).then() ? 

            await axios.post('http://localhost:3001/add-author', data)
            .then(res => console.log("AUTHOR ADDED")) :

            {exist: true}
        })

        book.subject.map(async (value) => {

            const data = {subject: value}

            await axios.get(`http://localhost:3001/subject/${value.toUpperCase()}`).then() ? 

            await axios.post('http://localhost:3001/add-subject', data)
            .then(res => console.log("SUBJECT ADDED")):

            {exist: true}
        })

        book.keyword.map(async (value) => {

            const data = {keyword: value}

            await axios.get(`http://localhost:3001/keyword/${value.toUpperCase()}`) ? 

            await axios.post('http://localhost:3001/add-keyword', data)
            .then(res => console.log("KEYWORD ADDED")):

            {exist: true}
        })

        await axios.put(`http://localhost:3001/edit-book/${this.state.id}`, book)
            .then(res => console.log(res.data));

        
        alert("SAVED");
        document.getElementById("form").reset();
        
    }

    async onSaveAcad(e){
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

            await axios.get(`http://localhost:3001/adviser/${value}`).then() ? 

            await axios.post('http://localhost:3001/add-adviser',data)
            .then(res => console.log("ADVISER ADDED")) :

            console.log("ALREADY EXISTING - NO NEW SAVE")
        })

        acad_paper.author.map(async (value) => {

            const data = {author: value}

            await axios.get(`http://localhost:3001/author/${value.toUpperCase()}`).then() ? 

            await axios.post('http://localhost:3001/add-author', data)
            .then(res => console.log("AUTHOR ADDED")) :

            console.log("ALREADY EXISTING - NO NEW SAVE")
        })

        acad_paper.subject.map(async (value) => {

            const data = {subject: value}

            await axios.get(`http://localhost:3001/subject/${value.toUpperCase()}`).then() ? 

            await axios.post('http://localhost:3001/add-subject', data)
            .then(res => console.log("SUBJECT ADDED")):

            console.log("ALREADY EXISTING - NO NEW SAVE")
        })

        acad_paper.keyword.map(async (value) => {

            const data = {keyword: value}

            await axios.get(`http://localhost:3001/keyword/${value.toUpperCase()}`).then() ? 

            await axios.post('http://localhost:3001/add-keyword', data)
            .then(res => console.log("KEYWORD ADDED")):

            console.log("ALREADY EXISTING - NO NEW SAVE")
        })
    
        await axios.put(`http://localhost:3001/edit-acad-paper/${this.state.id}`, acad_paper)
            .then(res => console.log(res.data));

        alert("SAVED");
        document.getElementById("form").reset();
        
    }

    async onDeleteBook(){
        await axios.get(`http://localhost:3001/delete-book/${this.state.id}`).then();
        document.getElementById("form-book").reset();
        console.log("DELETED")

    }
    async onDeleteAcad(){
        await axios.get(`http://localhost:3001/delete-acad-paper/${this.state.id}`).then();
        document.getElementById("form").reset();
        console.log("DELETED")
    }

    render(){

        console.log(this.state)

        const renderEdit = () => {
            if (this.state.type === "Book") {

           
            return (
                <div className="col-lg-10">
                <form onSubmit={this.onSaveBook} encType="multipart/form-data" id= "form-book">
                        <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Edit Book</p>
                        
                        <label for="bookTitleFormInput" className="form-label">Title</label>
                        <input type="text" className="form-control" id="academicPaperTitleFormInput" data-name="title" required onChange={this.onValueChange} defaultValue={this.state.title}/>
                        
                        <label className="form-label mt-3">Author</label>
                        <ReactTagInput tags={this.state.author ? this.state.author : []} onChange={(newTags) => this.setState({ author: newTags })} defaultValue={this.state.author} />
                       
                        <label className="form-label mt-3">Subject</label>
                        <ReactTagInput tags={this.state.subject ? this.state.subject : []} onChange={(newTags) => this.setState({ subject: newTags })} />

                        <label className="form-label mt-3">Keywords</label>
                        <ReactTagInput tags={this.state.keyword ? this.state.keyword : []} onChange={(newTags) => this.setState({ keyword: newTags })} />                                

                        <label for="yearpublishedFormInput" className="form-label mt-3">Year Published</label>
                        <input type="number" className="form-control" id="yearpublishedFormInput" data-name="year" required onChange={this.onValueChange} defaultValue={this.state.year}/>
                        
                        <label for="pagecountFormInput" className="form-label mt-3">Page Count</label>
                        <input type="number" className="form-control" id="pagecountFormInput" data-name="pagecount" required onChange={this.onValueChange} defaultValue={this.state.pagecount}/>

                        <label for="publisherFormInput" className="form-label mt-3">Publisher</label>
                        <input type="text" className="form-control" id="publisherFormInput" data-name="publisher" required onChange={this.onValueChange} defaultValue={this.state.publisher}/>

                        <label for="editionFormInput" className="form-label mt-3">Edition</label>
                        <input type="text" className="form-control" id="editionFormInput" data-name="edition" required onChange={this.onValueChange} defaultValue={this.state.edition}/>

                        <label for="isbnFormInput" className="form-label mt-3">ISBN10 and ISBN13</label>
                        <ReactTagInput maxTags={2} tags={this.state.isbn} onChange={(newTags) => this.setState({ isbn: newTags })} />        

                        <label for="introductionFormInput" className="form-label mt-3">Synopsis</label>
                        <textarea className="form-control" id="introductionFormInput" rows="6" data-name="introduction" required onChange={this.onValueChange} defaultValue={this.state.introduction}></textarea>

                    
                        {/* file uploads */}
                        <div className="row mt-3">
                            <div className="col-3">
                                <label for="maincopyFormFile" className="form-label" >Main Copy</label>
                                <input className="form-control" type="file" id="maincopyFormFile"
                            name="maincopy" 
                            />

                            </div>
                        </div>

                        <div className="row mt-3 mb-5">
                            <div className="col-3">
                            <label for="resourceImageFormFile" className="form-label">Resource Display Image</label>
                            <input className="form-control" type="file" id="resourceImageFormFile" name='display'/>
                            </div>
                        </div>
                        <button type="submit" className ="btn btn-primary mb-5">Save Edit</button>
                            <button type="button" onClick={this.onDeleteBook} className ="btn btn-danger mb-5 delete-button ml-2">Delete</button>
    
                </form>
                </div>        
                );
                
            } else {
                return (
                <div className="col-lg-10" >
                        <form onSubmit={this.onSaveAcad} encType="multipart/form-data"  id="form">
                            <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Edit Academic Paper</p>
                            
                            <label for="academicPaperTitleFormInput" className="form-label">Title</label>
                            <input type="text" className="form-control" id="academicPaperTitleFormInput" data-name="title" required onChange={this.onValueChange} defaultValue={this.state.title}/>

                            <label className="form-label mt-3">Author</label>
                            <ReactTagInput tags={this.state.author ? this.state.author : []} onChange={(newTags) => this.setState({ author: newTags })} defaultValue={this.state.author}/>
                            
                            <label className="form-label mt-3">Subject</label>
                            <ReactTagInput tags={this.state.subject ? this.state.subject : []} onChange={(newTags) => this.setState({ subject: newTags })} defaultValue={this.state.subject}/>

                            <label for="yearpublishedFormInput" className="form-label mt-3">Year Published</label>
                            <input type="number" className="form-control" id="yearpublishedFormInput" data-name="year" required onChange={this.onValueChange} defaultValue={this.state.year}/>
                            
                            <label for="pagecountFormInput" className="form-label mt-3">Page Count</label>
                            <input type="number" className="form-control" id="pagecountFormInput" data-name="pagecount" required onChange={this.onValueChange} defaultValue={this.state.pagecount}/>
                            
                            <label for="papertypeFormInput" className="form-label mt-3">Paper Type</label>
                            <input type="text" className="form-control" id="papertypeFormInput" data-name="resourcetype" required onChange={this.onValueChange} defaultValue={this.state.resourcetype}/>

                            <label for="degreetypeFormInput" className="form-label mt-3">Degree Type</label>
                            <input type="text" className="form-control" id="degreetypeFormInput" data-name="degreetype" required onChange={this.onValueChange} defaultValue={this.state.degreetype}/>

                            <label for="institutionFormInput" className="form-label mt-3">Institution</label>
                            <input type="text" className="form-control" id="institutionFormInput" data-name="institution" required onChange={this.onValueChange} defaultValue={this.state.institution}/>
                            
                            <label className="form-label mt-3">Adviser</label>
                            <ReactTagInput tags={this.state.adviser ? this.state.adviser : []} onChange={(newTags) => this.setState({ adviser: newTags })}/>

                            <label className="form-label mt-3">Keywords</label>
                            <ReactTagInput tags={this.state.keyword ? this.state.keyword : []} onChange={(newTags) => this.setState({ keyword: newTags })}/>

                            <label for="academicPaperAbstract" className="form-label mt-3">Abstract</label>
                            <textarea className="form-control" id="academicPaperAbstract" rows="6" data-name="abstract" required onChange={this.onValueChange} defaultValue={this.state.abstract}></textarea>

                            <label for="sourceCodeFormInput" className="form-label mt-3">Source Code Link</label>
                            <input type="text" className="form-control" id="sourcecodeFormFile" data-name="sourceCode" required onChange={this.onValueChange} defaultValue={this.state.sourcecode}/>


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

                            <button type="submit" className ="btn btn-primary mb-5">Save Edit</button>
                            <button type="reset" className ="btn btn-danger mb-5 delete-button ml-2" onClick={this.onDeleteAcad}>Delete</button>
                            </form>
                        </div>
              );
            }
        }

        return(
            <div className ="container-fluid">
                    <Link to="/admin-dashboard"><button type="button" className ="btn btn-primary my-2 back-button">Back</button></Link>
                    
                    <div className ="row mx-5">
                        <div className ="col-lg-2">
                            <AdminSidebar/>
                        </div>
                    
                        {/* render fields */}
                        <div className="col-lg-10">
                            {renderEdit()}
                            
                        </div>
                    </div>
            </div>
        );
    }
}

export default EditBody;