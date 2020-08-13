/* eslint-disable import/no-named-as-default-member */
import React from 'react';
import './App.css';
import Newslist from './components/Newslist';
import Article from './components/Article';
import Lambda from './components/Lambda';

function App() {
  return (
    <div className="App">
      <h1>News App</h1>
      <Newslist />
      <Article />
      <Lambda />
    </div>
  );
}

export default App;
