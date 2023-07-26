import React from 'react';
import './styles/Navbar.css';

const Navbar = ({ todoDone, todoTotal }) => {
  return (
    <nav className="navbar">
      <h2>You have done {todoDone} of {todoTotal} tasks</h2>
    </nav>
  );
};

export { Navbar };