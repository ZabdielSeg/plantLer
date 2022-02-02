import React from 'react';

const CreatePlant = () => {
    return (
        <div className='hero is-fullheight-with-navbar'>
            <div className='hero-body'>
                <form className="box column is-half is-offset-one-quarter">
                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Name:</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <p class="control is-expanded has-icons-left">
                                    <input class="input" type="text" placeholder="Name" />
                                    {/* <span class="icon is-small is-left">
                                        <i class="fas fa-user"></i>
                                    </span> */}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Description:</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <textarea class="textarea" maxLength={'150'} minLength={'30'} placeholder="Guve a brief explanaion of the plant"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Location:</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <div class="select is-fullwidth">
                                        <select>
                                            <option>Indoor</option>
                                            <option>Outdoor</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="field is-horizontal">
                        <div class="field-label is-normal">
                            <label class="label">Light:</label>
                        </div>
                        <div class="field-body">
                            <div class="field">
                                <div class="control">
                                    <div class="select is-fullwidth">
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

                    <div class="field is-horizontal">
                        <div class="field-label"></div>
                        <div class="field-body">
                            <div class="field is-narrow">
                                <div class="field has-addons">
                                    <p class="control">
                                        <a class="button is-static">
                                            $
                                        </a>
                                    </p>
                                    <p class="control is-expanded">
                                        <input class="input" type="number" placeholder="Set the price" />
                                    </p>
                                </div>
                                <p class="help">Do not enter the first zero</p>
                            </div>
                        </div>
                    </div>

                    <div class="file has-name is-fullwidth">
                        <div class="field-label is-normal">
                            <label class="label">Choose A File:</label>
                        </div>
                        <div class="field-body">
                        <div class="file">
                            <label class="file-label">
                                <input class="file-input" type="file" name="resume" />
                                    <span class="file-cta">
                                        <span class="file-icon">
                                            <i class="fas fa-upload"></i>
                                        </span>
                                        <span class="file-label">
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