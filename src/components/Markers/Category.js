import React, { Component } from 'react';
import CategoryAction from '../../actions/CategoryAction';

class Category extends Component { 
    
    getAllCategories = () => {
        let data = this.props.items;
        let categories = [];
        for (var i in data) {            
            let lastItem = categories[categories.length-1]; 
            if (lastItem !== data[i]['category']) {
                categories.push(data[i]['category'])
            }           
        }             
        return categories
    }
    
    getCategoryId = (categoryName) => {
        let data = this.props.items;
        for (var i in data) {
            if (data[i]['category'] === categoryName) {
                var categoryId = data[i]['categoryId'];   
            }
        }
        return categoryId
    }
    
    selectCategory = (event) => {       
        CategoryAction.getPeopleListByCategory(event.target.id) 
    } 
    
    // выбор конкретной категории меняет state
     renderItem = (item) => { 
        let index = this.getCategoryId(item);        
        return (
        <li key={index} id={index} 
            onClick={this.selectCategory}>{item}</li>
        );
    }
    
    render() {   
        
      
        
         return(
            <ul>
                {this.getAllCategories().map((item) => this.renderItem(item))}
            </ul>
        )
    }
}

export default Category;