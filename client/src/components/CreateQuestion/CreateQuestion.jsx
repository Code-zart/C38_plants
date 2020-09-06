import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Avatar } from '@material-ui/core';
import './CreateQuestion.css';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import axios from 'axios';

const CreateQuestion = () => {
  const INITIAL_STATE = { question: '' };
  const { questions, setQuestions } = useContext(AppContext);
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('/api/questions/', formData, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
      });
    setQuestions({ ...questions, formData });
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
            placeholder={'Post a question'}
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
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
        <div className="question__option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <form>
            <input type="file"></input>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestion;
