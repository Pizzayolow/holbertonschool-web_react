import { useContext } from 'react';
import './Header.css';
import HolbertonLogo from '../assets/holberton-logo.jpg';
import { newContext } from '../Context/context';

const Header = () => {
    const { user, logOut } = useContext(newContext);
    return (
        <div className="App-header">
            <img className="App-logo" src={HolbertonLogo} alt="holberton logo" />
            <h1>School dashboard</h1>
            {user.isLoggedIn && (
                <section id="logoutSection">
                    Welcome {user.email} (<a href="" onClick={logOut}>logout</a>)
                </section>
            )}
        </div>
    );
};

export default Header;
