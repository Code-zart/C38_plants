import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FormGroup } from '@material-ui/core';

const Sidebar = () => {
  const {
    questions,
<<<<<<< HEAD
    currentUser,
=======
>>>>>>> 16c36532a56d18447b49d3a3577c11285596d3ff
    currentFilter,
    setCurrentFilter,
    filteredQuestions,
    setFilteredQuestions
  } = useContext(AppContext);

  const handleClick = (e) => {
    e.preventDefault();
    const { value } = e.target;
<<<<<<< HEAD
=======
    console.log('filter:', value);
>>>>>>> 16c36532a56d18447b49d3a3577c11285596d3ff
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
<<<<<<< HEAD
      <Link to="/profile">
        <h3>{currentUser?.username} </h3>
      </Link>

=======
      {/* <Link to="/profile">
        <SidebarRow
          src="https://cdna.artstation.com/p/assets/images/images/013/003/132/large/joe-parente-rick-final.jpg?1537572885&dl=1"
          title="Rick Sanchez "
        />
      </Link> */}

      <h4>Filter By:</h4>
>>>>>>> 16c36532a56d18447b49d3a3577c11285596d3ff
      <FormGroup>
        <form
          value="indoor plants"
          category="indoor_plants"
          title="🎍 Indoor Plants"
        >
<<<<<<< HEAD
          <button onClick={handleClick} id="sidebar_button">
=======
          <button onClick={handleClick} id="sidebar">
>>>>>>> 16c36532a56d18447b49d3a3577c11285596d3ff
            🎍 Indoor Plants
          </button>
        </form>
        <form
          value="outdoor plants"
          category="outdoor_plants"
          title="🌴 Outdoor Plants"
        >
<<<<<<< HEAD
          <button onClick={handleClick} id="sidebar_button">
=======
          <button onClick={handleClick} id="sidebar">
>>>>>>> 16c36532a56d18447b49d3a3577c11285596d3ff
            🌴 Outdoor Plants
          </button>
        </form>
        <form value="cacti" category="cacti" title="🌵 Cacti">
<<<<<<< HEAD
          <button onClick={handleClick} id="sidebar_button">
            🌵 Cacti
          </button>
        </form>
        <form category="vegetables" title="🥕 Vegetables">
          <button value="vegetables" onClick={handleClick} id="sidebar_button">
=======
          <button>🌵 Cacti</button>
        </form>
        <form category="vegetables" title="🥕 Vegetables">
          <button value="vegetables" onClick={handleClick}>
>>>>>>> 16c36532a56d18447b49d3a3577c11285596d3ff
            🥕 Vegetables
          </button>
        </form>
        <form value="fruit tree" category="fruit_trees" title="🌲 Fruit Trees">
<<<<<<< HEAD
          <button onClick={handleClick} id="sidebar_button">
            🌲 Fruit Trees
          </button>
        </form>
        <form category="herbs" title="🌿 Herbs">
          <button value="herbs" onClick={handleClick} id="sidebar_button">
=======
          <button onClick={handleClick}>🌲 Fruit Trees</button>
        </form>
        <form category="herbs" title="🌿 Herbs">
          <button value="herbs" onClick={handleClick}>
>>>>>>> 16c36532a56d18447b49d3a3577c11285596d3ff
            🌿 Herbs
          </button>
        </form>
        <form value="garden" category="garden" title="💐 Garden">
<<<<<<< HEAD
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
=======
          <button onClick={handleClick}>💐 Garden</button>
        </form>
        <form value="problems" category="problems" title="🥀 Problems">
          <button onClick={handleClick}>🥀 Problems</button>
        </form>
        <form category="clear-filter" title="Clear Filter">
          <button value="clear-filter" onClick={handleClick}>
>>>>>>> 16c36532a56d18447b49d3a3577c11285596d3ff
            Clear Filter
          </button>
        </form>
      </FormGroup>
    </div>
  );
};

export default Sidebar;
