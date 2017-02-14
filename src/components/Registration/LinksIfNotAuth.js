import React, { Component } from 'react';
import { Link } from 'react-router';


class LinksIfNotAuth extends Component { 
    render() {
        return(
            <div className="links_wraper">
                <div className="login_link">
                    <Link to="/login">Войти</Link>
                </div>

                <div className="register_link">
                    <Link to="/register">Зарегистрироваться</Link>
                </div>
           </div>
        )
    }
    
}

export default LinksIfNotAuth;