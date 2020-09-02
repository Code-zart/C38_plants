import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';

const Post = ({ profilePic, image, username, message, upvotes, downvotes }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post_topInfo">
          <h3 id="question_owner">{username}</h3>
        </div>
      </div>

      <div className="post__bottom">
        <p id="question_text">{message}</p>
      </div>

      <div className="post__image">
        <img src={image} alt="plant" />
      </div>

      <div className="post__options">
        <div id="upvote" className="post__option">
          <ThumbUpIcon />
          <p>{upvotes}</p>
        </div>
        <div id="downvote" className="post__option">
          <ThumbDownIcon />
          <p>{downvotes}</p>
        </div>
        <div id="replybutton" className="post__option2">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
