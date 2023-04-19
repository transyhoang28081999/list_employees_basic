import './App.scss';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="/">
              <Route index element={<ListEmployeesComponent />} />
              <Route path="/:id" element={<AddEmployeeComponent />} />
            </Route>
          </Routes>
          <FooterComponent />
        </Router>
      </header>
    </div>
  );
}

export default App;
