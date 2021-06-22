import React from 'react'
import '../../css/main.css';

import Nav from '../main-page/nav';
import { Link, useLocation } from "react-router-dom";
import Footer from '../main-page/footer';

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
                        <label className="text-left text-primary mt-1 mb-1" style={{ fontSize: "25px" }}>{val.authors[0]},</label>
                        <p></p>
                        <p>Date published: {val.publishedDate.$date}</p>
                        <p>Status: {val.status}</p>
                        {/* <p>Degree Type: {val.degreetype}</p> */}
                        {/* <p>Resource Type: {val.resource_type}</p> */}
                        {/* <p>Subject: {val.subject[0]}</p> */}
                        <p>Other info: {val.pageCount} pages</p>
                        <p>Abstract: {val.shortDescription}</p> 
                    </div>
                    <div className="col-md-4 justify-content-center">
                        <img src={val.thumbnailUrl} height="500px" width="355x" alt="Book" />
                        <p></p>
                        <div className="text-center">
                            <button type="button" className="btn btn-primary btn-md mr-3">Manuscript</button>
                            <button type="button" className="btn btn-primary btn-md mr-3" >Poster</button>
                            <Link type="button" className="btn btn-primary btn-md" to={val.sourcecode}>Source Code</Link>
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