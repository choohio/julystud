import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import s from "./App.module.css"
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
            <div className={s.appwrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path="/dialogs"
                           render={ () => <DialogsContainer store={props.store}/>}/>
                    <Route path="/profile" render={ () => <Profile
                        store = {props.store}/>}/>
                </div>
            </div>
    );

}

export default App;
