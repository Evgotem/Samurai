import React from 'react';
import style from './Dialogs.module.scss';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message'


// let dialogs = [
//     { id: 1, name: 'Zhenya' },
//     { id: 2, name: 'Leopold' },
//     { id: 3, name: 'Mr. Money' }
// ];
// let messages = [
//     { id: 1, text: 'React - it`s ez' },
//     { id: 2, text: 'Easy peasy lemon squeezy' },
//     { id: 3, text: 'Ez clap' }
// ];



const Dialogs = (props) => {
   let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
   let messagesElements = props.messages.map(m => <Message message={m.text} />);
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