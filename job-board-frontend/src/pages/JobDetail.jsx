import React from 'react';
import { useParams } from 'react-router-dom';
import { jobs } from '../dummyData';

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  if (!job) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: '#e74c3c' }}>Job Not Found</h1>
        <p style={{ color: '#7f8c8d' }}>The job you are looking for does not exist or may have been removed.</p>
      </div>
    );
  }

  return (
    <div
      style={{
        margin: '20px auto',
        maxWidth: '800px',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h1 style={{ color: '#2c3e50', marginBottom: '10px' }}>{job.title}</h1>
      <p style={{ margin: '10px 0', color: '#34495e', fontWeight: 'bold' }}>
        {job.company} - {job.location}
      </p>
      <p style={{ margin: '10px 0', color: '#7f8c8d', lineHeight: '1.6' }}>{job.description}</p>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <button
          style={{
            backgroundColor: '#27ae60',
            color: '#fff',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#1e8449')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#27ae60')}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
