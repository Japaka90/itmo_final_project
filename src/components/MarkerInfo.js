import React, { Component } from 'react';
//import MarkerActions from '../actions/MarkerActions';

class MarkerInfo extends Component {     
    
    getMarkerInfo = () => {
        let mark = {};
        mark.name = this.props.markerName;
        mark.info = this.props.markerInfo;
        return mark
    }
    
    style = () => {
        if(this.props.markerName) {
            return ({border: "1px solid black",
                    background: "lightblue"})
        }
        
    }
    
    render() {
        
        let mark = this.getMarkerInfo();
        
        return(
            <div className="place_info" style={this.style()}>
                <h3>{mark.name}</h3>
                <p>{mark.info}</p>            
            </div>
        )
    }
}

export default MarkerInfo;