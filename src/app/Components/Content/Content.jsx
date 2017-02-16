import React from 'react';
import Request from 'superagent';
import _ from 'lodash';

export default class Content extends React.Component {

    constructor(){
        super();
        this.state = {};
        this.getDataVelib();
        //this.getPlaces();
    }
    getDataVelib(){
        let url = 'https://api.jcdecaux.com/vls/v1/stations?contract=Paris&available_bike_stands&apiKey=5a660b1f59583e8962c4ef34cedbc0bf283e7bd0'

        Request.get(url).then(data => {
            this.setState({ data: data.body});
        })
    }

    render() {
         let data = this.state.data;
        _.map(data, e => {
            let address = e.address.split(' ');
             if(address[address.length -2] === '93100' || address[address.length -2] === '75012'){
                console.log(e);
            }
        });
        return (
            <div>
                hooh
            </div>
        )
    }
}