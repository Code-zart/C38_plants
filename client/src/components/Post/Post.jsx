import React, { useContext, useState } from 'react';
import Answer from '../Answer/Answer';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { AppContext } from '../../context/AppContext';
import axios from 'axios';

const Post = ({ questions }) => {
  const INITIAL_STATE = { answer: '' };
  const qid = questions.id;
  const { answers, setAnswers } = useContext(AppContext);

  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleSubmit = (e) => {
    // `/api/questions/${qid}/answers`
    e.preventDefault();
    axios
      .post(`/api/questions/answers`, formData, {
        withCredentials: true
      })
      .then((res) => {
        console.log(res.data);
      });
    setAnswers({ ...answers, formData });
    setFormData(INITIAL_STATE);
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <>
      {questions.map((question) => (
        <div className="post">
          <div className="post__top">
            <Avatar src={question.author.avatar} className="post__avatar" />
            <div className="post_topInfo">
              <h3 id="question_author">{question.author.username}</h3>
            </div>
          </div>

          <div className="post__bottom">
            <p id="question_text">{question.text}</p>
          </div>

          <div className="post__image">
            <img src={question?.image} />
          </div>

          <div className="post__options">
            <div id="upvote" className="post__option">
              <ThumbUpIcon />
              <p>{question.upvotes?.length}</p>
            </div>
            <div id="downvote" className="post__option">
              <ThumbDownIcon />
              <p>{question.downvotes?.length}</p>
            </div>
            <div id="replybutton" className="post__option2">
              <ChatBubbleOutlineIcon />
              <form onSubmit={handleSubmit}>
                <input
                  value={formData.answers}
                  onChange={handleChange}
                  placeholder={'Post an answer here'}
                />
              </form>
            </div>
            <div>{/* <Answer answers={question.answers} /> */}</div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Post;
