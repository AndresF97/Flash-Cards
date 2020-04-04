import React from 'react';
import Navbar from "./components/Navbar"
import Jumbo from "./components/InfoJumbotron"
import SubjectArea from "./components/SubjectArea"
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbo />
      <SubjectArea/>
    </div>
  );
}

export default App;
