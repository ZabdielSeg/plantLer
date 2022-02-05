import React from 'react';
import { Link } from 'react-router-dom';

const CarouselItem = () => {
    return (
        // <>
            <div>
                <div>
                    <img src='https://bulma.io/images/placeholders/128x128.png' alt='Prolie' style={{width: '40%'}} />
                </div>
                <div className=''>
                    <h2 className='hekp'>Hello</h2>
                    <Link to={'info'} className='button is-primary' >See More</Link>
                </div>
            </div>
        // </>
    )
}

export default CarouselItem;