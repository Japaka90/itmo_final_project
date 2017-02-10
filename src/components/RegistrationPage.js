import React, { Component } from 'react';
import { Link } from 'react-router';

class RegistrationPage extends Component { 
    
    
    
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
                    <input type="password" name="password" id="password_input"/>
                  </div> 
            
                  <div>
                    <input type="submit" value="Зарегистрироваться"/>
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