import React, { Component } from 'react';
import PeopleListAction from '../../actions/PeopleListAction';
import Przhevalsky from './Przhevalsky';

class PeopleList extends Component { 

    
// создать список людей без повторов по конкретной категории
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

     
render() {   
    
    return(
        <div>
            {this.props.category ? this.renderPeopleList(this.props.category) : null}
        </div>
        )
   
    }
}

export default PeopleList;