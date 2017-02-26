import React, { Component } from 'react';
import './App.css';
import './styles/AppInfoBoxStyle.css';
import MarkerStore from './stores/MarkerStore';
import UserStore from './stores/UserStore';
//import Category from './components/Markers/Category';
import PeopleList from './components/Markers/PeopleList';
import MyMap from './components/Markers/Map';
import MarkerInfo from './components/Markers/MarkerInfo';
import FavoriteList from './components/Markers/FavoriteList';
import './styles/LinksMainPage.css';
import markersInfo from './DataApp';
import Header from './components/App/Header';
import PlacesList from './components/Markers/PlacesList';


class App extends Component {
    
    componentWillMount() {
        this.state = {
            category: null,
            person: null,
            markerName: null,
            markerInfo: null,
            showFavotitePlaces: false,
            auth: UserStore.auth,
            user: UserStore.user,            
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
            showFavotitePlaces: MarkerStore.showFavotitePlaces,
            auth: UserStore.auth,
            user: UserStore.user,            
        })       
    }
    
    infoBlockStyle = () => {
        if (!this.state.category) {
            if (this.state.showFavotitePlaces) {
                return {display: "block"}
            }
            return {display: "none"}
        }        
    }
       
    
  render() {
    return (
      <div className="App">  
        
        <Header items={markersInfo}/>
        
        <div id="map">            
            <MyMap items={markersInfo} 
                    person={this.state.person}
                    markerName={this.state.markerName}/>
        </div>

        <div className="app_info_wrapper" style={this.infoBlockStyle()}> 

            

            <div className="people_list_wrapper">            
                <PeopleList items={markersInfo} category={this.state.category}/>                      
            </div>   
                
            <div className="places_list_wrapper">  
                <PlacesList items={markersInfo}
                            person={this.state.person}/>
            </div> 

            <FavoriteList auth={this.state.auth}
                          user={this.state.user}
                          items={markersInfo}
                          myList={this.state.showFavotitePlaces}/>
        
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
