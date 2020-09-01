import React from 'react';
import './UserProfile.css';
import Button from "@material-ui/core/Button";
import Newsfeed from '../../components/Newsfeed/Newsfeed';
import Post from "../../components/Post/Post";

const UserProfile = () => {
  return (
    	<div id="profileOverview">
    		<div>
    			<img id="coverPhoto" src="https://cdn.pixabay.com/photo/2020/07/08/08/06/flowers-5383054_1280.jpg" />
          </div>
    		<div id="profileCard">
    			<img id="profileImage" src="https://s3.amazonaws.com/webassets.ticketmob.com/LS/images/comedians/Pepe-Billete.jpg" />
    			<h3 id="profileName" >
    				Pepe Billete
    			</h3>
          <Button color="primary">Edit Profile</Button>
    		</div>
    	<div id="userPostsBox">
      <Newsfeed />
      <Post />
    </div>   
  </div>  
  )
};

export default UserProfile;
