import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from './pages/Error';
import Home from './pages/Home';
import EmployeeList from './pages/EmployeeList';
import CreateEmployee from './pages/CreateEmployee';
import SharedLayout from './pages/SharedLayout';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/employee-list" element={<EmployeeList />} />
                    <Route
                        path="/create-employee"
                        element={<CreateEmployee />}
                    />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
