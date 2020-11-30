import React, { useEffect, useState } from "react";
import API from "../../utils/API";
import './style.css';

function Stats() {
    const [stats, setStats] = useState();


    useEffect(() => {
        getStats();
    }, []);

    const getStats = () => {
        API.getCountry()
            .then(results => {

                setStats(results.data.length
                );
            })
            .catch(err => console.log(err));
    };

    const [user, setUser] = useState();

    useEffect(() => {
        getUser();
    }, []);

    const getUser = () => {
        API.getUserData()
            .then(results => {
                console.log(results)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <h2> {stats} / 195 Countries</h2>
        </div>
    )

}

export default Stats;