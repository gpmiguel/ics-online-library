import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchPage from './search';
import MainPage from '../components/main-page/main-page';

const Webpages = () => {
    return(
        <Router>
            <Route exact path = "/" component = {MainPage} />
            <Route path = "/search" component = {SearchPage} />
        </Router>
    );
};
export default Webpages;