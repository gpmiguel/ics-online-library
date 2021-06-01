import './css/main.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//COMPONENTS
import MainPage from './components/main-page/main-page';
import AdminMainPage from './components/admin-dashboard/admin-main-page';
import AddAcademicPaper from './components/add-academic-paper/add-academic-paper';
import AddBook from './components/add-book/add-book';
import SearchPage from './components/search-page/search';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={() => <MainPage />} />
          <Route path="/admin-dashboard" exact component={() => <AdminMainPage />} />
          <Route path="/add-academic-paper" exact component={() => <AddAcademicPaper />} />
          <Route path="/add-book" exact component={() => <AddBook />} />
          <Route path="/search-results" exact component={() => <SearchPage />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
