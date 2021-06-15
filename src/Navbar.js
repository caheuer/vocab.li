import { useContext } from 'react';
import { UserContext } from './providers/UserProvider';
import netlifyIdentity from 'netlify-identity-widget';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    const { user, loaded } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">vocab.li</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink exact to="/" className="nav-link" activeClassName="active">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link" activeClassName="active">Search</NavLink>
                        </li>
                        {user && <li className="nav-item">
                            <NavLink to={'/profile/' + user.id + '/decks'} className="nav-link" activeClassName="active">My card decks</NavLink>
                        </li>}
                    </ul>
                    {user && <div className="me-2"><NavLink to={'/profile/' + user.id} className="nav-link">Logged in as {user.user_metadata.full_name}</NavLink></div>}
                    {loaded && user ? <button className="btn btn-outline-danger" onClick={() => netlifyIdentity.logout()}>Log Out</button> : <button className="btn btn-outline-success" onClick={() => netlifyIdentity.open()}>Log In/Sign Up</button>}
                </div>
            </div>
        </nav>
    );
}