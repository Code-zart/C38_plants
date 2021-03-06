import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Avatar } from '@material-ui/core';
import './CreateQuestion.css';
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
      .then((res) => {});
    setQuestions({ ...questions, formData });
    setFormData(INITIAL_STATE);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="question">
      <div className="question__top">
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
          <select onChange={handleChange} name="category">
            <option value="indoor_plants">🎍 Indoor Plants</option>
            <option value="outdoor_plants">🌴 Outdoor Plants</option>
            <option value="cacti">🌵 Cacti</option>
            <option value="vegetables">🥕 Vegetables</option>
            <option value="fruit_trees">🌲 Fruit trees</option>
            <option value="herbs">🌿 Herbs</option>
            <option value="garden">💐 Garden</option>
            <option value="problems">🥀 Problems</option>
          </select>
          <button type="submit">Hidden submit</button>
        </form>
      </div>

      <div className="question__bottom">
        <div className="question__option"></div>
        <div className="question__option">
          <InsertEmoticonIcon style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
        <div className="question__option">
          <PhotoLibraryIcon style={{ color: 'green' }} />
          <form>
            <input id="image_input" type="file"></input>
            <button id="image_input" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateQuestion;
