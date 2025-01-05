import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../dummyData';

const JobListings = () => {
  const [search, setSearch] = useState('');

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ margin: '20px auto', maxWidth: '900px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>Job Listings</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search jobs..."
          style={{
            width: '100%',
            padding: '10px',
            fontSize: '16px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxSizing: 'border-box',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filteredJobs.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#7f8c8d' }}>No jobs found matching your search.</p>
      ) : (
        filteredJobs.map((job) => (
          <div
            key={job.id}
            style={{
              backgroundColor: '#fff',
              border: '1px solid #ddd',
              borderRadius: '8px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              marginBottom: '15px',
              padding: '20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <h5 style={{ margin: '0 0 10px 0', color: '#34495e' }}>{job.title}</h5>
              <p style={{ margin: '0', color: '#7f8c8d' }}>
                {job.company} - {job.location}
              </p>
            </div>
            <Link
              to={`/jobs/${job.id}`}
              style={{
                backgroundColor: '#27ae60',
                color: '#fff',
                padding: '10px 20px',
                fontSize: '16px',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textDecoration: 'none',
                textAlign: 'center',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = '#1e8449')}
              onMouseOut={(e) => (e.target.style.backgroundColor = '#27ae60')}
            >
              View Job
            </Link>
          </div>
        ))
      )}
    </div>
  );
};

export default JobListings;
