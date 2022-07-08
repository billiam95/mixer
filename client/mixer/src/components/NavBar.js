import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="h-20 shadow-sm flex flex-row justify-around p-6 sticky top-0 bg-black text-white">
      <Link to="/"><h2>About</h2></Link>
      <Link to="/DrinkListPage"><h2>Drink List</h2></Link>
      <Link to="/PracticePage"><h2>Practice</h2></Link>
      <Link to="/ManageDrinksPage"><h2>Manage Drinks</h2></Link>
    </div>
  )
};

export default NavBar;
