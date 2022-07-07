import React from 'react';
import Link from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="h-20 shadow-sm flex flex-row justify-around p-6 sticky top-0 bg-black text-white">
      <h2><Link to="/About">About</Link></h2>
      <h2><Link to="/Drink-List">Drink List</Link></h2>
      <h2><Link to="/Practice">Practice</Link></h2>
      <h2><Link to="/Manage">Manage Drinks</Link></h2>
    </div>
  )
};

export default NavBar;
