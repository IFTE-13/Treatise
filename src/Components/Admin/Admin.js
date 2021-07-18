import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import './Admin.css';
import { UserContext } from '../../App';
import 'firebase/auth';
import { isLoggedIn, loggedInInfo } from '../Login/LoginManager';


const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const isLogged = isLoggedIn();
    const signOut = () => {
        setLoggedInUser({});
        sessionStorage.removeItem('token');
        localStorage.removeItem('token');
    };

    const loggedUser = loggedInInfo();

    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                    <Link to="/" className="text-white">
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/addBooks" className="text-white">
                        <span>Add</span>
                    </Link>
                </li>
                <li>
                    <Link to="/manage" className="text-white">
                        <span>Manage</span>
                    </Link>
                </li>
                <div>
                    <li>
                        <Link to="/edit" className="text-white">
                            <span>Edit</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                {
                    loggedInUser.email || isLogged ? <button className="btn bg-transparent btn-outline-light text-light" onClick={signOut}>Log Out</button> : <link></link>

                }
            </div>
        </div>

    );
};

export default Admin;