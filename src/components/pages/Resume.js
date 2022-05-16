import React from 'react';
import currentResume from '../../assets/images/Resume.jpg'

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p className = "resumeImage">
      <img src={currentResume} alt="Resume" />
      </p>
    </div>
  );
}
