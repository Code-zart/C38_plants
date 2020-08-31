import React from 'react';
import './Newsfeed.css';
import FilterReel from '../FilterReel/FilterReel';
import Question from '../Question/Question';
import Post from '../Post/Post';
import picture from '../../images/Emi.jpg';
import julie from '../../images/julie.jpg';
import ryan from '../../images/ryan.jpg';

const Newsfeed = () => {
  return (
    <div className="feed">
      <FilterReel />
      <Question />
      <Post
        profilePic={picture}
        message="wow! look at this baby!"
        timestamp="this is a timestamp"
        username="aaaanamaria"
        image="https://images.unsplash.com/photo-1549046527-60bd826f9f9f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1326&q=80"
      />
      <Post
        profilePic={julie}
        message="Hello, everyone!"
        timestamp="this is a timestamp"
        username="lalalababe"
        image="https://images.unsplash.com/photo-1523301551780-cd17359a95d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80"
      />
      <Post
        profilePic={ryan}
        message="yo yo it's the cool kids club"
        timestamp="this is a timestamp"
        username="Ryry"
        image="https://images.unsplash.com/photo-1520917419024-25218de874f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      />
    </div>
  );
};

export default Newsfeed;
