import React            from 'react';
import {Link}           from 'react-router';

export default class Header extends React.Component  {

    constructor(){
        super();
        this.props={}
    }
    render(){
        if(this.props.page == "velib"){
            var style = {
                 background: 'rgba(0,0,0,0.7)'
            }
        }
        else {
            var style = {
                 background: 'rgba(0,0,0,0.6)'
            }
        }
        return (
             <header style={style}>
                <h1>{this.props.title}</h1>
                <li><Link to='/' className='link'>Accueil</Link></li>
                <li><Link to='/velib' className='link'>Velib d'Ile de France</Link></li>
                <li><Link to='/parking' className='link'>Parkings gratuits Paris</Link></li>
            </header>
        )
    }
}

