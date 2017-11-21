import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

import Index from './components/Index'
import Login from './components/login/Login'
import Register from './components/login/Register'
import Notfund from './components/Nofund'
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
    <Switch>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <Route component={Index} exact/>
    </Switch>
    </div>
  </Router>
)


ReactDOM.render(<BasicExample/>, document.getElementById('root'));