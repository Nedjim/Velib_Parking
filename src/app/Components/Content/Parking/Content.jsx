import React            from 'react';
import Request          from 'superagent';
import _                from 'lodash';
import Parking          from './Parking.jsx';
import Header           from './../../Header/Header.jsx';

export default class Content extends React.Component {

    constructor(){
        super();
        this.state = {
            status: false,
            places: null
        }
        this.getData();
    }

     /*---------------------------------------------------*/
    getData(){
        let url = 'https://opendata.paris.fr/api/records/1.0/search/?dataset=stationnement-sur-voie-publique-emprises&rows=9999&facet=zonres&facet=regpri&facet=regpar&facet=typsta&facet=typ&facet=arrond&refine.regpri=Gratuit'
        Request.get(url).then(data => {
            this.setState({
                body: data.body.records
            });
        });
    }
    /*--------------------------------------------------- */
    onSubmit(e){
        e.preventDefault();
        this.getParkingPlaces(this.refs.arrond.value);
    }
    /*--------------------------------------------------- */
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
                <div>
                    <Header title={'Parkings gratuit'}/>
                    <div className='formulaire'>
                        <form onSubmit={this.onSubmit.bind(this)}>
                            <input type='text'
                                required ref='arrond'
                                placeholder='arrondissement'/>
                            <button type='submit'>Envoyer</button>
                        </form>
                    </div>
                    <Parking status={this.state.status} places={this.state.places}/>
                </div>
            )
        }
}