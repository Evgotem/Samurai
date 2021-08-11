import React from 'react';
import style from './Dialogs.module.scss';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {

   let dialogsElements = props.dialogsPage.dialogs.map(d => 
      <DialogItem name={d.name} id={d.id} />);

   let messagesElements = props.dialogsPage.messages.map(m => 
      <Message message={m.text} />);

   let newMessageElement = React.createRef();

   let onMessageChange = () => {
      let text = newMessageElement.current.value;
      // props.updateNewMessageText(newMessage);
      props.dispatch({type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text});
   }

   let addMessage = () => {
      // props.addMessage();
      props.dispatch({type: 'ADD-MESSAGE'});
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
                  ref={ newMessageElement }
                  onChange={ onMessageChange } 
                  value={props.dialogsPage.newMessage}/>
            </div>
            <button onClick={ addMessage }>add message</button>
         </div>
      </>
   )
}

export default Dialogs;