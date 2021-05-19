import React from 'react'
import '../../css/main.css';

import Nav from '../main-page/nav';
import Footer from '../main-page/footer';

export default function AcademicPaper() {
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
                <button type="button" className="btn btn-primary my-2">Back</button>
                <div className="row mx-5">
                    <div className="col-1">
                    </div>
                    <div className="col-4">
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
                </div>
            </div>
            <Footer />
        </div>
    )
}
