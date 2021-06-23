import React, { useEffect, useState } from 'react';import '../../css/main.css';
import bookpic from "../../img/photo_holder.png";
import { Link, useLocation, withRouter } from "react-router-dom";
import Nav from '../main-page/nav';
import Footer from '../main-page/footer';
import EditBody from '../edit-resource/body'

export default function BookResource() {


    const {val} = useLocation().state;
    const [image, setImage] = useState(val.displayimage)
    const [pdf, setPdf] = useState(val.maincopy)
    const [isEdit, setEdit] = useState(false)
    
    return (
        <div>
            <Nav />

            {
                isEdit ? <EditBody data = {val}/> :   
                <div>
                <div className="container-fluid">
                <div className="col-md-8 offset-md-1" id="edit-yellow"> 
                    <Link type="button" className="btn btn-primary mr-3" id="edit-yellow" to={`/search-results/ `}>Back</Link>
                </div>
                <div className="row mx-5">
                    <div className="col-1">
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-left text-warning mt-3 mb-1" style={{ fontSize: "36px" }}>{val.title}</h1>
                        <label className="text-left text-primary mt-1 mb-1" style={{ fontSize: "25px" }}>{val.author},</label>
                        <p></p>
                        <p>Year published: {val.year}</p>
                        <p>Publisher: {val.publisher}</p>
                        <p>Edition: {val.edition}</p>
                        <p>Resource Type: {val.resource_type}</p>
                        <p>Subject: {val.subject}</p>
                        <p>Page Count: {val.pagecount} pages</p>
                        <p>Synopsis: {val.introduction}</p>
                    </div>
                    <div className="col-md-4 justify-content-center">
                        <img src={val.displayimage ? val.displayimage : bookpic} height="500px" width="355x" alt="Book" />
                        <p></p>
                        <div className="text-center" >
                            <button type="button" className="btn btn-primary btn-md mr-3">Main Copy</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-2 offset-md-10" id="edit-blue">
                <button type="button" className="btn btn-blue btn-md col-md-14" onClick={() => setEdit(true)}>Edit Resource</button>
            </div>
                </div>

                

            }

            
            
            <Footer />
        </div>
    )
}