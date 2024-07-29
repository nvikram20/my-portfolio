import React from 'react';
import './WorkExperience.css'; // Assuming you have a CSS file for styling

const WorkExperience = () => {
  return (
    <div className="experience-container" id="experience">
      <h2>Experience</h2>
      <div className="education-section">
        <h3>Education</h3>
        <p>Details about your education...</p>
      </div>
      <div className="work-section">
        <h3>Work</h3>
        <p>Details about your work experience...</p>
        {/* Add temporary content to increase the height */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Vivamus maximus ultricies pulvinar. Mauris varius dolor vel orci suscipit, et posuere libero blandit. Integer a nibh lacus. Nullam varius lectus eu leo faucibus, nec interdum mauris congue. Nullam posuere purus id odio vestibulum scelerisque. Nulla facilisi. Donec convallis magna vel elit interdum, a gravida leo sagittis. Vestibulum in purus sed libero fermentum elementum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Vivamus maximus ultricies pulvinar. Mauris varius dolor vel orci suscipit, et posuere libero blandit. Integer a nibh lacus. Nullam varius lectus eu leo faucibus, nec interdum mauris congue. Nullam posuere purus id odio vestibulum scelerisque. Nulla facilisi. Donec convallis magna vel elit interdum, a gravida leo sagittis. Vestibulum in purus sed libero fermentum elementum.</p>
      </div>
    </div>
  );
};

export default WorkExperience;
