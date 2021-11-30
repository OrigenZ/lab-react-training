import React from 'react';
import './idCard.styles.css';

const IdCard = (props) => {
  const { firstName, lastName, gender, height, birth, picture } = props;



  return (
    <div className="IdCard box">
      <img src={picture} alt={firstName} />
      <div>
        <p>
          <span>First name: </span> {firstName}
        </p>
        <p>
          <span>Last name: </span> {lastName}
        </p>
        <p>
          <span>Gender: </span> {gender}
        </p>
        <p>
          <span>Height: </span> {height}
        </p>
        <p>
          <span>Birth: </span> {birth.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default IdCard;
