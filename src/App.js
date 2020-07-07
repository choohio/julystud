import React from 'react';
import s from './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogssss from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className={s.appWrapperContent}>
                    <Route exact path="/dialogs" component={Dialogssss}/>
                    <Route exact path="/profile" component={Profile}/>
                </div>
            </div>
        </BrowserRouter>
    );

}

export default App;
