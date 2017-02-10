import React, { Component } from 'react';
import { Link } from 'react-router';
import LogOutAction from '../actions/LogOutAction';


class LinksIfAuth extends Component { 
    
    out = () => {
        LogOutAction.logOut()
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