import React            from 'react';
import Request          from 'superagent';
import _                from 'lodash';
import Parking          from './Parking.jsx';
import Header           from './../../Header/Header.jsx';

import Background       from '../../../img/paris2.jpg';

var Font = {
    backgroundImage: 'url('+Background+')'
}

var Form = {
    background: 'rgba(0,0,0,0.6)'
}

export default class Content extends React.Component {

    constructor(){
        super();
        this.state = {
            status: false,
            places: null
        }
        this.getData();
    }

    getData(){
        let url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=stationnement-sur-voie-publique-emprises&rows=9999&facet=zonres&facet=regpri&facet=regpar&facet=typsta&facet=typ&facet=arrond&refine.regpri=Gratuit'
        Request.get(url).then(data => {
            this.setState({
                body: data.body.records
            });
        });
    }

    onSubmit(e){
        e.preventDefault();
        let result = this.refs.arrond.value.split('').splice(3,4).join('');
        this.getParkingPlaces(result);
    }

    getParkingPlaces(arrond){
        let places = [];

        _.map(this.state.body, e => {
            if(e.fields.arrond === arrond){
                places.push(e);
            }
        });
        return places.length == 0 ? this.setState({status: false}) : this.setState({places: places, status: true});
    }

    render() {
            return (
                <div className='content parking' style={Font}>
                    <Header title={'PARKINGS gratuits de Paris'} page={"parking"}/>
                    <div className='formulaire' style={Form}>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <input type='text'
                                required ref='arrond'
                                placeholder='Code postale'
                                maxLength='5'/>
                            <button type='submit'>Chercher</button>
                        </form>
                    </div>
                    <Parking status={this.state.status} places={this.state.places}/>
                </div>
            )
        }
}