import React, { Component } from 'react';
import FavoriteListAction from '../../actions/PeopleListAction';

class FavoriteList extends Component { 
    
    checkAuth = () => {
         console.log('fav_auth', this.props.auth);
        if (this.props.auth) {
            console.log('it will work');          
            
            return(
                <p>Z</p>
            )
        } else {
            return null
        }
    }
    
    render() {   
     return(
         <div>
         {this.checkAuth()}
         </div>
     )

    }
}

export default FavoriteList;