import React            from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import Header           from './Header/Header.jsx';
import Velib            from './Content/Velib/Content.jsx';
import Parking          from './Content/Parking/Content.jsx';

export default class App extends React.Component {

    render() {
        return (
             <Router history={browserHistory}>
                <Route path='parking' component={Parking} />
                <Route path='velib' component={Velib} />
            </Router>
        )
    }
}