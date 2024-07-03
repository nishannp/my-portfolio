import React from 'react';
import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Nishan Nepali",
    "url": "https://nishannepali.com.np/",
    "image": "https://nishannepali.com.np/images/profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/nishannepali/",
      "https://github.com/nishannepali",
      "https://twitter.com/iamnishannepali"
    ],
    "jobTitle": "Student",
    "description": "Nishan Nepali is a passionate and driven individual navigating the dynamic landscape of adolescence. At the age of 17, he is eagerly embracing opportunities and challenges in fields such as photography, nature exploration, coding, economics, and computer science.",
    "birthDate": "2006-05-05",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Surkhet",
      "addressCountry": "Nepal"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Your School Name"
    },
    "knowsAbout": [
      "Photography",
      "Nature Exploration",
      "Coding",
      "Economics",
      "Computer Science"
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schemaData)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
