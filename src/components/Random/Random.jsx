import React from 'react';

const Random = (props) => {
  const { min, max } = props;

  const randNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <div className="BoxRandom box">
      <p>
        Random value between {min} and {max} =&gt; {randNumber(min,max)}
      </p>
    </div>
  );
};

export default Random;
