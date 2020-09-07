import React, { useContext, useState } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { AppContext } from '../../context/AppContext';
import './Post.css';

const AnswerInput = ({ onSubmit, questionId }) => {
  const [answer, setAnswer] = useState('');

  const handleChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(questionId, answer);
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={answer}
        onChange={handleChange}
        placeholder={'Post an answer here'}
      />
    </form>
  );
};

const Post = ({ questions }) => {
  const { currentUser, fetchQuestions } = useContext(AppContext);

  const cannotVote = () => {
    alert('Log in or sign up to vote!');
  };

  const hasVoted = (votes) => {
    if (currentUser) return votes.includes(currentUser._id);
  };

  const handleVote = async (question, upVote = false) => {
    await axios.patch(
      `/api/questions/vote/${question._id}`,
      { upVote },
      { withCredentials: true }
    );

    fetchQuestions();
  };

  const handleSubmit = (questionId, answer) => {
    axios
      .post(
        `/api/questions/${questionId}/answers`,
        { text: answer },
        {
          withCredentials: true
        }
      )
      .then(() => {
        fetchQuestions();
      });
  };

  return (
    <>
      {questions.map((question) => {
        const hasUpVoted = hasVoted(question.upvotes);
        const hasDownVoted = hasVoted(question.downvotes);

        return (
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
              <div
                id="upvote"
                className={classNames('post__option', { voted: hasUpVoted })}
                onClick={() =>
                  currentUser ? handleVote(question, true) : cannotVote()
                }
              >
                <ThumbUpIcon />
                <p>{question.upvotes?.length}</p>
              </div>
              <div
                id="downvote"
                className={classNames('post__option', { voted: hasDownVoted })}
                onClick={() =>
                  currentUser ? handleVote(question) : cannotVote()
                }
              >
                <ThumbDownIcon />
                <p>{question.downvotes?.length}</p>
              </div>
              <div id="replybutton" className="post__option2">
                <ChatBubbleOutlineIcon />
                <AnswerInput
                  onSubmit={handleSubmit}
                  questionId={question._id}
                />
              </div>
              <div>
                {question.answers.map((answer) => (
                  <p>{answer.text}</p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default Post;
