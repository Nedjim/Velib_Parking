import React from 'react';
import {Link} from 'react-router';
import Background from '../img/rue-paris.jpg';


var Style = {
    backgroundImage: 'url('+Background+')'
}

export default class Home extends React.Component{

    render(){
        return (
            <div id='homePage' style={Style}>
                <div className='title'>
                    <h1>Une envie de vous déplacer? </h1> 
                </div>
                <div className='boxs'>
                    <Link to='/velib'>
                        <div className='box'>
                            <li>Velibs d'Ile de France</li>
                        </div>
                    </Link>
                    <Link to='/parking'>
                        <div className='box'>
                            <li>Parkings gratuits de Paris</li>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}