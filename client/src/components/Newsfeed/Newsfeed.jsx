import React from 'react';
import './Newsfeed.css';
import FilterReel from '../FilterReel/FilterReel';
import Question from '../Question/Question';

const Newsfeed = () => {
  return (
    <div className="feed">
      <FilterReel />
      <Question />

      {/* <Post /> */}
    </div>
  );
};

export default Newsfeed;
