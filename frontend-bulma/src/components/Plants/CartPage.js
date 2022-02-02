import React from "react";
import ProductsCard from "../CartProductsCard";

const CartPage = () => {
    return (
        <div>
            <div className="content">
                <h2>Cart</h2>
            </div>
            <div className="tile is-ancestor">
                <div className="tile is-parent is-8 is-vertical">
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />
                    <ProductsCard />

                </div>
                <div className="tile is-parent">
                    <article className="tile is-child">
                        <div className="content box">
                            <p className="title">Total: </p>
                            <p className="subtitle">Subtitle</p>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default CartPage;