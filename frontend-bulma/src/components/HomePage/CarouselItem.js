import React from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = props => {
    return (
        // <>
        <div style={{height: '100%'}}>
            <div style={{ width: '100%', height: '50%'}}>
                <img src={props.imageUrl} alt='Profile' style={{height: '100%'}} />
            </div>
            <div className='' style={{ width: '100%', height: '50%'}}>
                <h2 className='hekp'>{props.plantName}</h2>
                <Link to={`plant/${props._id}`} className='button is-primary' >See More</Link>
            </div>
        </div>
        // </>
    )
}

export default CarouselItem;