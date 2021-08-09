import React from 'react';
import style from './Dialogs.module.scss';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'

const Dialogs = (props) => {
   let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messagesElements = props.state.messages.map(m => <Message message={m.text} />);
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