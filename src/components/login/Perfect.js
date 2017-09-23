import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class Topic extends Component {
    
    render() {
    	const {match} = this.props
        return (
            <div>
		    	<h3>完善信息</h3>			    
		  	</div>
        )
    }
}

export default Topic
