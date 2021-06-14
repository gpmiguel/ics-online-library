import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../../css/main.css';

//COMPONENTS
import Nav from '../main-page/nav';
import Footer from '../main-page/footer';
import AdminMainPageBody from './admin-main-page-body';

class AdminMainPage extends Component {
    render() {
        return (
            <div>
                <Nav />
                <AdminMainPageBody />

                <div style={{ marginTop: "15%" }}>
                    <Footer />
                </div>
            </div>
        );
    }
}

export default AdminMainPage;