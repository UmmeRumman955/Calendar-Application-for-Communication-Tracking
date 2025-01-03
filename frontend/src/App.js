import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import CompanyDetails from './components/CompanyDetails'; // Create this component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/company/:id" element={<CompanyDetails />} />
            </Routes>
        </Router>
    );
}

export default App;
