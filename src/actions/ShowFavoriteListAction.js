import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    showMyList() {        
        AppDispatcher.dispatch({
            actionType: 'SHOW_FAVORITE_PLACES'
        });
    }
}