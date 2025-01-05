import React from 'react';
import { Link } from 'react-router-dom';
import { jobs } from '../dummyData';

const FeaturedJobs = () => {
  return (
    <div className="row mt-4">
      {jobs.slice(0, 2).map((job) => (
        <div className="col-md-6" key={job.id}>
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">{job.title}</h5>
              <p className="card-text">{job.company} - {job.location}</p>
              <Link to={`/jobs/${job.id}`} className="btn btn-primary">View Job</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedJobs;
