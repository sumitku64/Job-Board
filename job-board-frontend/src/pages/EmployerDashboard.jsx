import React from 'react';
import { employers } from '../dummyData';

const EmployerDashboard = () => {
  return (
    <div style={{ margin: '20px auto', maxWidth: '800px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>Employer Dashboard</h1>
      <div>
        {employers.map((employer) => (
          <div
            key={employer.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '15px',
              backgroundColor: '#f9f9f9',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h3 style={{ margin: '0 0 10px 0', color: '#34495e' }}>{employer.name}</h3>
            <p style={{ margin: '5px 0', color: '#7f8c8d' }}>
              <strong>Email:</strong> {employer.email}
            </p>
            <p style={{ margin: '5px 0', color: '#7f8c8d' }}>
              <strong>Phone:</strong> {employer.phone}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerDashboard;
