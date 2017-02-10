import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    getMarkersByPerson(person) {         
        AppDispatcher.dispatch({
            actionType: 'PERSON_CHOSEN',
            person: person
        })
    }
}