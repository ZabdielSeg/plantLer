import React from "react";

const SellerProfile = () => {
    return (
        <>
            <section className='section'>
                <div className="columns">
                    <div className="column is-3 is-flex is-justify-content-center">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                    </div>
                    <div className="column">
                        <div className="content is-medium">
                            <h2>Name</h2>
                            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section'>
                <div class="tile is-ancestor">
                    <div class="tile is-8 is-vertical">
                        <div class="tile">
                            <div class="tile is-6 is-parent">
                                <article class="tile is-child box">
                                    <p class="title">Six</p>
                                    <p class="subtitle">Subtitle</p>
                                </article>
                            </div>
                            <div class="tile is-6 is-parent">
                                <article class="tile is-child box">
                                    <p class="title">Seven</p>
                                    <p class="subtitle">Subtitle</p>
                                </article>
                            </div>
                        </div>
                        <div class="tile is-6 is-parent">
                            <article class="tile is-child box">
                                <p class="title">Eight</p>
                                <p class="subtitle">Subtitle</p>
                            </article>
                        </div>
                    </div>
                    <div class="tile is-4 is-parent">
                        <div class="tile is-child box">
                            <p class="title">Contact info</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='section has-background-blue'>
                <div className="columns">
                    <div className="column is-3 is-flex is-justify-content-center">
                        <figure class="image is-128x128">
                            <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                        </figure>
                    </div>
                    <div className="column">
                        <div className="content is-medium">
                            <h2>Name</h2>
                            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti</p>
                        </div>
                    </div>
                </div>
            </section> */}
        </>
    )
};

export default SellerProfile;