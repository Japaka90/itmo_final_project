import React, { Component } from 'react';
import LogOutAction from '../../actions/LogOutAction';
import ShowFavoriteListAction from '../../actions/ShowFavoriteListAction';

class LinksIfAuth extends Component { 
    
    out = () => {
        LogOutAction.logOut()
        console.log('LogOutAction')
    }
    
    getFavoritePlaces = () => {
        ShowFavoriteListAction.showMyList();
    }
    
    render() {
        return(
            <div className="links_wraper">
                <div className="user_name">
                    {this.props.user}                    
                </div>
                <div className="logout_link">
                    <input className="logout_button" type="submit" onClick={this.out} value="Выйти" />                    
                </div>
                <div className="favorite_places_link">
                    <input className="favorite_places_button" type="submit" onClick={this.getFavoritePlaces} value="Избранное"/>
                 </div>
           </div>
        )
    }
    
}

export default LinksIfAuth;