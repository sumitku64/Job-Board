import React from 'react';
import { applications, jobs } from '../dummyData';

const CandidateDashboard = () => {
  return (
    <div style={{ margin: '20px auto', maxWidth: '800px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>Candidate Dashboard</h1>
      <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '20px', backgroundColor: '#f9f9f9' }}>
        {applications.length > 0 ? (
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {applications.map((app) => {
              const job = jobs.find((job) => job.id === app.jobId);
              return (
                <li
                  key={app.id}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '15px',
                    marginBottom: '10px',
                    border: '1px solid #e0e0e0',
                    borderRadius: '6px',
                    boxShadow: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  <h2 style={{ margin: '0 0 5px 0', color: '#34495e' }}>
                    {job ? job.title : 'Unknown Job'}
                  </h2>
                  <p style={{ margin: '0', color: '#7f8c8d' }}>
                    <strong>Company:</strong> {job ? job.company : 'Unknown Company'}
                  </p>
                  <p style={{ margin: '5px 0 0 0', color: '#7f8c8d' }}>
                    <strong>Status:</strong> {app.status || 'Pending'}
                  </p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p style={{ textAlign: 'center', color: '#7f8c8d' }}>No applications found.</p>
        )}
      </div>
    </div>
  );
};

export default CandidateDashboard;
