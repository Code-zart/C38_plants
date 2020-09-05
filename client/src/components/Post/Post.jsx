import React, { useContext } from 'react';
import Answer from '../Answer/Answer';
import './Post.css';
import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { AppContext } from '../../context/AppContext';
import Question from '../../../../server/db/models/question';

const Post = ({ questions }) => {
  const { currentUser } = useContext(AppContext);

  const cannotVote = () => {
    alert('Log in or sign up to vote!');
  };

  const isUpVoted = () => {
    return question.upvotes.includes(currentUser._id);
  };

  const isDownVoted = () => {
    return question.downvotes.includes(currentUser._id);
  };

  const upVote = async () => {
    question.upvotes = [...question.upvotes, currentUser._id];
    await question.save();
  };

  const downVote = async () => {
    question.downvotes = [questions.downvotes, currentUser._id];
    await question.save();
  };

  const removeUpVote = async () => {
    question.upvotes = question.upvotes.filter((user) => !currentUser);
    await question.save();
  };

  const removeDownVote = async () => {
    question.downvotes = question.downvotes.filter((user) => !currentUser);
    await question.save();
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
            <img src={question?.image} alt="plant" />
          </div>

          <div className="post__options">
            <div
              id="upvote"
              className="post__option"
              onClick={() =>
                currentUser
                  ? isUpVoted()
                    ? removeUpVote()
                    : upVote()
                  : cannotVote()
              }
            >
              <ThumbUpIcon />
              <p>{question.upvotes?.length}</p>
            </div>
            <div
              id="downvote"
              className="post__option"
              onClick={() =>
                currentUser
                  ? isDownVoted()
                    ? removeDownVote()
                    : downVote()
                  : cannotVote()
              }
            >
              <ThumbDownIcon />
              <p>{question.downvotes?.length}</p>
            </div>
            <div id="replybutton" className="post__option2">
              <ChatBubbleOutlineIcon />
              <p>Comment</p>
            </div>
            <div>
              <Answer answers={question.answers} />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
