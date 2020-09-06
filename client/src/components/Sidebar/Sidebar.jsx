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
      <h4>
        filterBy: 
      </h4>
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
