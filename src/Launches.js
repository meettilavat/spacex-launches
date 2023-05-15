import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './Filter';
import Footer from './Footer';
import styles from './Launches.module.css';

function Launches() {
    const [launches, setLaunches] = useState([]);
    const [filters, setFilters] = useState({});
    const [years, setYears] = useState([]);

    useEffect(() => {
        const url = new URL('https://api.spaceXdata.com/v3/launches?limit=100');
        Object.entries(filters).forEach(([key, value]) => {
            if (value !== null) {
                url.searchParams.append(key, value);
            }
        });

        axios.get(url.toString())
            .then(res => {
                setLaunches(res.data);
                const launchYears = [...new Set(res.data.map(launch => launch.launch_year))];
                setYears(launchYears);
            });

    }, [filters]);

    return (
        <div className={styles.container}>
            <Filter onFilterChange={setFilters} years={years} filters={filters} className={styles.filter} />
            <div className={styles.launches}>
            {launches.map(launch => (
                    <div key={launch.flight_number} className={styles.launch}>
                        <img src={launch.links && launch.links.mission_patch_small ? launch.links.mission_patch_small : null} alt={launch.mission_name} />
                        <h2>{launch.mission_name} #{launch.flight_number}</h2>
                        <ul>
                            <li>Mission IDs: {launch.mission_id.join(", ")}</li>
                        </ul>
                        <h3>Launch Year: {launch.launch_year}</h3>
                        <h3>Successful Launch: {launch.launch_success ? 'True' : 'False'}</h3>
                        <h3>Successful Landing: {launch.rocket && launch.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</h3>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Launches;
