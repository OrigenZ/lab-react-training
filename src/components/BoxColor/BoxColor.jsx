import React, { useState } from 'react';
import './BoxColor.styles.css';

const BoxColor = (props) => {
  const { r, g, b } = props;
  const [color, setColor] = useState(`rgb(${r},${g},${b})`);

  const rgbToHex = (r, g, b) => `#${hex(r)}${hex(g)}${hex(b)}`;

  const hex = (c) =>
    c.toString(16).length === 1 ? '0' + c.toString(16) : c.toString(16);

  return (
    <div className="BoxColor box" style={{ backgroundColor: color }}>
      <p>{color}</p>
      <p>{rgbToHex(r, g, b)}</p>
    </div>
  );
};

export default BoxColor;
