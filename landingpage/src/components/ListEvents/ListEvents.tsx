// En tu componente ListEvents.jsx
import React from 'react';
import './ListEvents.css';

const ListEvents = ({ events }) => {
  return (
    <div className="events-grid">
      {Array.isArray(events) ? (
        events.map((event) => (
          <div key={event.id} className="event-card">
            <p className="event-title">{event.title}</p>
            <p className="event-date">Date: {event.date}</p>
            <p className="event-place">Place: {event.place}</p>
            <p className="event-price">Price: {event.price}</p>

            <button
              className="event-button"
              onClick={() => handleButtonClick(event.id)}
            >
              See more
            </button>
          </div>
        ))
      ) : (
        <div>No events to display.</div>
      )}
    </div>
  );
};

export default ListEvents;
