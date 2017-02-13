import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    addFavorite(markerName) {       
        console.log(88, 'ADD_TO_FAVORITE')
        AppDispatcher.dispatch({
            actionType: 'ADD_TO_FAVORITE',
            markerName: markerName            
        })
    }
}