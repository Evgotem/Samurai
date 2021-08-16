import React from 'react';
import style from './Dialogs.module.scss';

import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {

   return (
      <StoreContext.Consumer>
         {(store) => {
            let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
               store.dispatch(sendMessageCreator());
            }

            let onNewMessageChange = (body) => {
               store.dispatch(updateNewMessageBodyCreator(body));
            }
            return <Dialogs
               updateNewMessageBody={onNewMessageChange}
               sendMessage={onSendMessageClick}
               dialogsPage={state}
            />
         }
         }
      </StoreContext.Consumer>
   )
}

export default DialogsContainer;