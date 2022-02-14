import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AllPlantsCard from "../Plants/AllPlantsCard";
import AuthService from "./auth-service";

const SellerProfile = props => {
    const [userInfo, setUserInfo] = useState({});
    const [isOwner, setIsOwner] = useState(false);
    useEffect(() => {
        getUser();
    }, [props.theUser]);
    
    // useEffect(() => {
    //     ownProfileCheck()
    // }, [userInfo]);

    let { userId } = useParams();
    const service = new AuthService();

    const getUser = () => {
        service.getProfile(userId)
            .then(response => {
                ownProfileCheck(response)
                setUserInfo(response)
            });
    };

    const ownProfileCheck = user => {
        if (props.theUser && user._id == props.theUser._id) {
            setIsOwner(true);
            console.log('Sí es')
        }
    };

    return (
        <>
            <section className='section'>
                <div className="columns">
                    <div className="column is-3 is-flex is-justify-content-center">
                        <figure className="image is-128x128">
                            <img className="is-rounded" src={userInfo.imageUrl} />
                        </figure>
                    </div>
                    <div className="column is-8">
                        <div className="content is-medium">
                            <h2>{userInfo.username}</h2>
                            <p>{userInfo.description}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='section'>
                <div className="columns">
                    <div className="column">
                        <div className="content is-flex is-flex-wrap-wrap is-justify-content-space-evenly">
                            {userInfo.plants && userInfo.plants.map(plant1 => <AllPlantsCard key={plant1._id} {...plant1} />)}
                        </div>
                    </div>
                    <div className="column is-3 is-flex is-justify-content-center">
                        <div className="content is-medium">
                            {isOwner && <h2>Holaaaaa</h2>}
                            <h2>Contact Info</h2>
                            <p>{userInfo.email}</p>
                            <p>{userInfo.whatsAppNumber}</p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
};

export default SellerProfile;