import React            from 'react';
import _                from 'lodash';
import CreatePlaces     from './CreatePlaces.jsx';

export default class Places extends React.Component {

    render() {
        if(this.props.status === true) {
            return (
                <ul id='places'>
                    { _.map(this.props.places, e => {
                        return (
                            <CreatePlaces place={e} key={e.number}/>
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