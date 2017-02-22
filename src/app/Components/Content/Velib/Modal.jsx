import React        from 'react';
import Map          from './Map.jsx';

export default class Modal extends React.Component {

    constructor(props){
        super();
        this.state = {
            adress : props.place.address,
            lat: props.place.position.lat,
            lng: props.place.position.lng,
            availableBikeStands: props.place.available_bike_stands,
            available_bikes: props.place.available_bikes,
            bikeStands: props.place.bike_stands, 
            status: props.place.status
        }
    }

    render() {
        if(this.props.isOpen === true) {
            return (
                <div className='modal'>
                    <div className='description'>
                        <div className='details'>s
                            <div>
                                <div>Adresse </div>
                                <div>{this.state.adress}</div>
                            </div>
                            <div>
                                <div>Place total </div>
                                <div>{this.state.bikeStands}</div>
                            </div>

                            <div>
                                <div>Emplacements disponible  </div>
                                <div>{this.state.availableBikeStands}</div>
                            </div>
                            <div>
                                <div>Vélibs disponible  </div>
                                <div>{this.state.available_bikes}</div>
                            </div>
                        </div>
                    </div>
                    <Map lat={this.state.lat} lng={this.state.lng}/>

                    <button onClick={this.props.closeModal.bind(this)}> Fermer </button>
                </div>
            )
        }
        else {
            return (
                       <div></div>
            )
        }
    }
}