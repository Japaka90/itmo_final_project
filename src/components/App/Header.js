import React, { Component } from 'react';
import '../../styles/Header.css';
import LinksForMainPage from '../../components/Registration/LinksForMainPage';

class Header extends Component { 
    
render() {   
     return(
        <div className="app_header">
            <h1>React App</h1>
             <LinksForMainPage auth={this.props.auth}/> 
        </div>
        )
    }
}

export default Header;