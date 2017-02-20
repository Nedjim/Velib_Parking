import React        from 'react';
import Modal        from './Modal.jsx';

export default class CreatePlaces extends React.Component {

     constructor() {
        super();
        this.state = {
            isModalOpen: false
        }
    }

    openModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

    render() {

        let available_bikes = this.props.place.available_bikes;
        let round = Math.round(this.props.place.bike_stands / 3);

        if( available_bikes === 0 ){
             var style = {
                 background: '#424242'
            }
        }

        else if (available_bikes < round * 2) {
            var style = {
                 background: '#CDDC39'
            }
        }
        else {
            var style = {
                 background: '#4CAF50'
            }
        }

        return (
                <div className='list'>
                    <li  onClick={this.openModal.bind(this)} >{this.props.place.name}</li>
                    <div className='eval round' style={style}> </div>
                    <Modal isOpen={this.state.isModalOpen} place={this.props.place} closeModal={this.openModal}/>
                </div>
        )
    }
}