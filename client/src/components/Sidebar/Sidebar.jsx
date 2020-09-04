import React from 'react';
import './Sidebar.css';
import SidebarRow from '../SideBarRow/SidebarRow';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/profile">
        <SidebarRow
          src="https://cdna.artstation.com/p/assets/images/images/013/003/132/large/joe-parente-rick-final.jpg?1537572885&dl=1"
          title="Rick Sanchez "
        />
      </Link>
      <SidebarRow title=" 🎍 Indoor Plants" />
      <SidebarRow title=" 🌴 Outdoor Plants" />
      <SidebarRow title=" 🌵 Cacti" />
      <SidebarRow title=" 🥕 Vegetables" />
      <SidebarRow title=" 🌲 Fruit trees" />
      <SidebarRow title=" 🌿 Herbs" />
      <SidebarRow title=" 💐 Garden" />
      <SidebarRow title=" 🥀 Problems" />
    </div>
  );
};

export default Sidebar;
