import './css/main.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//COMPONENTS
import MainPage from './components/main-page/main-page';
import AdminMainPage from './components/admin-dashboard/admin-main-page';
import AddAcademicPaper from './components/add-academic-paper/add-academic-paper';
import AddBook from './components/add-book/add-book';
import EditResourcePage from './components/edit-resource/edit-resource';
import EditFacultyAndStaff from './components/edit-faculty-and-staff/edit-faculty-and-staff';
import AddFacultyAndStaff from './components/add-faculty-and-staff/add-faculty-and-staff';
import SearchPage from './components/search-page/search';
import AcademicPaper from './components/academic-paper-resource/academic-paper-resource';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <MainPage />} />
          <Route path="/admin-dashboard" exact component={() => <AdminMainPage />} />
          <Route path="/add-academic-paper" exact component={() => <AddAcademicPaper />} />
          <Route path="/add-book" exact component={() => <AddBook />} />
          <Route path="/edit-faculty-and-staff" exact component={() => <EditFacultyAndStaff />} />
          <Route path="/search-results" exact component={() => <SearchPage />} />
          <Route path="/add-faculty-and-staff" exact component={() => <AddFacultyAndStaff />} />
          <Route path="/edit-resource" exact component={() => <EditResourcePage />} />
          <Route path="/academic-paper" exact component={() => <AcademicPaper />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
