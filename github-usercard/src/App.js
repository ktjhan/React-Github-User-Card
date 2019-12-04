import React from 'react';
import logo from './logo.svg';
import './App.css';
import GithubUser from './Components/GithubUser'
import GithubFollowers from './Components/GithubFollowers'

function App() {
  return (
    <div className="App">
      <GithubUser/>
      <GithubFollowers/>
    </div>
  );
}

export default App;
