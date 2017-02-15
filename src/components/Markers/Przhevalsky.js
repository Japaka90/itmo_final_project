import React, { Component } from 'react';
import igogo from "../../audio/przhevalskiy.mp3";

class Przhevalsky extends Component { 
    
    checkPrzhevalsky = () => {
        return ((this.props.category === 'category1') ? <li onClick={this.soundClick}>Пржевальский</li> : null)
    }
        
    chekme = () => {
        return (<li></li>)
    }
    
    soundClick = () => {
      var audio = new Audio(); 
      audio.src = igogo; 
      audio.autoplay = true;
    }
        
    render() {        
         return(this.checkPrzhevalsky())
    }
}

export default Przhevalsky;