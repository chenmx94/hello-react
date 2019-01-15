import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Home</h1>
            {'hello'}
            {+false?'morning':'evening'}
            {1+1}
            <hr />
            <div>my name is {this.props.name}</div>
            <div>my age is {this.props.age}</div>
            <h4>hobbies</h4>
            <ul>
              {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
            </ul>
            <div>{this.props.children}</div>
            <button className="btn btn-primary">click me</button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
  user: propTypes.object,
  // 限定只能有一个子级传入
  children: propTypes.element.isRequired
}
