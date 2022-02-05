import React, { useState } from "react";
import AuthService from './auth-service';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleEmail = e => setEmail(e.target.value);
    const handlePassword = e => setPassword(e.target.value);
    const handleErrorMessage = () => {
        setErrorMessage('');
    };

    const service = new AuthService();

    const handleFormSubmit = e => {
        e.preventDefault();

        service.login(email, password)
            .then(response => (console.log(response)))
            .catch(err => {
                const errorDescription = err.response.data.message.message;
               setErrorMessage(errorDescription);
            });
    };

    return (
        <div className='hero is-fullheight-with-navbar'>
            <div className='hero-body'>
                <form onSubmit={handleFormSubmit} className="box column is-half is-offset-one-quarter">
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input name="email" className="input" type="email" placeholder="e.g. alex@example.com" value={email} onChange={handleEmail} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input name="password" className="input" type="password" placeholder="********" value={password} onChange={handlePassword} />
                        </div>
                    </div>

                    <button className="button is-primary">Log in</button>

                    {errorMessage &&
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

export default Login;