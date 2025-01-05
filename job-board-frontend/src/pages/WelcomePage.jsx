import React from 'react';
import FeaturedJobs from '../components/FeaturedJobs';

const WelcomePage = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to Job Board</h1>
      <p>Find your dream job or hire the best talent.</p>
      <FeaturedJobs />
    </div>
  );
};

export default WelcomePage;
