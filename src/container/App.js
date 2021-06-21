import React from 'react'
import '../styles/App.css';
import Main from '../components/Main'
import Creador from '../components/Creador'

function App({children}) {
  return (
    <>
    <Main>
      {children}
    </Main>
    <Creador/>

    </>
  );
}

export default App;
