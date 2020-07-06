import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogssss from "./components/Dialogs/Dialogs";

const App = () => {
    return (

        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                {/*<Dialogssss/>*/}
                <Profile />
            </div>
        </div>

    );

}

export default App;
