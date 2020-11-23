import React from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar'
import Map from './components/Map'

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Map/>
        <Navbar/>
      </Wrapper>
    </div>
  );
}

export default App;
