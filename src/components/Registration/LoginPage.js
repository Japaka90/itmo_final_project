import React, { Component } from 'react';
import { Link } from 'react-router';
import LogInAction from '../../actions/LogInAction';
import UserStore from '../../stores/UserStore';
import CheckAuthStore from '../../stores/CheckAuthStore';
import WrongPasswordAction from '../../actions/WrongPasswordAction';
import UserExistAction from '../../actions/UserExistAction';
import '../../styles/LoginPageStyle.css';
import sadCat from "../../img/sad_cat.jpg";

class LoginPage extends Component {
    
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
            userExist: CheckAuthStore.userExist
        })   
    }
    
    
    checkUser = () => {
        let login = this.login.value;
        let password = this.password.value; 
        let checkArr = [];
        
        for (let key in window.localStorage) {
            checkArr.push(key);
            if (key === login) {               
                let user = JSON.parse(localStorage.getItem(key));  
                if (user.password === password) {                
                    LogInAction.logIn(login);      
                } else {
                    WrongPasswordAction.active();
                }    
            }
        }
        if (checkArr.indexOf(login) === -1) {
             UserExistAction.active();
        }
    }
    
    
    render() {
        return(
            <div className="login_page">
                <div className="login_box_wrapper">                    
                    <form className="login"> 
                        <h2>Войти в личный кабинет</h2>            
            
                        <input type="text" id="username_input" ref={(input) => this.login = input} placeholder="Введите логин"/>
            
                        <input type="password" id="password_input" ref={(input) => this.password = input} placeholder="Введите пароль"/>
                        
                        <div className="login_error_alert" >
                            <p style={this.state.wrongPassword ? {visibility: "visible"} :{visibility: "hidden"}}>Неправильный пароль</p>
                       
                            <p style={this.state.userExist ? {visibility: "visible"} :{visibility: "hidden"}}>Пользователь с таким именем не найден</p>
                        </div>
                            
                        <Link to={this.state.auth ? '/' : ''}>
                            <input type="button" id="submit_btn" value="Войти" onClick={this.checkUser}/>
                        </Link>
                               
                    </form>
                </div>
                <div className="login_additional_items">
                     
                    <div className="no_account_wrapper">
                        <p>У меня нет личного кабинета :(</p>
                        <img className="no_account_img" src={sadCat} alt="sad cat"/>
            
                        <div className="registration_link">
                            <Link to="/register"><input type="button" id="registration_btn" value="Зарегистрироваться"/></Link>
                        </div>
                    </div>
                    
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

export default LoginPage;