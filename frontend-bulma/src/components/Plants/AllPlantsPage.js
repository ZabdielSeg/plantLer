import { React, useState, useEffect } from 'react';
import PlantService from './plant-service';
import AllPlantsCard from './AllPlantsCard';

const AllPlantsPage = props => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        setProducts(props.allProducts);
    }, [props.allProducts]);

    const [sortedByName, setSortedByName] = useState(false);
    useEffect(() => {
        checkAllSortings();
    }, [sortedByName]);

    const [sortedByCost, setSortedByCost] = useState(false);
    useEffect(() => {
        checkAllSortings();
    }, [sortedByCost]);

    const [onlyIndoorPlants, setOnlyIndoorPlants] = useState(false);
    useEffect(() => {
        checkFilters();
    }, [onlyIndoorPlants]);

    const [onlyOutdoorPlants, setOnlyOutdoorPlants] = useState(false);
    useEffect(() => {
        checkFilters();
    }, [onlyOutdoorPlants]);

    const handleSorting = () => {
        setSortedByName(!sortedByName);
        setSortedByCost(false);
    };
    const handleSortCost = () => {
        setSortedByCost(!sortedByCost);
        setSortedByName(false);
    };

    const handleOnlyIndoor = () => {
        setOnlyIndoorPlants(!onlyIndoorPlants);
        setOnlyOutdoorPlants(false);
    }

    const handleOutdoor = () => {
        setOnlyOutdoorPlants(!onlyOutdoorPlants);
        setOnlyIndoorPlants(false);
    }

    const sortByName = () => {
        const sorted = [...products].sort((a, b) => {
            if (a.plantName.toLowerCase() > b.plantName.toLowerCase()) { return 1 }
            if (b.plantName.toLowerCase() > a.plantName.toLowerCase()) { return -1 }
            return 0;
        });
        setProducts(sorted);
    };

    const sortByCost = () => {
        const sorted = [...products].sort((a, b) => a.price - b.price);
        setProducts(sorted);
    };

    const onlyIndoor = () => {
        const filtered = [...props.allProducts].filter(plant => plant.location === 'Indoor');
        setProducts(filtered);
    };

    const onlyOutdoor = () => {
        const filtered = [...props.allProducts].filter(plant => plant.location === 'Outdoor');
        setProducts(filtered);
    };

    const checkAllSortings = () => {
        if (sortedByName) {sortByName();}
        if (sortedByCost) {sortByCost();}
        if (!sortedByName && !sortedByCost) {setProducts(props.allProducts)}
    };

    const checkFilters = () => {
        if(onlyIndoorPlants) {onlyIndoor();}
        if(onlyOutdoorPlants) {onlyOutdoor();}
        if(!onlyIndoorPlants && !onlyOutdoorPlants) {setProducts(props.allProducts)}
    }

    // console.log('Cost ===>',sortedByCost, 'Name ===> ', sortedByName, products)
    return (
        <>
            <div>
                <div className='field'>
                    <label className="checkbox">
                        <input onChange={handleSorting} checked={sortedByName} type="checkbox" />
                        Sort by Name
                    </label>
                    <label className="checkbox">
                        <input onChange={handleSortCost} checked={sortedByCost} type="checkbox" />
                        Sort by Cost
                    </label>
                    <label className="checkbox">
                        <input onChange={handleOnlyIndoor} checked={onlyIndoorPlants} type="checkbox" />
                        Only Indoor Plants
                    </label>
                    <label className="checkbox">
                        <input onChange={handleOutdoor} checked={onlyOutdoorPlants} type="checkbox" />
                        Only Outdoor Plants
                    </label>
                </div>
            </div>
            <div className='section is-flex is-flex-wrap-wrap is-justify-content-space-evenly' style={{ minHeight: '500px' }}>
                {products.map(product => <AllPlantsCard key={product._id} {...product} />)}
            </div>
        </>
    )
}

export default AllPlantsPage;