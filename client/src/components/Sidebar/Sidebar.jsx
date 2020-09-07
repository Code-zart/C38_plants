import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FormGroup } from '@material-ui/core';

const Sidebar = () => {
  const {
    questions,
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
      {/* <Link to="/profile">
        <SidebarRow
          src="https://cdna.artstation.com/p/assets/images/images/013/003/132/large/joe-parente-rick-final.jpg?1537572885&dl=1"
          title="Rick Sanchez "
        />
      </Link> */}

      <h4>Filter By:</h4>
      <FormGroup>
        <form
          value="indoor plants"
          category="indoor_plants"
          title="🎍 Indoor Plants"
        >
          <button onClick={handleClick} id="sidebar">
            🎍 Indoor Plants
          </button>
        </form>
        <form
          value="outdoor plants"
          category="outdoor_plants"
          title="🌴 Outdoor Plants"
        >
          <button onClick={handleClick} id="sidebar">
            🌴 Outdoor Plants
          </button>
        </form>
        <form value="cacti" category="cacti" title="🌵 Cacti">
          <button>🌵 Cacti</button>
        </form>
        <form category="vegetables" title="🥕 Vegetables">
          <button value="vegetables" onClick={handleClick}>
            🥕 Vegetables
          </button>
        </form>
        <form value="fruit tree" category="fruit_trees" title="🌲 Fruit Trees">
          <button onClick={handleClick}>🌲 Fruit Trees</button>
        </form>
        <form category="herbs" title="🌿 Herbs">
          <button value="herbs" onClick={handleClick}>
            🌿 Herbs
          </button>
        </form>
        <form value="garden" category="garden" title="💐 Garden">
          <button onClick={handleClick}>💐 Garden</button>
        </form>
        <form value="problems" category="problems" title="🥀 Problems">
          <button onClick={handleClick}>🥀 Problems</button>
        </form>
        <form category="clear-filter" title="Clear Filter">
          <button value="clear-filter" onClick={handleClick}>
            Clear Filter
          </button>
        </form>
      </FormGroup>
    </div>
  );
};

export default Sidebar;
