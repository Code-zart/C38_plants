import React, { useContext } from 'react';
import './UserProfile.css';
import Newsfeed from '../../components/Newsfeed/Newsfeed';
import { AppContext } from '../../context/AppContext';

const UserProfile = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <div id="profileOverview">
      <div>
        <img
          id="coverPhoto"
          src="https://www.mashrita.com/wp-content/uploads/2017/06/Indoor-Plants_BG-1-1180x704.jpg"
          alt="Not Found"
        />
      </div>
      <div id="profileCard">
        <img
          id="profileImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs7QPGzBefaOz5xC_y7q_Ncne7Kd8J8f85xw&usqp=CAU"
          alt="userprofile"
        />

        <h3 id="profileName">{currentUser?.username}</h3>
      </div>
      <div id="userPostsBox">
        <Newsfeed />
      </div>
    </div>
  );
};

export default UserProfile;
