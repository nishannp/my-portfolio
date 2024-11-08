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

// Update the Filter section in your Timeline component
const Timeline = ({ events }) => {
  const [selectedYear, setSelectedYear] = useState('All');
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Extract years and sort them in descending order (most recent first)
  const years = ['All', ...new Set(events.map(event => 
    event.date.split(' ')[1] || event.date
  ))].sort((a, b) => b - a);

  const filteredEvents = selectedYear === 'All' 
    ? events 
    : events.filter(event => event.date.includes(selectedYear));

  // ... rest of your existing code ...

  return (
    <TimelineContainer>
      <LoadingIndicator progress={scrollProgress} />
      <SEO {...yourSEOProps} />

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
        {/* ... rest of your existing timeline code ... */}
      </StyledVerticalTimeline>
    </TimelineContainer>
  );
};