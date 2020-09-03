import React, { useState } from 'react';
import { Avatar } from '@material-ui/core';
import './Question.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from 'axios';

const INITIAL_STATE = {
  question: ''
};
const Question = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [imageUrl, setImageUrl] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/questions/', formData, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      });
    //set's the input and image to an empty string
    setFormData(INITIAL_STATE);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="question">
      <div className="question__top">
        <Avatar />
        <form onSubmit={handleSubmit}>
          <input
            value={formData.question}
            id="question"
            label="question"
            name="question"
            autoComplete="question"
            autoFocus
            onChange={handleChange}
            className="question__input"
            placeholder={'Post a question here'}
          />
          <input
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="image URL {Optional}"
          />
          <button type="submit">Hidden submit</button>
        </form>
      </div>

      <div className="question__bottom">
        <div className="question__option">
          <VideocamIcon style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>

        <div className="question__option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>

        <div className="question__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default Question;
