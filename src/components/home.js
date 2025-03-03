import React from 'react';
import { Helmet } from 'react-helmet-async';
import './home.css';
import SEO from './seo';
import SchemaMarkup from './schemamarkup';

const Home = () => {
  const calculateAge = () => {
    const birthDate = new Date('2006-05-05');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    return age;
  };

  return (
    <div className="home-container">
    <SEO
        title="Nishan Nepali"
        description={`Welcome! My name is Nishan Nepali, and I'm a passionate and driven individual navigating the dynamic landscape of adolescence. At the age of ${calculateAge()}, I find myself on the brink of adulthood, eagerly embracing the opportunities and challenges that come my way.`}
        keywords="Nishan Nepali, Portfolio, Nishan Nepali Portfolio, Nishan, About Nishan Nepali, Surkhet, Nepal, Photography, Nature Exploration, Coding, Economics, Computer Science, Academic Excellence, Lifelong Learning"
        canonical="https://nishannepali.com.np/"
        image="images/profile.jpg"
      />
        <SchemaMarkup />
      <div className="profile-section">
        <img src="images/eye.JPG" alt="Nishan Nepali" className="profile-photo" />
        <h1>Nishan Nepali</h1>
<hr className="divider" />
<h2>About Me</h2>
<p>Welcome! My name is Nishan Nepali, and I'm a passionate and driven individual navigating the dynamic landscape of adolescence. At the age of {calculateAge()}, I find myself on the brink of adulthood, eagerly embracing the opportunities and challenges that come my way.</p>
<p>Born and raised in the scenic district of Surkhet, Nepal, I am fortunate to call this breathtaking region my home. Surrounded by lush greenery, majestic mountains, and vibrant culture, I draw constant inspiration from the beauty of my surroundings.</p>
<p>In addition to my academic pursuits, I am deeply passionate about three main interests: photography, exploring nature, and coding. These pursuits serve as the cornerstone of my identity, allowing me to express myself creatively, stay active, and engage with the ever-evolving world of technology.</p>
<p>Photography, in particular, holds a special place in my heart. Through the lens of my camera, I strive to capture the essence of life's fleeting moments – from the subtle beauty of nature to the raw emotions of human experience. Each photograph is a testament to my curiosity and appreciation for the world around me.</p>
<p>When I'm not behind the camera, you'll often find me exploring the great outdoors. I cherish every moment spent in nature, whether I'm hiking through lush forests, climbing mountain trails, or simply enjoying the tranquility of a serene landscape. Exploring nature offers me a sense of freedom, adventure, and connection with the world around me.</p>
<p>In addition to my love for photography and nature, I am equally enamored with the world of coding. As a self-taught programmer, I am constantly honing my skills and exploring new technologies. From building websites to developing mobile apps, coding allows me to transform my ideas into reality and make a positive impact in the digital realm.</p>
<p>Beyond my personal interests, I am deeply committed to academic excellence and lifelong learning. As a dedicated student, I approach each day with a thirst for knowledge and a desire to expand my horizons. Whether I'm studying mathematics, literature, computer science, or economics, I strive to challenge myself and push the boundaries of my intellect.</p>
<p>I have a strong interest in economics and computer science, and I am determined to pursue an economics degree in the future. This field fascinates me because it blends analytical thinking with real-world applications, allowing me to understand and address complex societal issues.</p>
<p>Looking towards the future, my aspirations are limitless. I envision a world where creativity, innovation, and compassion reign supreme – a world where individuals are empowered to pursue their passions and make a meaningful difference in the lives of others.</p>
<p>In conclusion, I am a young individual with a zest for life and a hunger for adventure. Through my photography, exploration of nature, coding, and academic pursuits, I seek to leave a lasting impact on the world around me. Join me on this journey of discovery, exploration, and personal growth as we embark on the exciting path that lies ahead.</p>

      </div>
    </div>
  );
};

export default Home;
