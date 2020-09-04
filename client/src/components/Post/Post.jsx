import React, { useContext } from 'react';
import Answer from '../Answer/Answer';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { AppContext } from '../../context/AppContext';

const Post = ({ questions }) => {
  // pass answers into "answer" component
  const { answers } = useContext(AppContext);

  return (
    <>
      {questions.map((question) => (
        <div className="post">
          <div className="post__top">
            <Avatar src={question.owner.avatar} className="post__avatar" />
            <div className="post_topInfo">
              <h3 id="question_owner">{question.owner.username}</h3>
            </div>
          </div>

          <div className="post__bottom">
            <p id="question_text">{question.text}</p>
          </div>

          {/* <div className="post__image">
            <img src={image} alt="plant" />
          </div> */}

          <div className="post__options">
            <div id="upvote" className="post__option">
              <ThumbUpIcon />
              <p>{question.upvotes.length}</p>
            </div>
            <div id="downvote" className="post__option">
              <ThumbDownIcon />
              <p>{question.downvotes.length}</p>
            </div>
            <div id="replybutton" className="post__option2">
              <ChatBubbleOutlineIcon />
              <p>Comment</p>
              <Answer answers={question.answers} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
