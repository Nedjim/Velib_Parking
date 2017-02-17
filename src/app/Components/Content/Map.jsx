import React from 'react';
import {GoogleMap}                          from 'react-google-maps';
import {Gmaps, Marker, InfoWindow, Circle}  from 'react-gmaps';

const coords = {
  lat:  48.856614,
  lng: 2.352222
};

export default class Map extends React.Component {

    constructor(props){
        super();
        this.state = {
            lat: props.lat,
            lng: props.lng
        }
    }

    onMapCreated(map) {
        map.setOptions({
        disableDefaultUI: true
        });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }

    render(){

        console.log(this.props);
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
                    lng={this.state.lng}
                    draggable={true}
                    onDragEnd={this.onDragEnd} />
            </Gmaps>
        )
    }
}