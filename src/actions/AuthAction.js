import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    checkUser(login, password) {        
        AppDispatcher.dispatch({
            actionType: 'AUTH',
            login: login,
            password: password
        })
    }
}