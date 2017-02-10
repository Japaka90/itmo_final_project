import React, { Component } from 'react';
import { Link } from 'react-router';

class LoginPage extends Component { 
    
//    getUserData = () => {
//        console.log(13);
//        return
//    }
    
    checkUser = () => {
//        this.getUserData();
        console.log(window.localStorage)
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
                    <input type="submit" value="Войти" onClick={this.checkUser}/>
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