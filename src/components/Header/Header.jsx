import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';


const Header = (props) => {
   return (
      <header className={style.header}>
         <img className={style.logo} src="https://537404.selcdn.ru/marketmoy/iblock/5ff/5ff796722871a64d7672de51c4001cab/1635f35f14431c28f063411e79f50d04.jpg" alt="Монетка" />
         <div className={style.loginBlock}>
            {props.isAuth
               ?
               props.login
               :
               <NavLink to={'/login'}>
                  Login
               </NavLink>
            }
         </div>
      </header>
   )
}

export default Header;