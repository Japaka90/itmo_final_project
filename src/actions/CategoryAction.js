import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    getPeopleListByCategory(category) {        
        AppDispatcher.dispatch({
            actionType: 'CATEGORY_CHOSEN',
            category: category
        })
    }
}