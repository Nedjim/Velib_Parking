import React        from 'react';
import Map          from './Map.jsx';

export default class Modal extends React.Component {

    constructor(props){
        super();
        this.state = {
            lat: props.place.geometry.coordinates[1],
            lng: props.place.geometry.coordinates[0],
            typevoie: props.place.fields.typvoie,
            nomvoie: props.place.fields.nomvoie,
            regpar: props.place.fields.regpar,
            type: props.place.fields.typ,
            stationnement : props.place.fields.plaval
        }
    }

    render() {
        if(this.props.isOpen === true) {
            return (
                <div className='modal' >
                    <div className='description'>
                        <div className='details'>
                            <div>
                                <div>Adresse </div>
                                <div>{this.state.typevoie}{" " + this.state.nomvoie}</div>
                            </div>
                            <div>
                                <div>Régime particulier</div>
                                <div>{this.state.regpar}</div>
                            </div>
                            <div>
                                <div>Type</div>
                                <div>{this.state.type}</div>
                            </div>
                            <div>
                                <div>Stationnement</div>
                                <div>{this.state.stationnement}</div>
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