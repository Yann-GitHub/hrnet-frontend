import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import { Routes, Route, Router } from "react-router"
import Error from "./pages/Error"
import Home from "./pages/Home"
import EmployeeList from "./pages/EmployeeList"

function App() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee-list" element={<EmployeeList />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;