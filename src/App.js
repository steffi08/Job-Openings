import logo from './logo.svg';
import './App.css';
import HomePage from "./pages/HomePage.js";
import JobDetailsPage from "./pages/JobDetailsPage.js";
import * as ROUTES from "./constants/routes.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path={ROUTES.HOME}
          element={<HomePage />}
          exact={true}
        />
        <Route path={`${ROUTES.JOBDETAILS}/:jobId`} element={<JobDetailsPage />} />
      </Routes>
    </Router>

  );
}

export default App;
