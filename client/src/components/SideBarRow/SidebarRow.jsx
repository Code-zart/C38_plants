import React, { useContext } from 'react';
import './SidebarRow.css';
import { Avatar } from '@material-ui/core';
import { AppContext } from '../../context/AppContext';

const SidebarRow = ({ src, Icon, title, category }) => {
  const { questions, setQuestions } = useContext(AppContext);

  // const handleFilter = () => {
  //   let newQuestions = questions;
  //   new questions.filter.console.log();
  //   //  add .filter js method apply to context of questions, read newly filtered questions to context, similiar to
  //   setQuestions({ newQuestions });
  // };
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <button id="sidebar">
        <h5>{title}</h5>
      </button>
    </div>
  );
};

export default SidebarRow;
