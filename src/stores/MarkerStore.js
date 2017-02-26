import {EventEmitter} from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

class MarkerStore extends EventEmitter {
    
    constructor(...arg) {
        super(...arg);
        this.category = null;
        this.person = null;
        this.markerName = null;
        this.markerInfo = null;
        this.showFavotitePlaces = false;
    }
    
    addChangeListener(callback) {
        this.on('CHANGED', callback)
    }
    
    removeChangeListener(callback) {
        this.removeListener('CHANGED', callback)
    }
    
    setCategory(category) {
        this.category = category;
        this.person = null;
        this.markerName = null;
        this.markerInfo = null;
    }    
    
    setPerson(person) {
        this.person = person;
        this.markerName = null;
        this.markerInfo = null;
    } 
    
    setMarker(markerName, markerInfo) {
        this.markerName = markerName;
        this.markerInfo = markerInfo;
    }    
    
    setFavoritePlaces() {
        this.showFavotitePlaces = !this.showFavotitePlaces;
    }
    
}

let store = new MarkerStore();

store.dispatchToken = AppDispatcher.register((action) => {       
    switch(action.actionType) {         
        case 'CATEGORY_CHOSEN':            
            store.setCategory(action.category);
            store.emit('CHANGED');
            break;
        case 'PERSON_CHOSEN':            
            store.setPerson(action.person);
            store.emit('CHANGED'); 
            break;
        case 'MARKER_CHOSEN':
            store.setMarker(action.markerName, action.text);
            store.emit('CHANGED'); 
            break;
         case 'SHOW_FAVORITE_PLACES':
            store.setFavoritePlaces();
            store.emit('CHANGED'); 
            break;
        default:
            break;
    }
})


export default store;






