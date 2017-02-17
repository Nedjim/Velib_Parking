import React from 'react';
import _ from 'lodash';
import CreatePlaces from './CreatePlaces.jsx';


export default class App extends React.Component {

    render() {
        return (
            <ul id='places'>
                { _.map(this.props.places, (e, index) => {
                    return (
                        <CreatePlaces place={e} key={index}/>
                    )
                })}
            </ul>
        )
    }
}