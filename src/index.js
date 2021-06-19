import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './css/main.css';

//COMPONENTS
import App from './App';
import MainPage from './components/main-page/main-page';
import AdminMainPage from './components/admin-dashboard/admin-main-page';
import AddAcademicPaper from './components/add-academic-paper/add-academic-paper';

import reportWebVitals from './reportWebVitals';


// import '../bootstrap';
// import '../bootstrap/dist/css/bootstrap.css';
// import '../bootstrap/dist/js/bootstrap.js';
// import $ from 'jquery';
// import Popper from 'popper.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
