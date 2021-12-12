import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import EmployeList from "./components/employes-list.component";
import EditEmploye from "./components/edit-employe.component";
import CreateEmploye from "./components/create-employe.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={EmployeList} />
      <Route path="/edit/:id" component={EditEmploye} />
      <Route path="/create" component={CreateEmploye} />
      </div>
    </Router>
  );
}

export default App;
