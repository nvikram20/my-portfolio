import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaLeetcode } from 'react-icons/fa';
import "./SocialIcons";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/niharikavikram/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/nvikram20" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="mailto:niharikavikram202@gmail.com">
        <FaEnvelope />
      </a>
      {/* <a href="https://leetcode.com/your-profile" target="_blank" rel="noopener noreferrer">
        <FaLeetcode />
      </a> */}
    </div>
  );
};

export default SocialIcons;
