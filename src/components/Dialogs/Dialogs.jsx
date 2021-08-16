import React from 'react';
import style from './Dialogs.module.scss';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

   let state = props.dialogsPage;

   let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messagesElements = state.messages.map(m => <Message message={m.text} />);
   let newMessageBody = state.newMessageBody;

   let onSendMessageClick = () => {
      props.sendMessage();
   }

   let onNewMessageChange = (e) => {
      let body = e.target.value;
      props.updateNewMessageBody(body);
   }

   return (
      <>
         <div className={style.dialogsWrapper}>
            <div className={style.dialogsItems}>
               {dialogsElements}
            </div>

            <div className={style.messagesItems}>
               {messagesElements}
            </div>
         </div>
         <div>
            <div>
               <textarea
                  value={newMessageBody}
                  onChange={onNewMessageChange}
               />
            </div>
            <button onClick={onSendMessageClick}>Send</button>
         </div>
      </>
   )
}

export default Dialogs;