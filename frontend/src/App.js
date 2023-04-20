import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListEmployeesComponent from './components/ListEmployeesComponent';
import AddEmployeeComponent from './components/AddEmployeeComponent';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <HeaderComponent />
          <Routes>
            <Route path="">
              <Route index element={<ListEmployeesComponent />} />
              <Route path="/:id" element={<AddEmployeeComponent />} />
            </Route>
          </Routes>
          <FooterComponent />
        </Router>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default App;
