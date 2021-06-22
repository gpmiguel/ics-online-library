import React from 'react'
import '../../css/main.css';
import bookpic from "../../img/photo_holder.png";

import Nav from '../main-page/nav';
import { Link, useLocation, withRouter } from "react-router-dom";
import Footer from '../main-page/footer';
import { useParams } from 'react-router-dom';

export default function AcademicPaper() {

    const {val} = useLocation().state;

    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="col-md-8 offset-md-1" id="edit-yellow"> 
                    <Link type="button" className="btn btn-primary mr-3" id="edit-yellow" to={`/search-results/ `}>Back</Link>
                </div>
                <div className="row mx-5">
                    <div className="col-1">
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-left text-warning mt-3 mb-1" style={{ fontSize: "36px" }}>{val.title}</h1>
                        <label className="text-left text-primary mt-1 mb-1" style={{ fontSize: "25px" }}>{val.author[0]}</label>
                        <p></p>
                        <p>Year published: {val.year}</p>
                        <p>Page Count: {val.pagecount}</p>
                        <p>Degree Type: {val.degreetype}</p>
                        <p>Resource Type: {val.resourcetype}</p>
                        <p>Subject: {val.subject}</p>
                        <p>Other info: {val.institution}</p>
                        <p>Abstract: {val.abstract}</p> 
                    </div>
                    <div className="col-md-4 justify-content-center">
                        <img src={val.displayimage ? val.displayimage : bookpic} height="500px" width="355x" alt="Book" />
                        <p></p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary btn-md mr-3">Manuscript</button>
                            <button type="button" className="btn btn-primary btn-md mr-3" >Poster</button>
                            <a type="button" className="btn btn-primary btn-md" href={val.sourcecode} target='_blank'>Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 offset-md-10" id="edit-blue">
                <button type="button" className="btn btn-blue btn-md col-md-14">Edit Resource</button>
            </div>
            <Footer />
        </div>
    )
}