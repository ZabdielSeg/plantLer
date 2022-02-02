import React from 'react';
import AllPlantsCard from './AllPlantsCard';

const AllPlantsPage = () => {
    return (
        <>
            <div>
                <div className='field'>
                    <label className="checkbox">
                        <input type="checkbox" />
                        Sort by Name
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" />
                        Sort by Cost
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" />
                        Only Indoor Plants
                    </label>
                    <label className="checkbox">
                        <input type="checkbox" />
                        Only Outdoor Plants
                    </label>
                </div>
            </div>
            <div className='section is-flex is-flex-wrap-wrap is-justify-content-space-evenly'>
                <AllPlantsCard />
                <AllPlantsCard />
                <AllPlantsCard />
                <AllPlantsCard />
                <AllPlantsCard />
                <AllPlantsCard />
            </div>
        </>
    )
}

export default AllPlantsPage;