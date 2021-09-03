import React from 'react';
import style from './Dialogs.module.scss';

import Dialogs from './Dialogs';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';


const mapStateToProps = (state) => {
   return {
      dialogsPage: state.dialogsPage,
   }
}



const mapDispatchToProps = (dispatch) => {
   return {
      updateNewMessageBody: (body) => {
         dispatch(updateNewMessageBodyCreator(body));
      },
      sendMessage: () => {
         dispatch(sendMessageCreator());
      },
   }
}



let AuthRedirectComponent = withAuthRedirect(Dialogs);


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;