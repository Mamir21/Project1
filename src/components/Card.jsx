import React from 'react';

function Card({ title, description, date, link }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Date:</strong> {date}</p>
      <a href={link} className="button">Learn More</a>
    </div>
  )
}

export default Card;