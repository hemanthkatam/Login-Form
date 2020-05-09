import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginBase from './containers/LoginBase';
import TermsandConditons from './components/TermsandConditons';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/TermsandConditons" component={TermsandConditons} />
      <Route exact path="/" component={LoginBase} />
      <p>learn react</p>
    </BrowserRouter>

  );
}

export default App;
