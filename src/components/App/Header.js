import React, { Component } from 'react';
import '../../styles/Header.css';
import LinksForMainPage from '../../components/Registration/LinksForMainPage';
import Category from '../../components/Markers/Category';

class Header extends Component { 
    
render() {   
     return(
        <div className="app_header">
         <div className="category_wrapper">            
                <Category items={this.props.items}/>          
            </div>            
             <LinksForMainPage/> 
        </div>
        )
    }
}

export default Header;