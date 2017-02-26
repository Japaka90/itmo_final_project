import React, { Component } from 'react';
import { Link } from 'react-router';
import UserStore from '../../stores/UserStore';
import CheckAuthStore from '../../stores/CheckAuthStore';
import LogInAction from '../../actions/LogInAction';
import UserExistAction from '../../actions/UserExistAction';
import WrongPasswordAction from '../../actions/WrongPasswordAction';
import ClearAlertAction from '../../actions/ClearAlertAction';


class RegistrationPage extends Component { 
    
    componentWillMount() {
        this.state = {
         auth: UserStore.auth,
         wrongPassword: false,
         userExist: false,
        };
    }

    componentDidMount() {
        UserStore.addChangeListener(this.onChange);
        CheckAuthStore.addChangeListener(this.onChange);        
    };

     componentWillUnmount() {
        UserStore.removeChangeListener(this.onChange);
        CheckAuthStore.removeChangeListener(this.onChange);
    };    
    
    onChange = () => {
        this.setState({            
            auth: UserStore.auth,  
            wrongPassword: CheckAuthStore.wrongPassword,
            userExist: CheckAuthStore.userExist,
        })   
    }
    
    registration = () => {
        ClearAlertAction.active();
        let login = this.login.value;
        let password = this.password.value;
        let password2 = this.password2.value;
        
        if (login !== ''){
            if (password !== password2) {
                WrongPasswordAction.active();
                this.password.value = '';
                this.password2.value = '';
                var flag = false
            } else {
                for (let key in window.localStorage) {
                    if (key === login) {
                        UserExistAction.active();
                        flag = true
                    }
                }

                if(!flag) {
                    let newUser = {login: login, 
                                   password: password,
                                   places: []}; 
                    window.localStorage.setItem(login, JSON.stringify(newUser));
                    console.log(window.localStorage);
                    LogInAction.logIn(login);
                }
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
                            
                        <div className="registration_error_alert">
                            <p style={this.state.userExist ? {visibility: "visible"} :{visibility: "hidden"}}>Такой пользователь уже существует</p>
                            
                            <p style={this.state.wrongPassword ? {visibility: "visible"} :{visibility: "hidden"}}>Проверочный пароль не совпадает с основным.</p>
                       </div>
                            
                       <Link to={this.state.auth ? '/' : ''}>
                            <input type="button" id="submit_btn" value="Зарегистрироваться" onClick={this.registration}/> 
                       </Link>  
                        
                    </form>
                </div>
                
                <div className="home_link">
                    <Link to="/">
                        <input type="button" id="home_link_btn" value="Вернуться на главную" />
                    </Link>
                </div>
                         
                
            </div>
        )
    }
    
}

export default RegistrationPage;