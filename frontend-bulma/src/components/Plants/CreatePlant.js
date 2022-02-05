import React from 'react';

const CreatePlant = () => {
    return (
        <div className='hero is-fullheight-with-navbar'>
            <div className='hero-body'>
                <form className="box column is-half is-offset-one-quarter">
                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Name:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <p className="control is-expanded has-icons-left">
                                    <input className="input" type="text" placeholder="Name" />
                                    {/* <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span> */}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Description:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <textarea className="textarea" maxLength={'150'} minLength={'30'} placeholder="Guve a brief explanaion of the plant"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Location:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select>
                                            <option>Indoor</option>
                                            <option>Outdoor</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label is-normal">
                            <label className="label">Light:</label>
                        </div>
                        <div className="field-body">
                            <div className="field">
                                <div className="control">
                                    <div className="select is-fullwidth">
                                        <select>
                                            <option>Sol</option>
                                            <option>Sombra</option>
                                            <option>Semisombra</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="field is-horizontal">
                        <div className="field-label"></div>
                        <div className="field-body">
                            <div className="field is-narrow">
                                <div className="field has-addons">
                                    <p className="control">
                                        <a className="button is-static">
                                            $
                                        </a>
                                    </p>
                                    <p className="control is-expanded">
                                        <input className="input" type="number" placeholder="Set the price" />
                                    </p>
                                </div>
                                <p className="help">Do not enter the first zero</p>
                            </div>
                        </div>
                    </div>

                    <div className="file has-name is-fullwidth">
                        <div className="field-label is-normal">
                            <label className="label">Choose A File:</label>
                        </div>
                        <div className="field-body">
                        <div className="file">
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" />
                                    <span className="file-cta">
                                        <span className="file-icon">
                                            <i className="fas fa-upload"></i>
                                        </span>
                                        <span className="file-label">
                                            Choose a file…
                                        </span>
                                    </span>
                            </label>
                        </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreatePlant;