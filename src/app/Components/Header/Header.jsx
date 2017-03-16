import React            from 'react';
import {Link}           from 'react-router';

export default class Header extends React.Component  {

    render(){
        return (
             <header>
                <h1>{this.props.title}</h1>
                <li><Link to='/'>Accueil</Link></li>
                <li><Link to='/velib'>Velib d'Ile de France</Link></li>
                <li><Link to='/parking'>Parkings gratuits Paris</Link></li>
            </header>
        )
    }
}

