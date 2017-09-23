import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link,Switch
} from 'react-router-dom';
import {Row,Col} from 'antd'
import Phone from './Phone'
import Perfect from './Perfect'
import Finish from './Finish'

class Topics extends Component {
    
    render() {
    	const {match} = this.props
    	{console.log(match)}
        return (
            <div>
					    <ul>
					      <li>
					        <Link to={`${match.url}/phone`}>
					          	手机注册
					        </Link>
					      </li>
					      <li>
					        <Link to={`${match.url}/perfect`}>
					            完善信息
					        </Link>
					      </li>
					      <li>
					        <Link to={`${match.url}/finish`}>
					            注册结束
					        </Link>
					      </li>
					    </ul>
							
								<Route path={`/register/phone`} component={Phone}/>
								<Route path={`/register/perfect`} component={Perfect}/>
								<Route path={`/register/finish`} component={Finish}/>
							<Link to={`/index`}>
					          回首页
					    </Link>
							<Link to={`/login`}>
					            去登陆
					    </Link>
					  </div>
        )
    }
}

export default Topics