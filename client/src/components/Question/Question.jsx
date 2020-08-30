import { Avatar } from "@material-ui/core";
import React, { useState } from 'react';
import "./Question.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"; 


const Question = () => {
  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState(""); 

const handleSubmit = e => {
  e.preventDefault();

  // sets to empty string after submit
  setInput("");
  setImageUrl("");
};

  return <div className="question">
<div className="question__top">
  <Avatar />
  <form>
    <input 
    value={input}
    onChange={(e) => setInput(e.target.value)}
    className="question__input"
    placeholder={`What's on your mind?`} />
    
    <input 
    value={imageUrl}
    onChange={(e) => setImageUrl(e.target.value)}
    placeholder="image URL (Optional)" />

    <button onClick={handleSubmit} type="submit">
      Hidden submit
    </button>
  </form>
</div>

<div className="question__bottom">

<div className="question__option">
  <VideocamIcon style={{ color: "red" }} />
  <h3>Live Video</h3>
</div>

<div className="question__option">
  <PhotoLibraryIcon style={{ color: "green" }} />
  <h3>Photo/Video</h3>
</div>

<div className="question__option">
  <InsertEmoticonIcon style={{ color: "orange" }} />
  <h3>Feeling/Activity</h3>
</div>
</div>

  </div>;
};

export default Question;
