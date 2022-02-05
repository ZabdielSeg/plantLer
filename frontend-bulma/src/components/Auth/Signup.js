import React, { useState } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [whatsAppNumber, setWhatsAppNumber] = useState('');
    const [isSeller, setIsSeller] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleUsername = e => setUsername(e.target.value);
    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handleDescription = e => setDescription(e.target.value);
    const handleIsSeller = e => {
        e.preventDefault();
        setIsSeller(!isSeller);
        setDescription('');
        setWhatsAppNumber('');
    };
    const handleWhatsAppNumber = e => setWhatsAppNumber(e.target.value);
    const handleErrorMessage = () => {
        setErrorMessage('');
    };

    const service = new AuthService();

    const handleFormSubmit = e => {
        e.preventDefault();

        service.signup(username, password, isSeller, description, email, whatsAppNumber)
            .then(response => (console.log(response)))
            .catch(err => {
                const errorDescription = err.response.data.message;
                setErrorMessage(errorDescription);
            });
    };

    return (
        <div className='hero is-fullheight-with-navbar'>
            <div className='hero-body column is-half is-offset-one-quarter box has-text-centered'>
                <h3>Signup</h3>
            </div>
            <div className='hero-body'>
                <form onSubmit={handleFormSubmit} className="box column is-half is-offset-one-quarter">
                    <div className="field">
                        <label className="label">Username</label>
                        <div className="control">
                            <input name='username' className="input" required value={username} onChange={handleUsername} type="text" placeholder="Text input" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left has-icons-right">
                            <input name='email' className="input is-danger" required type="email" placeholder="Email input" value={email} onChange={handleEmail} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-exclamation-triangle"></i>
                            </span>
                        </div>
                        <p className="help is-danger">This email is invalid</p>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input name='password' className="input" required value={password} onChange={handlePassword} type="password" placeholder="********" />
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button onClick={handleIsSeller} className="button is-link">{isSeller ? "No, I just want to BUY plants" : "I want to SELL plants"}</button>
                        </div>
                    </div>


                    {isSeller &&
                        <>
                            <div className="field">
                                <label className="label">Description</label>
                                <div className="control">
                                    <textarea name='description' className="textarea" required value={description} onChange={handleDescription} placeholder="Textarea"></textarea>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">WhatsApp Number</label>
                                <div className="control">
                                    <input className="input" name='whatsAppNumber' required type="tel" onChange={handleWhatsAppNumber} value={whatsAppNumber} pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}" />
                                    <small>Format: 777-123-45-67</small>
                                </div>
                            </div>
                        </>
                    }

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-link">Create Account</button>
                        </div>
                        <div className="control">
                            <span>Already an User?</span>
                            <Link to={'/login'} className="button is-link is-light">Login</Link>
                        </div>
                    </div>

                    { errorMessage &&
                        <div className="notification is-danger is-light">
                            <p onClick={handleErrorMessage} className="delete"></p>
                            {errorMessage}
                        </div>
                    }

                </form>
            </div>
        </div>
    );
};

export default Signup;