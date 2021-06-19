import React from 'react'
import '../../css/main.css';
import bookpic from "../../img/photo_holder.png";

import Nav from '../main-page/nav';
import Footer from '../main-page/footer';

export default function BookResource() {
    const book_details = {
        "date_published": "January 1, 2008",
        "publisher": "StarBooks",
        "edition": "1st Edition",
        "resource_type": "Book",
        "subject": "Machine Learning",
        "other_info": "Lorem ipsum dolor sit amet",
        "abstract": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum justo leo, ultrices quis tincidunt a, faucibus non justo. Etiam at sapien tincidunt, fringilla nunc eget, tincidunt lectus. Donec laoreet ante a accumsan lobortis. Pellentesque eros mi, vestibulum nec tellus non, accumsan auctor tellus. Donec eu quam dignissim orci pretium facilisis. Phasellus sem massa, elementum accumsan nisi non, rhoncus congue elit. Mauris at laoreet velit. Phasellus non efficitur nibh. Vestibulum ut massa eget lectus bibendum vulputate eget ullamcorper risus."
    };
    return (
        <div>
            <Nav />
            <div className="container-fluid">
                <div className="col-md-8 offset-md-1" id="edit-yellow"> 
                    <button type="button" className="btn btn-primary mr-3" id="edit-yellow">Back</button>
                </div>
                <div className="row mx-5">
                    <div className="col-1">
                    </div>
                    <div className="col-md-6">
                        <h1 className="text-left text-warning mt-3 mb-1" style={{ fontSize: "36px" }}>Resource Title</h1>
                        <label className="text-left text-primary mt-1 mb-1" style={{ fontSize: "25px" }}>Author 1,</label>
                        <label className="text-left text-primary mt-1 mb-1" style={{ fontSize: "25px" }}>Author 2,</label>
                        <label className="text-left text-primary mt-1 mb-1" style={{ fontSize: "25px" }}>Author 3</label>
                        <p></p>
                        <p>Date published: {book_details.date_published}</p>
                        <p>Publisher: {book_details.publisher}</p>
                        <p>Edition: {book_details.edition}</p>
                        <p>Resource Type: {book_details.resource_type}</p>
                        <p>Subject: {book_details.subject}</p>
                        <p>Other info: {book_details.other_info}</p>
                        <p>Abstract: {book_details.abstract}</p>
                    </div>
                    <div className="col-md-4 justify-content-center">
                        <img src={bookpic} height="500px" width="355x" alt="Book" />
                        <p></p>
                        <div className="text-center" >
                            <button type="button" className="btn btn-primary btn-md mr-3">Manuscript</button>
                            <button type="button" className="btn btn-primary btn-md mr-3" >Poster</button>
                            <button type="button" className="btn btn-primary btn-md">Source Code</button>
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