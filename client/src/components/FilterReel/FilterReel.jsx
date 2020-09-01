import React from 'react';
import './FilterReel.css';
import FilterReelFilter from '../FilterReelFilter/FilterReelFilter';

const FilterReel = () => {
  return (
    <div className="filterReel">
      <FilterReelFilter
        image="https://images.unsplash.com/photo-1519241923167-9c69efe2d7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="House Plants"
      />
      <FilterReelFilter
        image="https://images.unsplash.com/photo-1519241923167-9c69efe2d7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="House Plants"
      />
      <FilterReelFilter
        image="https://images.unsplash.com/photo-1519241923167-9c69efe2d7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="House Plants"
      />
      <FilterReelFilter
        image="https://images.unsplash.com/photo-1519241923167-9c69efe2d7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="House Plants"
      />
    </div>
  );
};

export default FilterReel;
