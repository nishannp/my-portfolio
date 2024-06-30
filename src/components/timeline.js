import React from 'react';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import styled from 'styled-components';
import SEO from './seo';

const StyledVerticalTimeline = styled(VerticalTimeline)`
  &::before {
    background: linear-gradient(45deg, #3498db, #2ecc71);
  }
`;

const StyledVerticalTimelineElement = styled(VerticalTimelineElement)`
  .vertical-timeline-element-content {
    border-radius: 10px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    background: #fff;
    padding: 25px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }
  }

  .vertical-timeline-element-date {
    color: #2ecc71;
    font-weight: bold;
    font-size: 1.2em;
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

  .event-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 15px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .vertical-timeline-element-title {
    font-size: 1.6em;
    color: #2980b9;
    margin-bottom: 10px;
  }

  .vertical-timeline-element-description {
    font-size: 1em;
    color: #7f8c8d;
  }
`;

const TimelineContainer = styled.div`
  padding: 20px;
  background: #ecf0f1;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`;

const Timeline = ({ events }) => {
  return (
    <TimelineContainer>
      <SEO 
        title="Timeline - Nishan Nepali"
        description="Follow the timeline of Nishan Nepali's journey, highlighting significant milestones, projects, and achievements in photography, coding, and academic pursuits."
        keywords="Nishan Nepali, Timeline, Journey, Milestones, Achievements, Photography, Coding, Surkhet, Nepal"
        canonical="https://nishannepali.com.np/timeline"
      />
      <StyledVerticalTimeline>
        {events.map((event, index) => (
          <StyledVerticalTimelineElement
            key={index}
            date={event.date}
          >
            <h3 className="vertical-timeline-element-title">{event.title}</h3>
            <p className="vertical-timeline-element-description">{event.description}</p>
            {event.image && (
              <LazyLoadImage
                src={event.image}
                alt={event.description}
                className="event-image"
                effect="blur"
              />
            )}
          </StyledVerticalTimelineElement>
        ))}
      </StyledVerticalTimeline>
    </TimelineContainer>
  );
};

export default Timeline;
