import React from 'react';
import './App.css';
import Newslist from './components/Newslist';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <h1>News App</h1>
      <Newslist />
      <Article />
    </div>
  );
}

export default App;
