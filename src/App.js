import React from 'react';
import './App.css';
import Main from "./Components/Main/Main";
import SignPage from "./Components/SignPage/SignPage";
import ProfilePage from "./Components/ProfilePage/ProfilePage";

function App() {
  return (
    <div className='mainframe'>
        {/*<Main/>*/}
        {/*<SignPage/>*/}
        <ProfilePage/>
    </div>
  );
}

export default App;
