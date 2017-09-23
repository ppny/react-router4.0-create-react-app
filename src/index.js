import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Index from './components/Index'
import Login from './components/login/Login'
import Register from './components/login/Register'

/*class About extends Component {
    
    render() {
        return (
            <div>
					    <h2>About</h2>
					  </div>
        )
    }
}*/

const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={Index}/>
      <Route exact path="/index" component={Index}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
    </div>
  </Router>
)


ReactDOM.render(<BasicExample/>, document.getElementById('root'));