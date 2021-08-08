import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.scss';

const DialogItem = (props) => {
   let path = '/dialogs/' + props.id;
   return (
      <div className={style.dialog + ' ' + style.active}>
         <NavLink to={path}>{props.name}</NavLink>
      </div>
   )
}

const Message = (props) => {
   return (
      <div className={style.message}>
         {props.message}
      </div>
   )
}

const Dialogs = (props) => {
   return (
      <div className={style.dialogsWrapper}>
         <div className={style.dialogsItems}>

            <DialogItem name={'Zhenya'} id={'1'} />
            <DialogItem name={'Leopold'} id={'2'} />
            <DialogItem name={'Mr. Money'} id={'3'} />
         </div>

         <div className={style.messagesItems}>
            <Message message='React - it`s ez' />
            <Message message='Easy peasy lemon squeezy' />
            <Message message=' Ez clap' />
         </div>
      </div>
   )
}

export default Dialogs;