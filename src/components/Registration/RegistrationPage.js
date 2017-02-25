import React, { Component } from 'react';
import { Link } from 'react-router';
import LogInAction from '../../actions/LogInAction';


class RegistrationPage extends Component { 
    
    registration = () => {
        let login = this.login.value;
        let password = this.password.value;
        let password2 = this.password2.value;
        let repeat = false;
        
        if (password !== password2) {
            alert('Проверочный пароль не совпадает с основным. Пожалуйста введите пароль заново');
            this.password.value = '';
            this.password2.value = '';
        } else {
            for (let key in window.localStorage) {
                if (key === login) {
                    repeat = true;
                    alert('Пользователь с таким именем уже существует. Пожалуйста, выберите другое имя.');
                }
            }
            
            if(!repeat) {
                let newUser = {login: login, 
                               password: password,
                               places: []}; 
                window.localStorage.setItem(login, JSON.stringify(newUser));
                console.log(window.localStorage);
                LogInAction.logIn(login);
            }
        }
    }
    
    
    render() {
        return(
            <div className="registration_page">
                <div className="registration_box_wrapper">
                <h2>Зарегистрироваться</h2>
                    <form>
                         <input type="text" id="username_input" ref={(input) => this.login = input} placeholder="Введите логин"/>

                        <input type="password" id="password_input" ref={(input) => this.password = input} placeholder="Введите пароль"/>

                        <input type="password" id="password_input2" ref={(input) => this.password2 = input} placeholder="Повторите пароль"/>
                        
                        <input type="button" id="submit_btn" value="Зарегистрироваться" onClick={this.registration}/>                      
                    </form>
                </div>
                
                <div className="registration_additional_items">
                    <div className="have_account_wrapper">
                        <p>У меня уже есть личный кабинет!</p>
                        <Link to="/login" className="login_link">
                            <input type="button" id="login_btn" value="Войти в личный кабинет"/>
                        </Link>                    
                    </div>
                    <div className="home_link">
                        <Link to="/">
                            <input type="button" id="home_link_btn" value="Вернуться на главную" />
                        </Link>
                    </div>
                </div>           
                
            </div>
        )
    }
    
}

export default RegistrationPage;