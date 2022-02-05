import React from "react";
import PopoularPartnersCard from "./PopularPartnersCard";


const PopoularPartnersSection = () => {
    return (
        // <>
        <div className="popular-partners-div" style={{ minHeight: '500px' }}>
            {/* <div className="content"> */}
                <h2 className="best-sellers-title">Our best Sellers</h2>
            {/* </div> */}
            <div style={{ width: '90%'}}>
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