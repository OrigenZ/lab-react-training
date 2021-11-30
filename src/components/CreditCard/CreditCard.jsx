import React from 'react';
import './CreditCard.styles.css';
import masterCard from '../../assets/images/master-card.svg';
import visa from '../../assets/images/visa.png';

const CreditCard = (props) => {
  const {
    type,
    number,
    expirationMonth,
    expirationYear,
    bank,
    owner,
    bgColor,
    color,
  } = props;

  const getLastFourDigits = (number) => number.split('').splice(-4).join('');
  const dynamicImage = (type) => (type.includes('Visa') ? visa : masterCard);

  return (
    <div class="CreditCard" style={{ backgroundColor: bgColor, color: color }}>
      <div class="type">
        <img src={dynamicImage(type)} alt="type" />
      </div>
      <div class="number">•••• •••• •••• {getLastFourDigits(number)}</div>
      <div class="expires-bank">
        <span>
          Expires {expirationMonth}/{expirationYear}
        </span>
        <span class="bank">{bank}</span>
      </div>
      <div class="owner">{owner}</div>
    </div>
  );
};

export default CreditCard;
