import React from 'react';
import './Rating.styles.css';

const Rating = ({ children }) => {
  const generateStars = (num) =>
    '★'.repeat(Math.round(num)) + '☆'.repeat(5 - Math.round(num));

  return <div class="Rating">{generateStars(children)}</div>;
};

export default Rating;
