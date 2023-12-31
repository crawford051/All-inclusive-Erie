import React from 'react';
import FeedbackForm from '../components/FeedbackForm'; // Update the path accordingly

const SuccessPage = () => {
  return (
    <main>
      <h1>Welcome to All Inclusive Erie!</h1>
      <p>Our goal is for all individuals with diverse mobility needs in Erie, including those with physical disabilities, seniors 
        facing mobility challenges, and their caregivers to gain insight on all the accessible places Erie has to offer.</p>
      <h2 style={{ color: 'darkblue', textDecoration: 'underline' }}>We want to Learn even more about Erie, PA</h2>
      <p>If you have found an accessible place in Erie that is not in our database or you have found our information to be
        out-dated or incorrect, please let us know by filling out the form below.
      </p>
      <FeedbackForm />
    </main>
  );
};

export default SuccessPage;
