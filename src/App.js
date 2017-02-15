import React, { Component } from 'react';
import './App.css';
import './styles/AppInfoBoxStyle.css';
import MarkerStore from './stores/MarkerStore';
import UserStore from './stores/UserStore';
import Category from './components/Markers/Category';
import PeopleList from './components/Markers/PeopleList';
import MyMap from './components/Markers/Map';
import MarkerInfo from './components/Markers/MarkerInfo';
import FavoriteList from './components/Markers/FavoriteList';
import './styles/LinksMainPage.css';
import markersInfo from './DataApp';
import Header from './components/App/Header';
import "./audio/przhevalskiy.mp3";



class App extends Component {
    
    componentWillMount() {
        this.state = {
            category: null,
            person: null,
            markerName: null,
            markerInfo: null,
            auth: UserStore.auth,
            user: UserStore.user,
            favoriteMarker: null
        };
    }
    
    componentDidMount() {
        MarkerStore.addChangeListener(this.onChange);
        UserStore.addChangeListener(this.onChange);
    }
    
     componentWillUnmount() {
        MarkerStore.removeChangeListener(this.onChange);
        UserStore.removeChangeListener(this.onChange);
    }
    
    onChange = () => {
        this.setState({
            category: MarkerStore.category,
            person: MarkerStore.person,
            markerName: MarkerStore.markerName,
            markerInfo: MarkerStore.markerInfo,
            auth: UserStore.auth,
            user: UserStore.user,
            favoriteMarker: MarkerStore.favoriteMarker
        })       
    }
    
       
    
  render() {
    return (
      <div className="App">  
        <div>
        <audio autoplay src="./audio/przhevalskiy.mp3">  </audio>
        </div>
        
        <Header auth={this.state.auth}/>
        
        <div id="map">            
            <MyMap items={markersInfo} 
                    person={this.state.person}
                    markerName={this.state.markerName}/>
        </div>

        <div className="app_info_wrapper"> 

            <div className="category_wrapper">            
                <Category items={markersInfo}/>          
            </div>

            <div className="people_list_wrapper">            
                <PeopleList items={markersInfo} category={this.state.category}/>                      
            </div>            

            <FavoriteList auth={this.state.auth}
                          user={this.state.user}
                          items={markersInfo} />
        
            <div className="marker_info_wrapper">            
            <MarkerInfo items={markersInfo} 
                        person={this.state.person}
                        markerName={this.state.markerName}
                        markerInfo={this.state.markerInfo}
                        auth={this.state.auth}
                        user={this.state.user}/>                      
            </div>
        </div>     
      </div>
    );
  }
}

export default App;
