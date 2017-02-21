import React, { Component } from 'react';
import LinksIfNotAuth from './LinksIfNotAuth';
import LinksIfAuth from './LinksIfAuth';
import UserStore from '../../stores/UserStore';

export default class LinksForMainPage extends Component {
    
    componentWillMount() {
        this.state = {            
            auth: UserStore.auth,
            user: UserStore.user,            
        };
    }
    
    componentDidMount() {        
        UserStore.addChangeListener(this.onChange);
    }
    
     componentWillUnmount() {
        UserStore.removeChangeListener(this.onChange);
    }
    
    onChange = () => {
        this.setState({            
            auth: UserStore.auth,
            user: UserStore.user,            
        })       
    }
    
    
    
    
    render() {
        return(
            <div className="links_main_page">
            {this.state.auth ? <LinksIfAuth /> : <LinksIfNotAuth />}
            </div>
        )
    }    
}
