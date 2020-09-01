import React from 'react';
import './FilterReel.css';
import FilterReelFilter from '../FilterReelFilter/FilterReelFilter';

const FilterReel = () => {
  return (
    <div className="filterReel">
      <FilterReelFilter
        image="https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="Plants"
      />
      <FilterReelFilter
        image="https://images.unsplash.com/photo-1523301551780-cd17359a95d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
        title="Garden"
      />
      <FilterReelFilter
        image="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="Herbs"
      />
      <FilterReelFilter
        image="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        title="Veggies"
      />
      <FilterReelFilter
        image="https://images.unsplash.com/photo-1520917419024-25218de874f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        title="Cacti"
      />
    </div>
  );
};

export default FilterReel;
