import React from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';

const SidebarRow = ({ src, Icon, title, category }) => {
 const handleFilter = () => { 
 console.log(category)
 }
  return (
    
      <div className="sidebarRow">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <button onClick={handleFilter}>
        <h5>{title}</h5>
        </button>
      </div>
    
  );
};

export default SidebarRow;
