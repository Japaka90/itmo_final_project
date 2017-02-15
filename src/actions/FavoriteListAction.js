//import AppDispatcher from '../dispatcher/AppDispatcher';

export default {
    
    addFavorite(user, markerName, person) {       
//        console.log(88, 'ADD_TO_FAVORITE')
//        AppDispatcher.dispatch({
//            actionType: 'ADD_TO_FAVORITE',                   
//        });
        
        for (let key in window.localStorage) {           
            if (key === user){
                let userData = JSON.parse(localStorage.getItem(key));
                let checkDubl = false;
                for(let i in userData.places) {
                    if (userData.places[i][1] === markerName) {
                            checkDubl = true
                        }
                }
                if (!checkDubl) {
                    userData.places.push([person, markerName]); 
                    let userDataJSON = JSON.stringify(userData);
                    window.localStorage.setItem(key, userDataJSON);
                }
            }
        }
    }
}