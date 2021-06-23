import React, { Component } from "react"; 
import { Link, withRouter } from "react-router-dom";
import { EditText, EditTextarea } from 'react-edit-text';  // for editable text area
import '../../css/main.css';
import ReactTagInput from "@pathofdev/react-tag-input";


//COMPONENTS
import AdminSidebar from '../adminsidebar/adminsidebar.js';
import TagsInput from '../tagsinput/tagsinput';

class EditBody extends Component{

    state = {
        
    }

    componentDidMount(){
        this.setState({
            type: this.props.data.resourcetype,
            title: this.props.data.title,
            author:this.props.data.author,
            subject:this.props.data.subject,
            year: this.props.data.year,
            pagecount: this.props.data.pagecount,
            publisher: this.props.data.publisher,
            edition: this.props.data.edition,
            isbn:this.props.data.isbn,
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
        
        })
    }

    render(){

        

        //placeholder text; replace default value with values gotten from the database based on resource ID gotten from URL
        let sampleText = "This is supposed to be data from the database"

        const renderEdit = () => {
            if (this.state.type === "Book") {


                return (
                <div className="col-lg-10">
                <form onSubmit={this.onSave} encType="multipart/form-data" id= "form">
                        <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Edit Book</p>
                        
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
                );
            } else {
              return (
                <div className="col-lg-10" >
                        <form onSubmit={this.onSave} encType="multipart/form-data"  id="form">
                            <p className="text-center yellow-title-header mt-3 mb-1 head-text" style={{fontSize: "48px"}}>Edit Academic Paper</p>
                            
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