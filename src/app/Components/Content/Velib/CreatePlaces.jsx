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
        return (
                <div className='list'>
                    <li  onClick={this.openModal.bind(this)} >{this.props.place.name}</li>
                    <Modal isOpen={this.state.isModalOpen} place={this.props.place} closeModal={this.openModal}/>
                </div>
        )
    }
}