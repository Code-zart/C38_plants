import React from 'react';
import './Newsfeed.css';
import FilterReel from '../FilterReel/FilterReel';
import Question from '../Question/Question';
import Post from '../Post/Post';

const Newsfeed = () => {
  return (
    <div className="feed">
      <FilterReel />
      <Question />

      <Post
        // profilePic={ryan}
        message="yo yo it's the cool kids club"
        timestamp="this is a timestamp"
        username="Ryry"
        image="https://images.unsplash.com/photo-1520917419024-25218de874f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
};

export default Newsfeed;
