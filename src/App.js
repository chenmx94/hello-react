import React, { Component } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import './App.css';

class App extends Component {
  render() {
    const user = {
      hobbies: ['swim', 'movie', 'swim']
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>hello react</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            {/* 父子组件传值 */}
            <Home name={"chenmx"} age={12} user={user}>
              <p>I am child1</p>
              {/* <p>I am child2</p> */}
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
