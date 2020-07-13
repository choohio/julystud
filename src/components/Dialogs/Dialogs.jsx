import React, {createRef} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newMessageElement = createRef();

    const addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <div><button onClick={addMessage}>New message</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;