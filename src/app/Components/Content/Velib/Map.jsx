import React                                from 'react';
import {GoogleMap}                          from 'react-google-maps';
import {Gmaps, Marker, InfoWindow, Circle}  from 'react-gmaps';


export default class Map extends React.Component {

    constructor(props){
        super();
        this.state = {
            lat: props.lat,
            lng: props.lng
        }
    }

    onMapCreated = map => map.setOptions({ disableDefaultUI: true });

    render(){
        return (
            <Gmaps
                height={'50vh'}
                lat={this.state.lat}
                lng={this.state.lng}
                zoom={16}
                loadingMessage={'Be happy'}
                params={{v: '3.exp', key: 'AIzaSyBZgn4XfISYSuxKTfQZgbx5fHxetmEGfzI'}}
                onMapCreated={this.onMapCreated}>
                <Marker
                    lat={this.state.lat}
                    lng={this.state.lng} />
            </Gmaps>
        )
    }
}