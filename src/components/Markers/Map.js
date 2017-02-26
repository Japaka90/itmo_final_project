import React from 'react';
import { Component } from 'react';
import { Map, Marker, MarkerLayout } from 'yandex-map-react';
import MarkersAction from '../../actions/MarkersAction';


const mapState = {
    controls: ['zoomControl']
};


class MyMap extends Component { 
    
    getMarkers = (person) => {
        let markers = [];
        let data = this.props.items;
        for (var i in data) {   
            if (data[i]['person'] === person) {
                let item = [];
                item.push(data[i]['lat']);
                item.push(data[i]['lng']);
                markers.push(item);
            }
        }
        return markers
    }
  
    //получить данные о месте по координатам
    getInfo =(lat, lng) => {
        let data = this.props.items;
        let info = {};
        for (var i in data) {
            if (data[i]['lat'] === lat && data[i]['lng'] === lng){
                info.markerName = data[i]['markerName'];
                info.text = data[i]['text'];                
            }
        }
        return info
    }
    
    //получить координаты по названию места
    getCoordinates = (markerName) => {
        let data = this.props.items;
        let coordinates = {};
        for (var i in data) {
            if (data[i]['markerName'] === markerName){
                coordinates.lat = data[i]['lat'];
                coordinates.lng = data[i]['lng'];                
            }
        }
        return coordinates
    }
    
    
  selectMarker = (e) => {    
      let coordinates = e.get('target').geometry.getCoordinates();
      let lat = coordinates[0];
      let lng = coordinates[1];
     console.log('coordinates', e.get('target').geometry.getCoordinates());
      let moreInfo = this.getInfo(lat, lng);

        MarkersAction.getMarkerInfo(lat, lng, moreInfo.markerName, moreInfo.text);        
    } 
 
  
    renderFavoriteMarker = (lat, lng) => {
        if(this.props.markerName) {
            return (
                <Marker key={'favorite_place' }  
                lat={this.getCoordinates(this.props.markerName).lat} 
                lon={this.getCoordinates(this.props.markerName).lng}>
                    <MarkerLayout >
                        <div className="marker_selected" />  
                    </MarkerLayout>
                </Marker>
            )
        }
    }
      
       
    render() {        
        return (
            <Map 
            onAPIAvailable={function () { console.log('API loaded'); }}
            width={'100%'} height={'100%'} state={mapState} center={[50, 45]} zoom={2}>
            {this.getMarkers(this.props.person).map(([lat, lng], i) =>  (
                <Marker key={'marker_' + i}  lat={lat} lon={lng} 
                onClick={this.selectMarker}>
                    <MarkerLayout >
                        <div className="marker" />                        
                    </MarkerLayout>
                </Marker>                        
            ))}
            {this.renderFavoriteMarker(50,60)}
            </Map>    
        )
    }    
};

export default MyMap;
