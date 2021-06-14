import React, { Component, createContext } from 'react';

export const UserContext = createContext({ user: null });

export default class UserProvider extends Component {
    state = {
        user: null,
        loaded: false,
    };

    componenentDidMount = async () => {
        window.netlifyIdentity.on('init', user => this.setState({ user: user, loaded: true }));
        window.netlifyIdentity.on('login', user => this.setState({ user: user, loaded: true }));
        window.netlifyIdentity.on('logout', user => this.setState({ user: user, loaded: true }));
    };

    render() {
        
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}