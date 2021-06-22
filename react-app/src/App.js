import './css/main.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//COMPONENTS
import MainPage from './components/main-page/main-page';
import AdminMainPage from './components/admin-dashboard/admin-main-page';
import AddAcademicPaper from './components/add-academic-paper/add-academic-paper';
import AddBook from './components/add-book/add-book';
import SearchPage from './components/search-page/search';
import AcademicPaperResource from './components/academic-paper-resource/academic-paper-resource';
import BookResource from './components/book-resource/book-resource';
import AddFacultyAndStaff from './components/add-faculty-and-staff/add-faculty-and-staff';
import EditFacultyAndStaff from './components/edit-faculty-and-staff/edit-faculty-and-staff';
import EditResource from './components/edit-resource/edit-resource';
import AnnouncementPage from './components/announcement-page/announcement-page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <MainPage />} />
          <Route path="/admin-dashboard" exact component={() => <AdminMainPage />} />
          <Route path="/add-academic-paper" exact component={() => <AddAcademicPaper />} />
          <Route path="/add-book" exact component={() => <AddBook />} />
          <Route path="/search-results/:searched" exact component={() => <SearchPage />} />
          <Route path="/edit-faculty-and-staff" exact component={() => <EditFacultyAndStaff />} />
          <Route path="/edit-resource" exact component={() => <EditResource />} />
          <Route path="/academic-paper" exact component={() => <AcademicPaperResource />} />
          <Route path="/book" exact component={() => <BookResource />} />
          <Route path="/add-faculty-and-staff" exact component={() => <AddFacultyAndStaff />} />
          <Route path="/announcement-page" exact component={() => <AnnouncementPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
