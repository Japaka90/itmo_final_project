import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    active() {  
        AppDispatcher.dispatch({
            actionType: 'WRONG_PASSWORD'             
        });
    }
}