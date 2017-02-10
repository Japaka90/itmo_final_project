import React, { Component } from 'react';
import { Link } from 'react-router';

class RegistrationPage extends Component { 
    
    registration = () => {
        let login = document.getElementById("username_input").value;
        let password = document.getElementById("password_input").value;
        let password2 = document.getElementById("password_input2").value;
        console.log(login, password, password2);
        if (password !== password2) {
            alert('Проверочные пароль не совпадает с основным. Пожалуйста введите пароль заново');
            document.getElementById("password_input").value = '';
            document.getElementById("password_input2").value = '';
        }
        for (let key in window.localStorage) {
            if (key === login) {
                alert('Пользователь с таким именем уже существует. Пожалуйста, выберите другое имя.')
            }
        }
        let newUser = {login: login, 
                       password: password}; 
        window.localStorage.setItem(login, JSON.stringify(newUser));
        console.log(window.localStorage)        
    }
    
    
    render() {
        return(
            <section>
                <h2>Зарегистрироваться</h2>
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
                    <label htmlFor="password_input">Повторите пароль</label>
                    <input type="password" name="password" id="password_input2"/>
                  </div> 
            
                  <div>
                    <input type="button" value="Зарегистрироваться" onClick={this.registration}/>
                  </div>
                </form>
                
                <div className="have_account_wrapper">
                    <p>У меня уже есть личный кабинет!</p>
                    <Link to="/login" className="registration_link">Войти в личный кабинет</Link>                    
                </div>
            
            
                <div className="home_link">
                    <Link to="/">Вернуться назад</Link>
                </div>
            </section>
        )
    }
    
}

export default RegistrationPage;