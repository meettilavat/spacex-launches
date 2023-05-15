import React from 'react';

function Launch({ launch }) {
    return (
        <div>
            <h2>{launch.mission_name}</h2>
            <p>{launch.launch_year}</p>
            {/* Add more fields as needed */}
        </div>
    );
}

export default Launch;
