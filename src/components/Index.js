import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
            <h2>这里是主页!!!!!!!!!!</h2>
            <Link to="/login">登陆</Link>
            <Link to="/register">注册</Link>
            </div>
        )
    }
}

export default Home