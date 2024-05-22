import React, { useState } from 'react';
import './gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    // Add paths to your images here
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    'images/photo4.jpg',
    'images/photo5.jpg',
    'images/photo6.jpg',
    'images/photo7.jpg',
    'images/photo8.jpg',
    'images/photo9.jpg',
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery ${index + 1}`} onClick={() => openImage(image)} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="popup" onClick={closeImage}>
          <span className="close" onClick={closeImage}>&times;</span>
          <img src={selectedImage} alt="Selected" className="popup-image" />
        </div>
      )}
    </div>
  );
};

export default Gallery;
