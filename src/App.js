import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogssss from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import s from "./App.module.css"

const App = (props) => {

    return (
            <div className={s.appwrapper}>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route path="/dialogs" render={ () => <Dialogssss state={props.state.messagesPage} dialogs={props.state.messagesPage}/>}/>
                    <Route path="/profile" render={ () => <Profile updateNewPostText={props.updateNewPostText}
                                                                   profilePage={props.state.profilePage}
                                                                   addPost={props.addPost}/>}/>
                </div>
            </div>
    );

}

export default App;
