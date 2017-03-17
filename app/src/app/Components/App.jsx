import React            from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router';
import Velib            from './Content/Velib/Content.jsx';
import Parking          from './Content/Parking/Content.jsx';
import Home             from './Home.jsx';

export default class App extends React.Component {
    render() {
        return (
             <Router history={browserHistory}>
                <Route path='/' component={Home}/>
                <Route path='/velib' component={Velib}/>   
                <Route path='/parking' component={Parking}/> 
            </Router>
        )
    }
}