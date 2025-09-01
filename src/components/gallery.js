import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './gallery.css';
import SEO from './seo';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
   
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/college_day.jpg',
    'images/memorable_cycle_ride_2024.jpg',
  
     'images/bhaktapur-2.jpg',
    'images/nishan_solo_profile.png',
      'images/photo5.jpg',
    'images/nishan_in_gurasey.jpeg',
    'images/nishan_solo.jpeg',
    'images/photo6.jpg',
    'images/photo7.jpg',
   
    'images/viewchula.jpeg',

    'images/bhaktapur-1.jpg',
    'images/cycling_nishan.jpeg',

    
       'images/rhino_with_nishan.jpeg',
    'images/pashupati_visit_2024.jpg',
    'images/photo4.jpg',
         'images/photo3.jpg',
         
  ];

  const openImage = (image) => {
    setSelectedImage(image);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <SEO 
        title="Gallery - Nishan Nepali"
        description="Explore the photography gallery of Nishan Nepali, showcasing stunning captures of nature, landscapes, and moments of life. Discover the beauty through the lens."
        keywords="Nishan Nepali, Nishan Nepali Gallery, Photography, Gallery, Nature Photography, Landscape Photography, Surkhet, Nepal, Portrait"
        canonical="https://nishannepali.com.np/gallery"
         image="images/photo4.jpg"
      />
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <LazyLoadImage
              src={image}
              alt={`Nishan Nepali Gallery Image ${index + 1}`}
              effect="blur"
              onClick={() => openImage(image)}
            />
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