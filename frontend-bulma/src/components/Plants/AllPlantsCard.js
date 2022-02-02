import React from "react";

const AllPlantsCard = () => {
    return (
        <div className='card ' style={{ width: '30%', marginTop: '10px', marginBottom: '20px' }}>
            <div className="card-image">
                <figure className="image is-flex is-justify-content-center">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" style={{ width: '60%' }} />
                </figure>
            </div>
            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <div className='content is-medium'>
                            <h2 className="">Name sfnv fsjivf svisfjv </h2>
                            <p className="">Indoor/Outdoor</p>
                            <p className="">Cost</p>
                        </div>
                    </div>
                    <div className="media-right">
                        <button className="button is-primary is-light is-focused is-small">More Info</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllPlantsCard;