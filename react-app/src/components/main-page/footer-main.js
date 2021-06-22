import React, { Component } from "react"; 
import { Link } from "react-router-dom"; 
import '../../css/main.css';

class Footer extends Component {
  render() {
    return (
            <div>
              <footer className="site-footer">
                  <div className="container">
                      <div className="row">
                          <div className="col-sm-12 col-md-6">
                              <h6>About</h6>
                              <p className="text-justify">The Institute of Computer Science (ICS) Library System maintains a lot of materials such as Special Problems and thesis of BSCS/MSCS/PhD alumni, books and journals. These materials are used as a reference by current researchers and students. Currently, the only way to access them is through physically visiting the library. With the current pandemic situation and the need for social distancing, there is a need to offer such services online in a secured, efficient, and maintained manner, hence this proposed system. This system is in partial fulfillment of the requirements for CMSC 128: Introduction to Software Engineering at the University of the Philippines Los Baños.</p>
                          </div>

                          <div className="col-xs-6 col-md-3">
                              <h6>Announcements</h6>
                              <ul className="footer-links">
                                <Link to ="/announcement-page" className="rem-link"><li><a href=" ">Announcement 1</a></li></Link>
                                <Link to ="/announcement-page" className="rem-link"><li><a href=" ">Announcement 2</a></li></Link>
                                <Link to ="/announcement-page" className="rem-link"><li><a href=" ">Announcement 3</a></li></Link>
                                <Link to ="/announcement-page" className="rem-link"><li><a href=" ">Announcement 4</a></li></Link>
                                <Link to ="/announcement-page" className="rem-link"><li><a href=" ">Announcement 5</a></li></Link>
                                <Link to ="/announcement-page" className="rem-link"><li><a href=" ">Announcement 6</a></li></Link>
                              </ul>
                          </div>

                          <div className="col-xs-6 col-md-3">
                              <h6>Quick Links</h6>
                              <ul className="footer-links">
                                  <li><a href="https://www.facebook.com/ICS.UPLB">Official ICS Facebook Page</a></li>
                                  <li><a href="http://ics.uplb.edu.ph/">Official ICS Website</a></li>
                                  <li><a href="https://library.uplb.edu.ph/">University Library - UPLB</a></li>
                              </ul>
                          </div>
                      </div>
                      <hr/>
                  </div>
                  <div className="container">
                      <div className="row">
                          <div className="col-md-8 col-sm-6 col-xs-12">
                              <p className="copyright-text">Copyright &copy; CMSC 128 C4L.
                              </p>
                          </div>
                      </div>
                  </div>
              </footer>
            </div>
    );
  }
}

export default Footer;
