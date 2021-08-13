import React from 'react';
import style from './Dialogs.module.scss';

import Dialogs from './Dialogs';
import Message from './Message/Message';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';


const DialogsContainer = (props) => {

   let state = props.store.getState().dialogsPage;

   let onSendMessageClick = () => {
      props.store.dispatch(sendMessageCreator());
   }

   let onNewMessageChange = (body) => {
      props.store.dispatch(updateNewMessageBodyCreator(body));
   }



   return (
      <Dialogs
         updateNewMessageBody={onNewMessageChange}
         sendMessage={onSendMessageClick}
         dialogsPage={state}
      />
   )
}

export default DialogsContainer;