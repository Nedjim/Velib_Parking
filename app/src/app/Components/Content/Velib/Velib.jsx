import React            from 'react';
import _                from 'lodash';
import CreatePlaces     from './CreatePlaces.jsx';

export default class Velib extends React.Component {

    render() {
        if(this.props.status === true) {
            return (
                <ul className='places'>
                    { _.map(this.props.places, e => {
                        return (
                            <CreatePlaces place={e} key={e.number}/>
                        )
                    })}
                </ul>
            )
        } else {
            return (
                <div className='resultNull'>
                    <p>Aucun résultat ne correspond à votre recherche</p>
                </div>
            )
        }
    }
}