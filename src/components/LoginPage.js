import React, { Component } from 'react';
import { Link } from 'react-router';
import LogInAction from '../actions/LogInAction';

class LoginPage extends Component { 
    
    checkUser = () => {
        let login = document.getElementById("username_input").value;
        let password = document.getElementById("password_input").value;
        for (let key in window.localStorage) {
            if (window.localStorage.key.login === window.localStorage.key.password) {                
                LogInAction.logIn(login);
                break;
            }
        }               
    }
    
    
    render() {
        return(
            <div>
                <h2>Войти в личный кабинет</h2>
                <form>
                  <div>
                     <label htmlFor="username_input">Введите логин</label>
                     <input type="text" name="username" id="username_input"/>
                  </div>
                  <div>  
                    <label htmlFor="password_input">Введите пароль</label>
                    <input type="password" name="password" id="password_input"/>
                  </div>  
                  <div>
                    <input type="button" value="Войти" onClick={this.checkUser}/>
                  </div>
                </form>
                
                <div className="no_account_wrapper">
                    <p>У меня нет личного кабинета :(</p>
                    <div className="registration_link">
                        <Link to="/register">Зарегистрироваться</Link>
                    </div>
                </div>
            
            
                <div className="home_link">
                    <Link to="/">Вернуться назад</Link>
                </div>
            </div>
        )
    }
    
}

export default LoginPage;