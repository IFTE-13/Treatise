import React, { useContext } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import 'firebase/auth';
import { isLoggedIn, loggedInInfo } from '../Login/LoginManager';
import logo from './title.png';



const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const isLogged = isLoggedIn();
    const signOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
        localStorage.removeItem('token');
    };

    const loggedUser = loggedInInfo();

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand mx-4" to="/home"><img src={logo} className="w-50 log" alt="" /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <Link style={{ textDecoration: 'none' }} to="/home"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark btn w-100 px-3">Home</p>
                        </li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/orders"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark btn w-100 px-3">Orders</p>
                        </li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/manage"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark btn w-100 px-3">Admin</p>
                        </li></Link>
                        <Link style={{ textDecoration: 'none' }} to="/deals"><li className="nav-item active mr-3 p-1">
                            <p className="nav-link text-dark btn w-100 px-3">Deals</p>
                        </li></Link>
                        {
                            loggedInUser.email || isLogged ? <button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-dark btn-dark" onClick={signOut}>Sign Out, {loggedInUser.name || loggedUser.name ? loggedInUser.name || loggedUser.name : loggedInUser.displayName || loggedUser.displayName}</button> :
                                <Link to="/login"><button style={{ backgroundColor: "#111430", textDecoration: "none", color: "white" }} className="nav-item btn px-4 h-75 bg-dark btn-dark">Login</button></Link>
                        }
                    </ul>

                </div>
            </div>

        </nav>
    );
};

export default Header;