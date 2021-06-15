import React, { Component, createContext } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

export const UserContext = createContext({ user: null });

export default class UserProvider extends Component {
    state = {
        user: null,
        loaded: false,
    };

    componentDidMount = async () => {
        netlifyIdentity.on('init', user => this.setState({ user: user, loaded: true }));
        netlifyIdentity.on('login', user => {
            this.setState({ user: user, loaded: true });
            netlifyIdentity.close();
        });
        netlifyIdentity.on('logout', user => this.setState({ user: user, loaded: true }));

        netlifyIdentity.init({});
    };

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}