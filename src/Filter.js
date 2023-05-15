import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Launches.module.css';

const Filter = ({ onFilterChange, years, filters }) => {
    const navigate = useNavigate();

    const handleChange = (name, value) => {
        onFilterChange(prevFilters => ({
            ...prevFilters,
            [name]: prevFilters[name] === value ? null : value
        }));

        navigate('/', { replace: true, state: { [name]: filters[name] === value ? null : value } });
    };



    return (
        <div className={styles.filter}>
            <h2>Filters</h2>
            <div>
                <h3>Launch Year:</h3>
                <div className={styles.yearContainer}>
                    <button className={filters.launch_year === null ? styles.selected : ''} onClick={() => handleChange("launch_year", "all")}>All</button>
                    {years.map(year => (
                        <button key={year} className={filters.launch_year === year.toString() ? styles.selected : ''} onClick={() => handleChange("launch_year", year.toString())}>{year}</button>
                    ))}
                </div>
            </div>
            <div>
                <h3>Launch Success:</h3>
                <button className={filters.launch_success === "true" ? styles.selected : ''} onClick={() => handleChange("launch_success", "true")}>True</button>
                <button className={filters.launch_success === "false" ? styles.selected : ''} onClick={() => handleChange("launch_success", "false")}>False</button>
            </div>
            <div>
                <h3>Land Success:</h3>
                <button className={filters.land_success === "true" ? styles.selected : ''} onClick={() => handleChange("land_success","true")}>True</button>
                <button className={filters.land_success === "false" ? styles.selected : ''} onClick={() => handleChange("land_success", "false")}>False</button>
            </div>
        </div>
    );
};

export default Filter;
