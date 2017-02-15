

export default {
    
    addFavorite(user, markerName, person) {  
        
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