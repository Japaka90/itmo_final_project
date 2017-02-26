import React, { Component } from 'react';
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
        let data = this.props.items;
        let info = '';
        for (var i in data) {
            if (data[i]['markerName'] === markerName){
                info = data[i]['text'];                
            }
        }
        return info
    }
    
    getMarkerInfo = (event) => {
         MarkersAction.getMarkerInfo(0, 0, event.target.id, this.getInfoByMarkerName(event.target.id));
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
    
    showMyPlaces = () => {
        if (this.props.myList) {
            return {display: "block"}
        } else {
            return {display: "none"}
        }
    }
      
    checkAuth = () => {
        if (this.props.auth) {            
            return(
                <div className="favorite_list"  style={this.showMyPlaces()}>
                <h3 className="favorite_list_header">Мои любимые места</h3>
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