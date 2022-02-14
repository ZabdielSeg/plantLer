import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllPlantsCard = props => {
    const [price, setPrice] = useState('');
    useEffect(() => {
        setPrice(addCeros(props.price))
    }, [props])

    const addCeros = num => {
        if (!num.toString().includes('.')) return num += '.00';
        return num;
    }

    return (
        <div className='card' style={{ width: '30%', marginTop: '10px', marginBottom: '20px' }}>
            <div className="card-image" style={{ width: '80%', margin: 'auto' }}>
                <figure className="image is-4by3">
                    <img src={props.imageUrl} alt="Placeholder" className="" />
                </figure>
            </div>

            <div className="card-content">
                <div className="media">
                    <div className="media-content">
                        <p className="title is-4">{props.plantName}</p>
                        <p className="subtitle is-6">${price}</p>
                    </div>
                </div>

                <div className="content">
                    {props.description}
                    <br />
                </div>
            </div>

            <footer className="card-footer is-flex is-justify-content-center">
                <button className="button is-primary card-footer-item">Add to cart</button>
                <Link  className="button is-primary card-footer-item" to={`/plant/${props._id}`}>More Info</Link>
            </footer>
        </div>
    )
}

export default AllPlantsCard;