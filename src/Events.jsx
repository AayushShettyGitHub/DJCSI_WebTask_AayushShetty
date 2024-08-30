import React from 'react';

const events = [
  {
    title: 'Coding Bootcamp',
    date: 'September 10, 2024',
    description: 'Join our intensive coding bootcamp to sharpen your programming skills.',
    link: '#',
    image: 'https://via.placeholder.com/300x200.png?text=Coding+Bootcamp'
  },
  {
    title: 'Hackathon 2024',
    date: 'October 5, 2024',
    description: 'Participate in our 24-hour hackathon and build innovative projects.',
    link: '#',
    image: 'https://via.placeholder.com/300x200.png?text=Hackathon+2024'
  },
  {
    title: 'Tech Conference',
    date: 'November 12, 2024',
    description: 'Attend talks and workshops by industry leaders at our annual tech conference.',
    link: '#',
    image: 'https://via.placeholder.com/300x200.png?text=Tech+Conference'
  }
];

const Events = () => {
  return (
    <div className="upcoming-events">
      <h2>Upcoming Events</h2>
      <div className="events-list">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p>{event.description}</p>
            <a href={event.link} className="learn-more">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
