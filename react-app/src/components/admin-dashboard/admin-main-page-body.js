import React, { Component } from "react";
import { Link } from "react-router-dom"; 
import '../../css/main.css';
import axios from 'axios';


class AdminMainPageBody extends Component{
    
    state = {
        resource_array : [],
        logs: []
    }

    async componentDidMount(){
        await axios.get("http://localhost:3001/acad-papers")
        .then(res => {
      this.setState({
        resource_array: res.data,
        logs: this.state.logs
      })
  
      })
      
      await axios.get("http://localhost:3001/books")
        .then(res => this.setState({
        resource_array: this.state.resource_array.concat(res.data),
        logs: this.state.logs  
      }))

      await axios.get("http://localhost:3001/registry")
        .then(res => {
      this.setState({
        resource_array: this.state.resource_array,
        logs: res.data
      })
    
        })
    }


    convertToCSV(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
    
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ','
    
                line += array[i][index];
            }
    
            str += line + '\r\n';
        }
    
        return str;
    }
    
     exportCSVFile( items, fileTitle) {
        // Convert Object to JSON
        var jsonObject = JSON.stringify(items);
    
        var csv = this.convertToCSV(jsonObject);
    
        var exportedFilenmae = fileTitle  + String(Date.now()) + '.csv';
    
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        if (navigator.msSaveBlob) { // IE 10+
            navigator.msSaveBlob(blob, exportedFilenmae);
        } else {
            var link = document.createElement("a");
            if (link.download !== undefined) { // feature detection
                // Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", exportedFilenmae);
                link.style.visibility = 'hidden';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
    }

     saveResources = () => {
      this.exportCSVFile(this.state.resource_array, "StackUPLIB_Summary_Log")
    }


     saveLogs = () => {
        
    this.exportCSVFile(this.state.logs, "StackUPLIB_Activity_Log")
}


    render(){
        return(
           <div className = "container-fluid">
            <div id="admin-row"> 
                <div className = "col-sm-1"></div>
                <h1 className = "col-sm-10 head-text"> Administrator</h1>
                <div className = "col-sm-1"></div>
            </div>
            
            <div className = "row">
                <div className = "col-md-1"></div>
                <div className = "col-md-3 center">
                    <h4 className = "subhead-text">Manage Resources</h4><br/>
                    <Link to="/add-book"><button type="button" className="btn btn-primary btn-md admin-btn">Add Book</button> </Link>
                    <Link to ="/add-academic-paper"><button type="button" className="btn btn-primary btn-md admin-btn">Add Academic paper</button></Link>
                </div>
                <div className = "col-md-3 center">
                    <h4 className = "subhead-text">Manage Faculty and Staff</h4><br/>
                    <Link to ="/add-faculty-and-staff"> <button type="button" className="btn btn-primary btn-md admin-btn">Add Faculty and Staff</button> </Link>
                    <Link to ="/edit-faculty-and-staff"> <button type="button" className="btn btn-primary btn-md admin-btn" >Edit Faculty and Staff</button></Link>
                </div>
                <div className = "col-md-3 center">
                    <h4 className = "subhead-text">Generate Reports</h4><br/> {/*Links for viewing purposes only- may remove when generate reports will be used*/}
                    <button type="button" className="btn btn-primary btn-md admin-btn" onClick={this.saveResources}>Summary report</button> 
                    <button type="button" className="btn btn-primary btn-md admin-btn" onClick={this.saveLogs}>Activity report</button>
                </div> 
                <div className = "col-md-1"></div>
            </div>
        </div>
        );
    }
}

export default AdminMainPageBody;