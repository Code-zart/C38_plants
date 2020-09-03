import React, { useEffect, useContext } from 'react';
import './Newsfeed.css';
import { AppContext } from '../../context/AppContext';
import FilterReel from '../FilterReel/FilterReel';
import Question from '../Question/Question';
import Post from '../Post/Post';
import axios from 'axios';

const Newsfeed = () => {
  const { filteredQuestions } = useContext(AppContext);

  return (
    <div className="feed">
      <FilterReel />
      <Question />
      <Post questions={filteredQuestions} />
    </div>
  );
};

export default Newsfeed;
