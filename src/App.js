import React from 'react';
import './App.css';
import {HashRouter, Route} from 'react-router-dom';
import Friend from './routes/Friend';
import Chats from './routes/Chats';
import Find from './routes/Find';
import More from './routes/More';
import Talk from './routes/Talk';
import Profile from './routes/Profile';

export default function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Friend} />
      <Route path="/chats" component={Chats} />
      <Route path="/find" component={Find} />
      <Route path="/more" component={More} />
      <Route path="/talk" component={Talk} />
      <Route path="/Profile" component={Profile} />
    </HashRouter>
  );
}
