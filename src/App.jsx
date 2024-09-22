import React from 'react';
import './App.css';
import Card from './components/Card';

const fitnessEvents = [
  { title: 'Basketball Game', description: 'Join us for a community basketball game!', date: 'September 25th', link: 'https://www.nba.com' },
  { title: 'Hackathon', description: 'Participate in a 48-hour coding challenge.', date: 'October 10th', link: 'https://mlh.io/seasons/2024/events' },
  { title: 'Charity Run', description: 'Participate in a charity 5k run for a good cause.', date: 'October 30th', link: 'https://www.runnersworld.com/races-places/g20856616/top-charity-races/' },
  { title: 'Yoga Class', description: 'Relax and rejuvenate with a free yoga class.', date: 'November 19th', link: 'https://www.yogawithadriene.com/' },
  { title: 'Photography Workshop', description: 'Learn photography tips from professionals.', date: 'November 8th', link: 'https://www.photographycourse.net/' }
]

const foodEvents = [
  { title: 'Cooking Workshop', description: 'Learn to cook healthy meals on a budget.', date: 'November 5th', link: 'https://www.cookingclass.com' },
  { title: 'Tech Meetup', description: 'Network with local tech enthusiasts.', date: 'October 20th', link: 'https://www.meetup.com/topics/tech/' },
  { title: 'Community Clean-Up', description: 'Join us in cleaning up our local park.', date: 'November 12th', link: 'https://www.nationalcleanupday.org/' },
  { title: 'Holiday Market', description: 'Shop for unique gifts at the holiday market.', date: 'December 5th', link: 'https://www.christmasmarkets.com/' },
  { title: 'Music Festival', description: 'Enjoy live music by local bands.', date: 'December 1st', link: 'https://www.musicfestivalwizard.com' }
]

const educationEvents = [
  { title: 'Coding Bootcamp', description: 'Sign up for a 6-week coding bootcamp to learn web development.', date: 'January 10th', link: 'https://www.codingbootcamps.io' },
  { title: 'Book Club', description: 'Join the monthly book club discussion.', date: 'November 25th', link: 'https://www.goodreads.com/group' },
  { title: 'Art Exhibition', description: 'Explore the works of local artists.', date: 'December 15th', link: 'https://www.artsy.net' },
  { title: 'Career Fair', description: 'Meet recruiters and apply for jobs at the career fair.', date: 'October 18th', link: 'https://www.careerfairplus.com' },
  { title: 'Film Screening', description: 'Watch a free screening of an award-winning film.', date: 'October 28th', link: 'https://www.sundance.org' }
]

function App() {
  return (
    <div className="app-container">
      <h1>Community Events Board</h1>
      
      {/* Fitness Section */}
      <div className="section">
        <h3>Fitness</h3>
        <div className="card-list">
          {fitnessEvents.map((event, index) => (
            <Card key={index} title={event.title} description={event.description} date={event.date} link={event.link} />
          ))}
        </div>
      </div>

      {/* Food Section */}
      <div className="section">
        <h3>Food</h3>
        <div className="card-list">
          {foodEvents.map((event, index) => (
            <Card key={index} title={event.title} description={event.description} date={event.date} link={event.link} />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div className="section">
        <h3>Education</h3>
        <div className="card-list">
          {educationEvents.map((event, index) => (
            <Card key={index} title={event.title} description={event.description} date={event.date} link={event.link} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;