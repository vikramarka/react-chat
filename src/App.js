import React, { Component } from 'react';
import './App.css';
import {SideBar} from './containers/sidebar';
import {MessageList} from './containers/messagelist';
import {AddMessage} from './containers/addmessage';

class App extends Component {
  render() {
    return (
      <div id="container">
        <SideBar />
        <section id="main">
          <MessageList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
