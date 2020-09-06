import React from 'react';
import './UserProfile.css';
import Button from '@material-ui/core/Button';
import Newsfeed from '../../components/Newsfeed/Newsfeed';


const UserProfile = () => {
  return (
    <div id="profileOverview">
      <div>
        <img
          id="coverPhoto"
          src="https://cdn.pixabay.com/photo/2020/07/08/08/06/flowers-5383054_1280.jpg"
          alt="Not Found"
        />
      </div>
      <div id="profileCard">
        <img
          id="profileImage"
          src="https://cdna.artstation.com/p/assets/images/images/013/003/132/large/joe-parente-rick-final.jpg?1537572885&dl="
          alt="Rick Sanchez rick and morty"
        />

        <h3 id="profileName">Rick Sanchez</h3>
        <Button color="primary">Edit Profile</Button>
      </div>
      <div id="userPostsBox">
        <Newsfeed />
      </div>
    </div>
  );
};

export default UserProfile;
