import React, { useContext } from 'react';
import './Newsfeed.css';
import Post from '../Post/Post';
import FilterReel from '../FilterReel/FilterReel';
import { AppContext } from '../../context/AppContext';
import CreateQuestion from '../CreateQuestion/CreateQuestion';

const Newsfeed = () => {
  const { filteredQuestions } = useContext(AppContext);

  return (
    <div className="feed">
      <FilterReel />
      <CreateQuestion />
      <Post questions={filteredQuestions} />
    </div>
  );
};

export default Newsfeed;
