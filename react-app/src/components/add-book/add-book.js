import React, { Component } from "react"; 
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../../css/main.css';

//COMPONENTS
import Nav from '../main-page/nav';
import Footer from '../main-page/footer';
import AdminSidebar from '../adminsidebar/adminsidebar.js';
import TagsInput from '../tagsinput/tagsinput';



class AddBook extends Component{

    /*constructor for this class */
    constructor(props){
        super(props);

        this.state = {
            title: '',
            author:[],
            subject:[],
            year: 0,
            pagecount: 0,
            publisher: '',
            edition: '',
            isbn:[],
            introduction:'',
            keyword: [],
            mainCopy: '',
            resourceImage: '',
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

    async onSave(e){
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
            console.log('display ADDED', res.data.file.filename)
        });

        await axios.post('http://localhost:3001/maincopy', maincopy_data)
        .then(res => {
            files.push(res.data.file.filename)
            console.log('maincopy ADDED', res.data.file.filename)
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

            await axios.get(`http://localhost:3001/author/${value.toUpperCase()}`) ? 

            await axios.post('http://localhost:3001/add-author', data)
            .then(res => console.log("AUTHOR ADDED")) :

            {exist: true}
        })

        book.subject.map(async (value) => {

            const data = {subject: value}

            await axios.get(`http://localhost:3001/subject/${value.toUpperCase()}`) ? 

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

        await axios.post('http://localhost:3001/add-book', book)
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
                    
                        {/* book fields */}
                        <div className="col-lg-10">
                        <form onSubmit={this.onSave} encType="multipart/form-data" id= "form">
                                <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Add Book</p>
                                
                                <label for="bookTitleFormInput" className="form-label">Title</label>
                                <input type="text" className="form-control" id="academicPaperTitleFormInput" data-name="title" required onChange={this.onValueChange}/>
                                
                                <label className="form-label mt-3">Author</label>
                                <ReactTagInput tags={this.state.author} onChange={(newTags) => this.setState({ author: newTags })} />
                               
                                <label className="form-label mt-3">Subject</label>
                                <ReactTagInput tags={this.state.subject} onChange={(newTags) => this.setState({ subject: newTags })} />

                                <label className="form-label mt-3">Keywords</label>
                                <ReactTagInput tags={this.state.keyword} onChange={(newTags) => this.setState({ keyword: newTags })} />                                

                                <label for="yearpublishedFormInput" className="form-label mt-3">Year Published</label>
                                <input type="number" className="form-control" id="yearpublishedFormInput" data-name="year" required onChange={this.onValueChange}/>
                                
                                <label for="pagecountFormInput" className="form-label mt-3">Page Count</label>
                                <input type="number" className="form-control" id="pagecountFormInput" data-name="pagecount" required onChange={this.onValueChange}/>

                                <label for="publisherFormInput" className="form-label mt-3">Publisher</label>
                                <input type="text" className="form-control" id="publisherFormInput" data-name="publisher" required onChange={this.onValueChange}/>

                                <label for="editionFormInput" className="form-label mt-3">Edition</label>

                                <input type="text" className="form-control" id="editionFormInput" data-name="edition" required onChange={this.onValueChange}/>

                                <label for="isbnFormInput" className="form-label mt-3">ISBN10 and ISBN13</label>
                                <ReactTagInput maxTags={2} tags={this.state.isbn} onChange={(newTags) => this.setState({ isbn: newTags })} />        

                                <label for="introductionFormInput" className="form-label mt-3">Synopsis</label>
                                <textarea className="form-control" id="introductionFormInput" rows="6" data-name="introduction" required onChange={this.onValueChange}></textarea>

                            
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
                                {/*<h1>{JSON.stringify(bookData)}</h1>*/}
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

export default AddBook;