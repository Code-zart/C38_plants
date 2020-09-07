import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FormGroup } from '@material-ui/core';

const Sidebar = () => {
  const {
    questions,
    currentUser,
    currentFilter,
    setCurrentFilter,
    filteredQuestions,
    setFilteredQuestions
  } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    const { value } = e.target;
    console.log('filter:', value);
    if (value === 'clear-filter') setCurrentFilter(null);
    else {
      setCurrentFilter(value);
      setFilteredQuestions(
        questions.filter((question) => question.categories === value)
      );
    }
  };

  return (
    <div className="sidebar">
      <Link to="/profile">
        <h3>{currentUser?.username} </h3>
      </Link>

      <FormGroup>
        <form
          value="indoor plants"
          category="indoor_plants"
          title="🎍 Indoor Plants"
        >
          <button onClick={handleClick} id="sidebar_button">
            🎍 Indoor Plants
          </button>
        </form>
        <form
          value="outdoor plants"
          category="outdoor_plants"
          title="🌴 Outdoor Plants"
        >
          <button onClick={handleClick} id="sidebar_button">
            🌴 Outdoor Plants
          </button>
        </form>
        <form value="cacti" category="cacti" title="🌵 Cacti">
          <button onClick={handleClick} id="sidebar_button">
            🌵 Cacti
          </button>
        </form>
        <form category="vegetables" title="🥕 Vegetables">
          <button value="vegetables" onClick={handleClick} id="sidebar_button">
            🥕 Vegetables
          </button>
        </form>
        <form value="fruit tree" category="fruit_trees" title="🌲 Fruit Trees">
          <button onClick={handleClick} id="sidebar_button">
            🌲 Fruit Trees
          </button>
        </form>
        <form category="herbs" title="🌿 Herbs">
          <button value="herbs" onClick={handleClick} id="sidebar_button">
            🌿 Herbs
          </button>
        </form>
        <form value="garden" category="garden" title="💐 Garden">
          <button onClick={handleClick} id="sidebar_button">
            💐 Garden
          </button>
        </form>
        <form value="problems" category="problems" title="🥀 Problems">
          <button onClick={handleClick} id="sidebar_button">
            🥀 Problems
          </button>
        </form>
        <form category="clear-filter" title="Clear Filter">
          <button
            value="clear-filter"
            onClick={handleClick}
            id="sidebar_button"
          >
            Clear Filter
          </button>
        </form>
      </FormGroup>
    </div>
  );
};

export default Sidebar;
