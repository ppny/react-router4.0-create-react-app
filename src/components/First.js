import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ReactGantt from 'gantt-for-react';
import moment from 'moment'
import Gantt from './Gantt'
import Project from './Project'

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
              welcome welcome welcome 
              <h2>hello hello hello</h2>
            </div>

        )
    }
}

export default Home