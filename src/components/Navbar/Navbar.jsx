import React from 'react';
import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <nav className={style.nav}>
      <ul>
         <li>
            <Link to="/profile">Profile</Link>
         </li>
         <li>
            <Link to="/dialogs">Dialogs</Link>
         </li>
         <li>
            <Link to="/news">News</Link>
         </li>
         <li>
            <Link to="/music">Music</Link>
         </li>
         <li>
            <Link to="/settings">Settings</Link>
         </li>
      </ul>
   </nav>
   )
}

export default Navbar;