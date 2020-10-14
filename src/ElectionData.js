import React from 'react';
import { Card } from 'reactstrap';
import ContestDetails from './ContestDetails.js';


const ElectionData = (props) => {
    if (props.elections) {
        return (
            <div>
                <h2>Polling Locations</h2>
                {props.elections.pollingLocations.map((location, index) => (
                    <div key={index}>
                        <h3>{location.address.locationName}</h3>
                        <p>{location.address.line1}</p>
                        <p>{location.address.city + ", " + location.address.state}</p>
                        <p>{location.address.zip}</p>
                    </div>
                ))}
                {props.elections.contests.map((contest, index) => (
                    <Card key={index} className="p-2">
                        <p className="text-secondary">{contest.type}</p>
                        <h3>{contest.office}</h3>
                        <ContestDetails contest={contest} />
                    </Card>
                ))}
            </div>
        )
    } else {
        return (
            <p className="text-secondary">Waiting on you</p>
        )
    }


}

export default ElectionData