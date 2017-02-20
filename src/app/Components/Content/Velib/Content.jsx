import React            from 'react';
import Request          from 'superagent';
import _                from 'lodash';
import Velib            from './Velib.jsx';
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

    getData(){
        let url = 'https://api.jcdecaux.com/vls/v1/stations?contract=Paris&available_bike_stands&apiKey=5a660b1f59583e8962c4ef34cedbc0bf283e7bd0'
        Request.get(url).then(data => {
            this.setState({
                body: data.body
            });
        });
    }

    onSubmit(e){
        e.preventDefault();
        this.getVelibPlaces(this.refs.zip.value);
    }

    getVelibPlaces(zip){
        let places = []

        _.map(this.state.body, e => {
            let address = e.address.split(' ');
             if(address[address.length -2] === zip){
                places.push(e);
            }
        });
        return places.length == 0 ? this.setState({status: false}) : this.setState({places: places, status: true});
    }

    render() {
        return (
            <div>
                <Header title={'VELIBS Ile de France'}/>
                <div className='formulaire'>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <input type='text'
                            required ref='zip'
                            placeholder='Code postale'
                            maxLength='5'/>
                        <button type='submit'>Chercher</button>
                    </form>
                </div>
                <div id='buttonIndication'>
                    <h3>Présence de vélos</h3>
                    <div>
                        <div className="round nul"></div>
                        <div>Nul</div>
                    </div>
                    <div>
                        <div className="round medium"></div>
                        <div>Moyenne</div>
                    </div>
                    <div>
                        <div className="round old"></div>
                        <div>Forte</div>
                    </div>
                </div>
                <Velib places={this.state.places} status={this.state.status}/>
            </div>
        )
    }
}