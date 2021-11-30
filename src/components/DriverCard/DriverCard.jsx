import React from 'react';
import './DriverCard.styles.css';
import Rating from '../Rating/Rating';

const DriverCard = (props) => {
  const { name, rating, img, car } = props;

  return (
    <>
      <div class="DriverCard">
        <img class="left" src={img} alt={name} />
        <div class="right">
          <h2>{name}</h2>
          <Rating class="Rating">{rating}</Rating>
          <p>
            {car.model} - {car.licensePlate}
          </p>
        </div>
      </div>
    </>
  );
};

export default DriverCard;
