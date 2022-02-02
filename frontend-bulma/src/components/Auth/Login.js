import React from "react";

const Login = () => {
    return (
        <div className='hero is-fullheight-with-navbar'>
            <div className='hero-body'>
                <form className="box column is-half is-offset-one-quarter">
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" placeholder="e.g. alex@example.com" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control">
                            <input className="input" type="password" placeholder="********" />
                        </div>
                    </div>

                    <button className="button is-primary">Log in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;