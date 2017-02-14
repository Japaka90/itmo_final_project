import React, { Component } from 'react';
import FavoriteListAction from '../../actions/PeopleListAction';
import PeopleListAction from '../../actions/PeopleListAction';
import MarkersAction from '../../actions/MarkersAction';

class FavoriteList extends Component {
    
    getFavoritePlaces = (user) => {
        let allPlaces = [];
        for (let key in window.localStorage) {           
                if (key === user){
                    let userData = JSON.parse(localStorage.getItem(key));
                    for (let i in userData.places) {
                        allPlaces.push(userData.places[i][1])
                    }
                }
        }
        return allPlaces;
    }
    
    getInfoByMarkerName = (markerName) => {
        
    }
    
    getMarkerInfo = (event) => {
        console.log('event', event.target.id)
         MarkersAction.getMarkerInfo(0, 0, event.target.id, 'text');
    }
    
    renderFavoriteItem = (item) => {         
        return (
        <li key={item+'_F'} id={item} onClick={this.getMarkerInfo}>{item}</li>
        );
    }
    
    renderFavoriteList = (user) => {
        let userData = JSON.parse(localStorage.getItem(user));
        console.log('renderFavoriteList userData.places', userData.places)
        if(userData.places !== []){
        return (
            <ul key='favoriteList'>
                { this.getFavoritePlaces(this.props.user).map((item) => this.renderFavoriteItem(item)) }
            </ul>
        ) }      
    }
    
    checkAuth = () => {
        if (this.props.auth) {            
            return(
                <div>
                <h3>Мои любимые места</h3>
                 {this.renderFavoriteList(this.props.user)}
                </div>
            )
        } else {
            return null
        }
    }
    
    render() {   
     return(
         <div className='my_favorite_places'>
            {this.checkAuth()}            
         </div>
     )

    }
}

export default FavoriteList;