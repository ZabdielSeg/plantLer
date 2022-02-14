import React from "react";
import { Link } from "react-router-dom";

const PopoularPartnersCard = props => {
    return (
        <div className="column is-half">
            <div className="card">
                <div className="card-content container" style={{ width: '80%' }}>
                    <div className="media is-align-items-center">
                        <div className="media-left">
                            <figure className="image is-128x128">
                                <img className="is-rounded" src={props.imageUrl} alt="Placeholder" />
                            </figure>
                        </div>
                        <div className="media-content">
                            <p className="title is-4">{props.username}</p>
                            <p className="subtitle is-6">@johnsmith</p>
                        </div>
                        <div className="content">
                            <Link to={`/profile/${props._id}`} className="button">See More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopoularPartnersCard;