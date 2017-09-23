import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Topic from './Topic'

class Topics extends Component {
    
    render() {
    	const {match} = this.props
    	{console.log(match)}
        return (
            <div>
					    <h2>Topics</h2>
					    <ul>
					      <li>
					        <Link to={`${match.url}/rendering`}>
					          Rendering with React
					        </Link>
					      </li>
					      <li>
					        <Link to={`${match.url}/components`}>
					          Components
					        </Link>
					      </li>
					      <li>
					        <Link to={`${match.url}/props-v-state`}>
					          Props v. State
					        </Link>
					      </li>
					    </ul>
					
					    <Route path={`/topics/:topicId`} component={Topic}/>
					    <Route exact path="/topics" render={() => (
					      <h3>Please select a topic.</h3>
					    )}/>
					  </div>
        )
    }
}

export default Topics