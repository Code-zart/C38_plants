import React from 'react';
import './FilterReelFilter.css';

const FilterReelFilter = ({ image, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="filterReelFilter"
    >
      <h4>{title}</h4>
    </div>
  );
};

export default FilterReelFilter;
