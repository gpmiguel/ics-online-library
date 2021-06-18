import React, { Component } from "react"; 
import '../../css/main.css';

class Footer extends Component {
  render() {
    return (
            <div>
              <footer className="general-footer">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-8 col-sm-6 col-xs-12">
                              <p className="copyright-text">Copyright &copy; CMSC 128 C4L
                                  <a href="#"></a>.
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
