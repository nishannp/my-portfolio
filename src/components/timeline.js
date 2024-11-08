import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import SEO from './seo';
// Styled Components
const TimelineContainer = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #ecf0f1 0%, #f5f6fa 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  margin: 20px 0 40px 0;
  padding: 0 20px;
  max-width: 1200px;
  width: 100%;
`;

// New styled components for the filter section
const FilterSection = styled.div`
  margin: 40px auto;
  max-width: 1200px;
  width: 95%;
`;

const FilterHeader = styled.h2`
  text-align: center;
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 20px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const YearSlider = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding: 15px 5px;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  position: relative;
  
  &::-webkit-scrollbar {
    display: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #e0e0e0;
    z-index: 1;
  }
`;

const YearButton = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 10px 20px;
  font-size: 1.1rem;
  color: ${props => props.active ? '#2980b9' : '#95a5a6'};
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  font-weight: ${props => props.active ? '600' : '400'};

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 0;
    width: 100%;
    height: 3px;
    background: ${props => props.active ? 'linear-gradient(45deg, #3498db, #2ecc71)' : 'transparent'};
    transition: all 0.3s ease;
    z-index: 2;
  }

  &:hover {
    color: #2980b9;
    
    &::after {
      background: ${props => props.active ? 'linear-gradient(45deg, #3498db, #2ecc71)' : '#e0e0e0'};
    }
  }
`;

const FilterInfo = styled.div`
  text-align: center;
  margin-top: 20px;
  color: #7f8c8d;
  font-size: 0.9rem;
  
  span {
    color: #2980b9;
    font-weight: 600;
  }
`;

const StyledVerticalTimeline = styled(VerticalTimeline)`
  &::before {
    background: linear-gradient(45deg, #3498db, #2ecc71);
    width: 4px;
  }

  .vertical-timeline-element-icon {
    box-shadow: 0 0 0 4px #3498db, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05);
  }
`;

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    background: white;
    padding: 25px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(45deg, #3498db, #2ecc71);
    }

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    }
  }

  .vertical-timeline-element-date {
    color: #2ecc71;
    font-weight: bold;
    font-size: 1.2em;
    text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
    
    @media (max-width: 1169px) {
      margin-top: 15px;
      color: #2ecc71 !important;
    }
  }

  .event-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 15px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  }

  .vertical-timeline-element-title {
    font-size: 1.6em;
    color: #2980b9;
    margin-bottom: 10px;
    font-weight: 600;
  }

  .vertical-timeline-element-description {
    font-size: 1em;
    color: #7f8c8d;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .vertical-timeline-element-content {
      padding: 20px;
    }
    .vertical-timeline-element-title {
      font-size: 1.4em;
    }
    .vertical-timeline-element-description {
      font-size: 0.9em;
    }
  }
`;

const TimelineIcon = styled.div`
  background: linear-gradient(45deg, #3498db, #2ecc71);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
`;

const LoadingIndicator = styled.div`
  width: 100%;
  height: 3px;
  background: linear-gradient(45deg, #3498db, #2ecc71);
  position: fixed;
  top: 0;
  left: 0;
  transform: scaleX(${props => props.progress});
  transform-origin: left;
  transition: transform 0.3s ease;
`;


const ImageContainer = styled.div`
  cursor: pointer;
  overflow: hidden;
  border-radius: 10px;
  position: relative;
  
  &::after {
    content: '🔍';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    font-size: 2rem;
    color: white;
    text-shadow: 0 2px 5px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    opacity: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.4);
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    &::after {
      transform: translate(-50%, -50%) scale(1);
      opacity: 1;
    }
    &::before {
      opacity: 1;
    }
  }
`;

const Timeline = ({ events }) => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightbox, setLightbox] = useState({
    open: false,
    index: 0
  });

  const years = ['All', ...new Set(events.map(event => 
    event.date.split(' ')[1] || event.date
  ))].sort((a, b) => b - a);

  const filteredEvents = selectedYear === 'All' 
    ? events 
    : events.filter(event => event.date.includes(selectedYear));

  // Prepare slides for lightbox
  const slides = filteredEvents
    .filter(event => event.image)
    .map(event => ({
      src: event.image,
      alt: event.title,
      title: event.title,
      description: event.description
    }));

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight);
      setScrollProgress(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImageClick = (imageUrl) => {
    const imageIndex = slides.findIndex(slide => slide.src === imageUrl);
    setLightbox({
      open: true,
      index: imageIndex
    });
  };

  return (
    <TimelineContainer>
      <LoadingIndicator progress={scrollProgress} />
      <SEO
        title="Timeline - Nishan Nepali"
        description="Follow the timeline of Nishan Nepali's journey, highlighting significant milestones, projects, and achievements in photography, coding, and academic pursuits."
        keywords="Nishan Nepali, Timeline, Journey, Milestones, Achievements, Photography, Coding, Surkhet, Nepal"
        canonical="https://nishannepali.com.np/timeline"
      />

      <FilterSection>
        <FilterHeader>My Journey Through Time</FilterHeader>
        <YearSlider>
          {years.map(year => (
            <YearButton
              key={year}
              active={selectedYear === year}
              onClick={() => setSelectedYear(year)}
            >
              {year === 'All' ? 'All Years' : year}
            </YearButton>
          ))}
        </YearSlider>
        <FilterInfo>
          Showing <span>{filteredEvents.length}</span> {filteredEvents.length === 1 ? 'memory' : 'memories'}
          {selectedYear !== 'All' && <span> from {selectedYear}</span>}
        </FilterInfo>
      </FilterSection>

      <StyledVerticalTimeline>
        {filteredEvents.map((event, index) => (
          <StyledVerticalTimelineElement
            key={index}
            date={event.date}
            icon={<TimelineIcon>{event.date.slice(-2)}</TimelineIcon>}
            iconStyle={{ background: 'linear-gradient(45deg, #3498db, #2ecc71)', color: '#fff' }}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <p className="vertical-timeline-element-description">{event.description}</p>
            {event.image && (
              <ImageContainer onClick={() => handleImageClick(event.image)}>
                <LazyLoadImage
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                  effect="blur"
                  placeholder={
                    <div style={{ 
                      background: '#f0f0f0',
                      width: '100%',
                      height: '200px',
                      borderRadius: '10px'
                    }} />
                  }
                />
              </ImageContainer>
            )}
          </StyledVerticalTimelineElement>
        ))}
      </StyledVerticalTimeline>

      <Lightbox
  open={lightbox.open}
  close={() => setLightbox({ open: false, index: 0 })}
  index={lightbox.index}
  slides={slides}
  render={{
    slide: ({ slide }) => (
      <div style={{ position: 'relative' }}>
        <img 
          src={slide.src} 
          alt={slide.alt} 
          style={{ 
            maxHeight: '90vh', 
            width: 'auto', 
            maxWidth: '90vw', // Ensures it fits within mobile screen width
            height: 'auto', // Maintains aspect ratio
          }} 
        />
        {slide.title && (
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(0,0,0,0.7)',
            color: 'white',
            padding: '10px',
            textAlign: 'center',
            fontSize: '0.9em' // Smaller font size for mobile
          }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2em' }}>{slide.title}</h3>
            <p style={{ margin: 0 }}>{slide.description}</p>
          </div>
        )}
      </div>
    )
  }}
/>

    </TimelineContainer>
  );
};

export default Timeline;