import React, { Component } from 'react';
import { Link } from 'react-router';
import LogInAction from '../../actions/LogInAction';
import UserStore from '../../stores/UserStore';

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
                    <Link to={this.state.auth ? '/' : ''}>
                        <input type="button" value="Войти" onClick={this.checkUser}/>
                    </Link>
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