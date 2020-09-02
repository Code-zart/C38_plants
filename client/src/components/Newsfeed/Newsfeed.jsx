import React, { useEffect, useContext } from 'react';
import './Newsfeed.css';
import { AppContext } from '../../context/AppContext';
import FilterReel from '../FilterReel/FilterReel';
import Question from '../Question/Question';
import Post from '../Post/Post';
import axios from 'axios';

const Newsfeed = () => {
  const { setPosts, filteredPosts, setFilteredPosts } = useContext(AppContext);

  useEffect(() => {
    // get all questions
    axios
      .get('/questions', { WithCredentials: true })
      .then((res) => {
        setPosts(res.data);
        setFilteredPosts(res.data);
      })
      .catch((error) => console.log('Error:', error));
  }, [setPosts, setFilteredPosts]);
  return (
    <div className="feed">
      <FilterReel />
      <Question />

      <Post posts={filteredPosts} />
    </div>
  );
};

export default Newsfeed;
