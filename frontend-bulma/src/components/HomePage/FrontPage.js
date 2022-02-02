import React from "react";

const FrontPage = () => {
    return (
        <div className="section" style={{ position: 'relative', boxSizing: 'border-box' }}>
            <div className="content has-text-right cover-text " style={{ width: '40%' }}>
                <h1 className="is-spaced title" style={{fontSize: '5rem'}}>Welcome to PlantLer</h1>
                <p className="subtitle is-4">Where you can buy a plant or a tree</p>
            </div>
            <img src='https://res.cloudinary.com/ds3hh2gv2/image/upload/v1643753215/PlantLer/PortadaPlantLer1_r2cyye.jpg' alt="Cover" style={{ width: '90%' }} />
        </div>
    )
}

export default FrontPage;