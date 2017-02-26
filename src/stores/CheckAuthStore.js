import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

class CheckAuthStore extends EventEmitter {
    
     constructor(...arg) {
        super(...arg);
        this.wrongPassword = false;
        this.userExist = false;        
    }
    
     addChangeListener(callback) {
        this.on('C_CHANGED', callback)
    }
    
    removeChangeListener(callback) {
        this.removeListener('C_CHANGED', callback)
    }
    
    wrongPasswortAlert() {
        this.wrongPassword = true;    
        this.userExist = false;
    }    
    
    userExistAlert() {
        this.userExist = true;
        this.wrongPassword = false;  
    }
    
    clearAlert() {
        this.userExist = false;
        this.wrongPassword = false;  
    }
    
}

let store = new CheckAuthStore();

store.dispatchToken = AppDispatcher.register((action) => {
    switch(action.actionType) {         
        case 'WRONG_PASSWORD':            
            store.wrongPasswortAlert();
            store.emit('C_CHANGED');
            break;   
        case 'USER_EXIST':             
            store.userExistAlert();
            store.emit('C_CHANGED');
            break;
        case 'CLEAR_ALERT':             
            store.clearAlert();
            store.emit('C_CHANGED');
            break;
        default:
            break;
    }
})


export default store;