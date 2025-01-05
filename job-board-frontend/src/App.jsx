import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WelcomePage from './pages/WelcomePage';
import JobListings from './pages/JobListings';
import JobDetail from './pages/JobDetail';
import EmployerDashboard from './pages/EmployerDashboard';
import CandidateDashboard from './pages/CandidateDashboard';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/jobs/:id" element={<JobDetail />} />
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/candidate-dashboard" element={<CandidateDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
