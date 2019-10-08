import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionsInPanel from './components/questionpanel/Questions';
import Questions from './components/question/Question'
function App() {
  return (
    <div className="App">
      <QuestionsInPanel />
      <Questions/>
    </div>
  );
}

export default App;
