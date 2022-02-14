import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AuthService from './Auth/auth-service';

const NavBar = props => {
    const [user, setUser] = useState({});
    useEffect(() => {
        setUser(props.theUser);
    }, [props.theUser]);

    const toggleBurger = () => {
        let burgerIcon = document.getElementById('burger');
        let dropMenu = document.getElementById('navbarBasicExample');
        burgerIcon.classList.toggle('is-active');
        dropMenu.classList.toggle('is-active');
    };

    const service = new AuthService();

    const handleLogOut = () => {
        service.logout()
            .then(() => props.getUser(null));
    }

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to='/' className="navbar-item">
                    <img src='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1644629896/PlantLer/LogoPlantLer_rmspxe.jpg' width='50' alt='logo'/>
                </Link>


                <a role="button" id='burger' className="navbar-burger" aria-label="menu" aria-expanded="true" data-target="navbarBasicExample" onClick={toggleBurger}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>

            </div>

            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link to='/' className="navbar-item">
                        Home
                    </Link>

                    <Link to='products' className="navbar-item">
                        All Products
                    </Link>
                </div>

                <div className="navbar-end">
                    {user &&
                        <figure className="image is-48x48">
                            <img alt='Profile' className="is-rounded" src={user.imageUrl} />
                        </figure>
                    }
                    <div className='navbar-item' >
                        <Link to='cart' className="button">
                            <span className="icon">
                                <FontAwesomeIcon icon={faShoppingCart} size='lg' />
                                <span>{props.theCart.length}</span>
                            </span>
                        </Link>
                    </div>

                    <div className="navbar-item">
                        <div className="buttons">
                            {
                                user
                                    ?
                                    <>
                                        {user.isSeller
                                            &&
                                            <Link to={`/profile/${user._id}`} className="button is-primary">
                                                <strong>Profile</strong>
                                            </Link>
                                        }
                                        <button onClick={handleLogOut} className="button is-danger">
                                            <strong>Logout</strong>
                                        </button>
                                    </>
                                    :
                                    <>
                                        <Link to="signup" className="button is-primary">
                                            <strong>Sign up</strong>
                                        </Link>
                                        <Link to='login' className="button is-light">
                                            Log in
                                        </Link>
                                    </>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;