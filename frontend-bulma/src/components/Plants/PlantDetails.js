import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const PlantDetails = () => {
    return (
        <div className="container-center">
            <section className='section is-small'>
                <div className="columns">
                    <div className="column is-5 is-flex is-justify-content-center is-flex-direction-column">
                        <figure className="image is-2by1">
                            <img src="https://bulma.io/images/placeholders/256x256.png" />
                        </figure>
                        <button className="js-modal-trigger button is-primary" data-target="modal-js-example">
                            See bigger
                        </button>
                    </div>
                    <div className="column ">
                        <div className="content is-medium">
                            {/* <h1>Hello World</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.</p> */}
                            <h2>Name</h2>
                            <p>Curabitur accumsan turpis pharetra <strong>augue tincidunt</strong> blandit. Quisque condimentum maximus mi, sit amet commodo arcu rutrum id. Proin pretium urna vel cursus venenatis. Suspendisse potenti</p>
                            <ul>
                                <li>In fermentum leo eu lectus mollis, quis dictum mi aliquet.</li>
                                <li>Morbi eu nulla lobortis, lobortis est in, fringilla felis.</li>
                                <li>Aliquam nec felis in sapien venenatis viverra fermentum nec lectus.</li>
                                <li>Ut non enim metus.</li>
                            </ul>
                            <button className="button is-primary is-outlined">
                                <span className="icon">
                                    <FontAwesomeIcon icon={faShoppingCart} size='lg' />
                                </span>
                                <span>Add to cart</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PlantDetails;