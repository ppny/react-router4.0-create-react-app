import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import ReactGantt from 'gantt-for-react';
import moment from 'moment'
import Gantt from './Gantt'
import Project from './Project'
import First from './First'

class Home extends Component {
    constructor(props){
      super(props)
      this.state = {
      }
    }

    componentWillMount() {
        
    }

    

    render() {
        return (
            <div>
              <h2 style={{"width":"100%","background":"#108ee7"}}>头部</h2>
              <Link to="/">欢迎页</Link>
              <Link to="/project">项目</Link>
              <Link to="/gantt">甘特图</Link>
              <div style={{"background":"#f0f0f0","height":"700px","border":"3px solid #000"}}>
                <Switch>
                  <Route path="/project" component={Project}/>
                  <Route path="/gantt" component={Gantt}/>
                  <Route exact component={First}/>
                </Switch>
              </div>
              <Link to="/login">登陆</Link>
              <Link to="/register">注册</Link>
              <div>
                <h2 style={{"width":"100%","background":"#108ee7"}}>footer部分</h2>
              </div>
            </div>

        )
    }
}

export default Home