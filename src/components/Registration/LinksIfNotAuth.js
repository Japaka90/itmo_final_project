import React, { Component } from 'react';
import { Link } from 'react-router';


class LinksIfNotAuth extends Component { 
    render() {
        return(
            <div className="links_wraper">
                <div className="login_link">
                    <Link to="/login">
                        <input type="button" className="main_page_links" value="Вход" />
                    </Link>
                </div>

                <div className="register_link">
                    <Link to="/register">
                        <input type="button" className="main_page_links" value="Регистрация" />
                    </Link>
                </div>
           </div>
        )
    }
    
}

export default LinksIfNotAuth;