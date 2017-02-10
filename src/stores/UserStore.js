import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

class UserStore extends EventEmitter {
     constructor(...arg) {
        super(...arg);
        this.auth = false;
        this.user = null;        
    }
    
     addChangeListener(callback) {
        this.on('U_CHANGED', callback)
    }
    
    removeChangeListener(callback) {
        this.removeListener('U_CHANGED', callback)
    }
    
    login(user) {
        this.auth = true;
        this.user = user;        
    }    
    
    logout() {
        this.auth = false;
        this.user = null; 
    }
}

let store = new UserStore();

store.dispatchToken = AppDispatcher.register((action) => {  
    console.log('UserStore works')
    switch(action.actionType) {         
        case 'USER_CHECKED':            
            store.login(action.user);
            store.emit('U_CHANGED');
            break;   
        case 'LOG_OUT':             
            store.logout();
            console.log(store.auth);
            store.emit('U_CHANGED');
            break;
        default:
            break;
    }
})


export default store;