import React from 'react';
import './Certifications.css';
// import certificateImage from '../Assets/certificate.png'; // Example certificate image

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Solutions Architect',
    //   imageUrl: certificateImage,
    },
    {
      id: 2,
      name: 'Google Cloud Professional Data Engineer',
    //   imageUrl: certificateImage,
    },
  ];

  return (
    <div className="certifications-container">
      {certifications.map(cert => (
        <div key={cert.id} className="certification">
          {/* <img src={cert.imageUrl} alt={cert.name} className="certification-image" /> */}
          <p>{cert.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
