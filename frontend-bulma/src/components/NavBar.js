import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {

    const toggleBurger = () => {
        let burgerIcon = document.getElementById('burger');
        let dropMenu = document.getElementById('navbarBasicExample');
        burgerIcon.classList.toggle('is-active');
        dropMenu.classList.toggle('is-active');
    };

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to='/' className="navbar-item">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
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
                    <div className='navbar-item' >
                        <Link to='cart' className="button">
                            <span className="icon">
                                <FontAwesomeIcon icon={faShoppingCart} size='lg' />
                                <span>2</span>
                            </span>
                        </Link>
                    </div>

                    <div className="navbar-item">

                        <div className="buttons">
                            <Link to="signup" className="button is-primary">
                                <strong>Sign up</strong>
                            </Link>
                            <Link to='login' className="button is-light">
                                Log in
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;