import React            from 'react';
import _                from 'lodash';
import CreateParking     from './CreateParking.jsx';

export default class Parking extends React.Component {

    render() {
        if(this.props.status === true) {
            return (
                <ul id='places'>
                    { _.map(this.props.places, e => {
                       return (
                        <CreateParking place={e} key={e.recordid}/>
                       )
                    })}
                </ul>
            )
        } else {
            return (
                <p>Aucun résultat ne correspond à votre recherche</p>
            )
        }
    }
}