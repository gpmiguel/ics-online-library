import React, { useEffect, useState } from 'react';
import '../../css/main.css';
import bookpic from "../../img/photo_holder.png";
import axios from 'axios';

import Nav from '../main-page/nav';
import { Link, useLocation } from "react-router-dom";
import Footer from '../main-page/footer';
import EditBody from '../edit-resource/body'


export default function AcademicPaper() {

    const {val} = useLocation().state;
    const [image, setImage] = useState(val.displayimage)
    const [pdf, setPdf] = useState(val.manuscript)
    const [isEdit, setEdit] = useState(false)

    

    useEffect( async () => {
        await axios.get(`http://localhost:3001/image/${image}`).then(
             image => {
                console.log(image.config.url)
                setImage(image.config.url)
                
             }
         )

        await axios.get(`http://localhost:3001/pdf/${pdf}`).then(
            pdf => {
               console.log(pdf.config.url)
               setPdf(pdf.config.url)
               alert("File can be accessed")
               
            }
        )
    }, [])
    
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
                        <label className="text-left text-primary mt-1 mb-1" style={{ fontSize: "25px" }}>{val.author.map(aut => `${aut} `)}</label>
                        <p></p>
                        <p><b>Keywords:</b> {val.keyword.map(keys => `${keys} - `)}</p>
                        <p><b>Advisers:</b> {val.adviser.map(adviser => `${adviser} - `)}</p>
                        <p><b>Year published:</b> {val.year}</p>
                        <p><b>Page Count:</b> {val.pagecount}</p>
                        <p><b>Degree Type:</b> {val.degreetype}</p>
                        <p><b>Resource Type:</b> {val.resourcetype}</p>
                        <p><b>Subject:</b> {val.subject.map(subs => `${subs} | `)}</p>
                        <p><b>Institution:</b> {val.institution}</p>
                        <p><b>Abstract:</b> {val.abstract}</p> 
                    </div>
                    <div className="col-md-4 justify-content-center">
                        <img src={val.displayimage ? image : bookpic} height="500px" width="355x" alt={val.displayimage} />
                        <p></p>
                        <div className="text-center">
                            <a type="button" className="btn btn-primary btn-md mr-3" href={`pdf/${pdf}`} target='_blank'>Manuscript</a>
                            <a type="button" className="btn btn-primary btn-md" href={val.sourcecode} target='_blank'>Source Code</a>
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