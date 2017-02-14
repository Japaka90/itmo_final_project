import React, { Component } from 'react';
import LinksIfNotAuth from './LinksIfNotAuth';
import LinksIfAuth from './LinksIfAuth';


export default class LinksForMainPage extends Component {
    render() {
        return(
            <div className="links_main_page">
            {this.props.auth ? <LinksIfAuth /> : <LinksIfNotAuth />}
            </div>
        )
    }    
}
