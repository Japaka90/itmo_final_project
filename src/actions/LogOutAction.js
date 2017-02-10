import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    logOut() {  
        console.log('logout action')
        AppDispatcher.dispatch({
            actionType: 'LOG_OUT'             
        })
    }
}