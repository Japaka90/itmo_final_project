import React, { Component } from 'react';
import { Link } from 'react-router';
import LogInAction from '../../actions/LogInAction';
import UserStore from '../../stores/UserStore';
import '../../styles/LoginPageStyle.css';

class LoginPage extends Component {
    
    componentWillMount() {
        this.state = {
         auth: UserStore.auth,
        };
    }

    componentDidMount() {
        UserStore.addChangeListener(this.onChange);
    };

     componentWillUnmount() {
        UserStore.removeChangeListener(this.onChange);
    };    
    
    onChange = () => {
        this.setState({            
            auth: UserStore.auth,                  
        })   
    }
    
    
    checkUser = () => {
        let login = document.getElementById("username_input").value;
        let password = document.getElementById("password_input").value; 
        
        for (let key in window.localStorage) {                     
            if (key === login) {               
                let user = JSON.parse(localStorage.getItem(key));  
                if (user.password === password) {                
                    LogInAction.logIn(login);      
                } else {alert('Неверный пароль')}    
            }
        }              
    }
    
    checkAuth = () => {
        
    }

    
    render() {
        return(
            <div className="login_page">
                <div className="login_box_wrapper">
                    <h2>Войти в личный кабинет</h2>
                    <form className="login">                      
                        <input type="text" id="username_input" placeholder="Введите логин"/>
            
                        <input type="password" id="password_input" placeholder="Введите пароль"/>
            
                        <Link to={this.state.auth ? '/' : ''}>
                            <input type="button" id="submit_btn" value="Войти" onClick={this.checkUser}/>
                        </Link>
            
                       <div className="home_link">
                            <Link to="/">
                                <input type="button" id="home_link_btn" value="Вернуться назад" />
                            </Link>
                        </div>
                    </form>
                </div>
                <div className="login_additional_items">
                     
                    <div className="no_account_wrapper">
                        <p>У меня нет личного кабинета :(</p>
                        <img className="no_account_img" src="http://file.mobilmusic.ru/f7/ea/43/1131059.jpg" alt="sad cat"/>
            
                        <div className="registration_link">
                            <Link to="/register"><input type="button" id="registration_btn" value="Зарегистрироваться"/></Link>
                        </div>
                    </div>


                    
                </div>
            </div>
        )
    }
    
}

export default LoginPage;