import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    logIn(login) {       
        console.log(8, 'USER_CHECKED')
        AppDispatcher.dispatch({
            actionType: 'USER_CHECKED',
            user: login            
        })
    }
}