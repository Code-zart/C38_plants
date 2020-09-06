import React, { useState } from 'react';
import './Widget.css';
import Button from '@material-ui/core/Button';

const Widget = () => {
  const facts = [
    'A cucumber is not a vegetable. It is a fruit as it has seeds.',
    'Aloe is a succulent that contains medicinal properties in its long and pointed leaves.',
    'If you let them, money plants can grow up to 50-60 feet tall.',
    'The best months to buy houseplants at Ikea are February, April, August, and October.',
    'Plenty of plants can thrive in a dark apartment. Here are a few: Maidenhair Fern, Moth Orchid, Prayer Plant, English Ivy',
    'Some bamboo plants can grow almost a meter in just one day.'
  ];

  const [activeFact, setActiveFact] = useState([1]);

  const handleClick = (e) => {
    const len = facts.length;
    setActiveFact(Math.floor(Math.random() * len));
  };

  return (
    <div>
      <h1>Did you know?</h1>
      <h4 className="funFact">{facts[activeFact]}</h4>
      <Button variant="contained" onClick={handleClick}>
        Tell Me More
      </Button>
    </div>
  );
};

export default Widget;
