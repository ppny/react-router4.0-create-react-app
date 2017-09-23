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
					    <h2>登陆</h2>
					    <Link to="/register">去注册</Link>
					  </div>
        )
    }
}

export default Home