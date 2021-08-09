import React from 'react';
import style from './Navbar.module.scss';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';

const Navbar = (props) => {
   return (
      <nav className={style.nav}>
         <ul>
            <li className={style.navbarItem}>
               <NavLink to="/profile" activeClassName={style.active}>Profile</NavLink>
            </li>
            <li className={style.navbarItem}>
               <NavLink to="/dialogs" activeClassName={style.active}>Dialogs</NavLink>
            </li>
            <li className={style.navbarItem}>
               <NavLink to="/news" activeClassName={style.active}>News</NavLink>
            </li>
            <li className={style.navbarItem}>
               <NavLink to="/music" activeClassName={style.active}>Music</NavLink>
            </li>
            <li className={style.navbarItem}>
               <NavLink to="/settings" activeClassName={style.active}>Settings</NavLink>
            </li>
            <li className={style.navbarItem}>
               <Friends friends={props.friends} />
            </li>
         </ul>
      </nav>
   )
}

export default Navbar;