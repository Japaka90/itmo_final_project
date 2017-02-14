import React, { Component } from 'react';
import LogOutAction from '../../actions/LogOutAction';
import LinksMainPage from '../../styles/LinksMainPage.css';

class LinksIfAuth extends Component { 
    
    out = () => {
        LogOutAction.logOut()
        console.log('LogOutAction')
    }
    
    render() {
        return(
            <div className="links_wraper">
                <div className="logout_link">
                    <input type="submit" onClick={this.out} value="Выйти" />
                </div>
           </div>
        )
    }
    
}

export default LinksIfAuth;