import React, { Component } from 'react';
import PeopleListAction from '../../actions/PeopleListAction';
import CategoryAction from '../../actions/CategoryAction';
import Przhevalsky from './Przhevalsky';
import '../../styles/font-awesome-4.7.0/css/font-awesome.min.css';

class PeopleList extends Component { 

    
    getAllPeople = (item) => {         
        let data = this.props.items;       
        let people =[];
        for (var i=0; i<data.length; i++) { 
            let lastItem = people[people.length-1];             
            if (data[i]['categoryId'] === item && data[i]['person'] !== lastItem ) {
                people.push(data[i]['person'])              
            }
        }        
        return people
    }
    
    
    renderPeopleItem = (item) => {         
        return (
        <li key={item} id={item} onClick={this.selectPerson}
            >{item}</li>
        );
    }
    
    selectPerson = (event) => {        
        PeopleListAction.getMarkersByPerson(event.target.id)        
    } 
    
    
    renderPeopleList = (item) => {          
        return (
            <ul key='peopleList'>
                { this.getAllPeople(item).map((item) => this.renderPeopleItem(item)) }
                <Przhevalsky category={this.props.category}/>
            </ul>
        )       
    }
    
    closingPeopleListButton = () => {
        if(this.props.category) {
            return (<i className="fa fa-times" aria-hidden="true"></i>)
        }
    }  
                    
         
    closePeopleList = () => {
         CategoryAction.getPeopleListByCategory(null)
    }            

     
render() {   
    
    return(
        <div>
            <div id="closingTag" className="close_people_list" onClick={this.closePeopleList}>
                {this.closingPeopleListButton()}              
            </div>
            {this.props.category ? this.renderPeopleList(this.props.category) : null}
        </div>
        )
   
    }
}

export default PeopleList;