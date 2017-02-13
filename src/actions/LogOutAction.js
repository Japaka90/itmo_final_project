import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    logOut() {  
        AppDispatcher.dispatch({
            actionType: 'LOG_OUT'             
        })
    }
}