import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import Chat from './components/Chat';
import About from './components/About';
import Ups from './components/Ups';

import './styles/chat.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/chat' component={Chat} />
        <Route path='/about' component={About} />
        <Route path='*' component={Ups} />
      </Switch>
    </div>
  );
}

export default App;
