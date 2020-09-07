import React, { useContext } from 'react';
import './Sidebar.css';
import SidebarRow from '../SideBarRow/SidebarRow';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';

const Sidebar = () => {
  const { currentUser } = useContext(AppContext);
  return (
    <div className="sidebar">
      <Link to="/profile">
        <SidebarRow title={currentUser?.username} />
      </Link>

      <h4>Filter By:</h4>
      <SidebarRow category="indoor_plants" title=" 🎍 Indoor Plants" />
      <SidebarRow category="outdoor_plants" title=" 🌴 Outdoor Plants" />
      <SidebarRow category="cacti" title=" 🌵 Cacti" />
      <SidebarRow category="vegetables" title=" 🥕 Vegetables" />
      <SidebarRow category="fruit_trees" title=" 🌲 Fruit trees" />
      <SidebarRow category="herbs" title=" 🌿 Herbs" />
      <SidebarRow category="garden" title=" 💐 Garden" />
      <SidebarRow category="problems" title=" 🥀 Problems" />
    </div>
  );
};

export default Sidebar;
