import React, { Component } from 'react';
import MarkersAction from '../../actions/MarkersAction';

class PeopleList extends Component { 

    getPlaces = (person) => {
        let data = this.props.items;  
        let places =[];
        for (var i=0; i<data.length; i++) {                       
            if (data[i]['person'] === person ) {
                places.push(data[i]['markerName'])              
            }
        }        
        return places
    }
    
    selectPlace = (event) => {
         MarkersAction.getMarkerInfo(0, 0, event.target.id, this.getInfoByMarkerName(event.target.id));
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
    
    
    renderPlaceItem = (item) => {         
        return (
        <li key={item} id={item} onClick={this.selectPlace}>{item}</li>
        )
    }
    
    renderPlaceList = (item) => {          
        return (
            
            <ul key='peopleList'>
                { this.getPlaces(item).map((item) => this.renderPlaceItem(item)) }                
            </ul>
        )       
    }
    
    
    
    render() {
        return(
            <div>
                {this.props.person ? this.renderPlaceList(this.props.person) : null}
            </div>
            )   
        }
    }

export default PeopleList;