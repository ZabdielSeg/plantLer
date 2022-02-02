import React from "react";

const PopoularPartnersCard = () => {
    return (
        <div className="column is-half">
            <div className="card">
                <div className="card-content container" style={{ width: '80%' }}>
                    <div className="media is-align-items-center">
                        <div className="media-left">
                            <figure className="image is-96x96">
                                <img className="is-rounded" src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">John Smith</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                        <div className="content">
                            <button className="button">See More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopoularPartnersCard;