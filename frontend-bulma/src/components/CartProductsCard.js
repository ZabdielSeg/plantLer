import React from 'react';

const ProductsCard = () => {
    return (
        <div className="card" style={{ width: '90%', margin: '20px auto' }}>
            <div className="card-content">
                <div className="media">
                    <div className="media-left">
                        <figure className="image is-96x96">
                            <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <p className="title is-4">John Smith</p>
                        <p className="subtitle is-6">@johnsmith</p>
                    </div>
                    <div className="content" style={{ width: '25%' }}>
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" value={1} />
                            </div>
                            <div className="control">
                                <button className="button is-info">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsCard;