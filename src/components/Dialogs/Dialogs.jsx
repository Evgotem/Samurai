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

let dialogs = [
   { id:1, name:'Zhenya' },
   { id:2, name:'Leopold' },
   { id:3, name:'Mr. Money' }
];
let messages = [
   { id:1, text:'React - it`s ez' },
   { id:2, text:'Easy peasy lemon squeezy' },
   { id:3, text:'Ez clap' }
];

let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id} /> );

let messagesElements = messages.map( m =>  <Message message={m.text} /> );

const Dialogs = (props) => {
   return (
      <div className={style.dialogsWrapper}>
         <div className={style.dialogsItems}>
            {dialogsElements}
         </div>

         <div className={style.messagesItems}>
            {messagesElements}
         </div>
      </div>
   )
}

export default Dialogs;