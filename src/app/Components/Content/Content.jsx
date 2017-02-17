import React from 'react';
import Request from 'superagent';
import _ from 'lodash';
import Places from './Places.jsx';

export default class Content extends React.Component {

    constructor(){
        super();
        this.state = {
            status: false,
            places: null
          // search: ''
        }
        this.getData();
    }

     /*---------------------------------------------------*/
    getData(){
        let url = 'https://api.jcdecaux.com/vls/v1/stations?contract=Paris&available_bike_stands&apiKey=5a660b1f59583e8962c4ef34cedbc0bf283e7bd0'
        Request.get(url).then(data => {
            this.setState({status: true});
            this.getVelibPlaces(data.body);
        });
    }
    /*---------------------------------------------------*/
    getVelibPlaces(body){
        let places = []

        _.map(body, e => {
            let address = e.address.split(' ');
             if(address[address.length -2] === '93100'){
                places.push(e);
            }
        });
        this.setState({places: places});
    }
    /*--------------------------------------------------- */
    updateSearch(e){
        this.setState({search: e.target.value});
    }
     /*---------------------------------------------------*/
    render() {
        return (
            <div>
                <input type='text'
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)}
                       placeholder='Saisissez le code postale'
                       maxLength='5'/>
                <Places places={this.state.places}/>
            </div>
        )
    }
}