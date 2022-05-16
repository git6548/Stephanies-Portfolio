import React from 'react';
import avatar from '../../assets/images/avatar-image.jpg';

export default function About() {
  return (
    <div>
      <h2>About</h2>
      <img src={avatar} alt="avatar" />
      <p>
        Hello, my name is Stephanie Anderson.
      </p>
    </div>
  );
}
