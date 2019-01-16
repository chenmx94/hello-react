import React, { Component } from 'react';
import propTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      age: props.age
    }
  }

  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    })
    console.log(this)
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Home</h1>
            {'hello'}
            {+false?'morning':'evening'}
            {1+1}
            <hr />
            {/* 组件传值 */}
            <div>my name is {this.props.name}</div>
            <div>my age is {this.state.age}</div>
            <h4>hobbies</h4>
            <ul>
              {this.props.user.hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
            </ul>
            <div>{this.props.children}</div>
            {/* 点击事件 */}
            {/* <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">click me</button> */}
            {/* 或者这样 */}
            <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary">click me</button>
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
