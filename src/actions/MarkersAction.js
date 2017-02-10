import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    getMarkerInfo(lat, lng, markerName, text) {      
        AppDispatcher.dispatch({
            actionType: 'MARKER_CHOSEN',
            markerName: markerName,
            lat: lat,
            lng: lng,
            text: text
        })
    }
}