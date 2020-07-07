import React from "react";
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogitem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.dialog}> {props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialogitem name="Dimon" id="1" />
                <Dialogitem name="Andrey" id="2" />
                <Dialogitem name="Sveta" id="3" />
                <Dialogitem name="Sasha" id="4" />
                <Dialogitem name="Viktor" id="5" />
                <Dialogitem name="Valera" id="6" />
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
                <Message message="Yo"/>
            </div>
        </div>
    )
}

export default Dialogs;