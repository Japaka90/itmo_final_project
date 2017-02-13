import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    logIn(login) { 
        console.log(login, 'login');
        AppDispatcher.dispatch({
            actionType: 'USER_CHECKED',
            user: login            
        })
    }
}