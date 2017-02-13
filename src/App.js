import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MarkerStore from './stores/MarkerStore';
import UserStore from './stores/UserStore';
import Category from './components/Markers/Category';
import PeopleList from './components/Markers/PeopleList';
import MyMap from './components/Markers/Map';
import MarkerInfo from './components/Markers/MarkerInfo';
import FavoriteList from './components/Markers/FavoriteList';
import LinksForMainPage from './components/Registration/LinksForMainPage';



const markersInfo = [
    {
        category: 'Исследователи и Путешественники',
        categoryId: 'category1',
        person: 'Колумб',
        markerName: 'place of birth',
        lat: 50,
        lng: 50,
        text: 'Some text'
    },
    {
        category: 'Исследователи и Путешественники',
        categoryId: 'category1',
        person: 'Колумб',
        markerName: 'place of death',
        lat: 60,
        lng: 60,
        text: 'Some another text'
    },
    {
        category: 'Исследователи и Путешественники',
        categoryId: 'category1',
        person: 'Дарвин',
        markerName: 'firstb',
        lat: 70,
        lng: 50,
        text: 'Some text'
    },
    {
        category: 'Писатели',
        categoryId: 'category2',
        person: 'Магеллан',
        markerName: 'firstc',
        lat: 59,
        lng: 90,
        text: 'Some text'
    },
    {
        category: 'Писатели',
        categoryId: 'category2',
        person: 'Пушкин',
        markerName: 'secondc',
        lat: 58,
        lng: 61,
        text: 'Some text'
    },
    {
        category: 'Писатели',
        categoryId: 'category2',
        person: 'Достоевский',
        markerName: 'firstd',
        lat: 45,
        lng: 39,
        text: 'Some text'
    },
    {
        category: 'Писатели',
        categoryId: 'category2',
        person: 'Достоевский',
        markerName: 'secondd',
        lat: 69,
        lng: 70,
        text: 'Some text'
    },
    ]


class App extends Component {
    
    componentWillMount() {
        this.state = {
            category: null,
            person: null,
            markerName: null,
            markerInfo: null,
            auth: UserStore.auth,
            user: UserStore.user
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
            user: UserStore.user            
        })       
    }
    
       
    
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <LinksForMainPage auth={this.state.auth}/>         
        
        <div id="map">            
            <MyMap items={markersInfo} person={this.state.person}/>
        </div>
        
        <div className="category_wrapper">            
            <Category items={markersInfo}/>                      
        </div>
        
        <div className="people_list_wrapper">            
            <PeopleList items={markersInfo} category={this.state.category}/>                      
        </div>
        
        <div className="marker_info_wrapper">            
            <MarkerInfo items={markersInfo} 
                        person={this.state.person}
                        markerName={this.state.markerName}
                        markerInfo={this.state.markerInfo}
                        auth = {this.state.auth}/>                      
        </div>
        
        <FavoriteList auth = {this.state.auth}/>
        
      </div>
    );
  }
}

export default App;
