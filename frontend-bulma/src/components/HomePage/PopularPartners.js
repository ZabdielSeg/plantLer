import React from "react";
import PopoularPartnersCard from "./PopularPartnersCard";


const PopoularPartnersSection = () => {
    return (
        // <>
            <div>
                <section className=''>
                    <div className="content">
                        <h2>Our best Sellers</h2>
                    </div>
                </section>
                <div style={{width: '90%', margin: 'auto'}}>
                    <div className="columns is-multiline">
                        <PopoularPartnersCard />
                        <PopoularPartnersCard />
                        <PopoularPartnersCard />
                        <PopoularPartnersCard />
                    </div>
                </div>
            </div>
        // </> 
    )
}

export default PopoularPartnersSection;