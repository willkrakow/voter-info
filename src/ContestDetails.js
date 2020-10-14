import React from 'react';
import {Card, CardBody, CardTitle, Badge, CardLink, CardText} from 'reactstrap';
import SocialMedia from './SocialMedia.js';
import BioInfo from './BioInfo.js';

const ContestDetails = (props) => {
    if (props.contest.candidates) {
        return (
            <div>
                {props.contest.candidates.map((candidate, index) => (
                    <Card key={index} className="p-5">
                        <CardTitle className="text-dark">{candidate.name + " – "}<Badge color={candidate.party == "Democratic" ? "primary" : "danger"}>{candidate.party}</Badge></CardTitle>
                        <CardBody>
                            <CardText>
                                <BioInfo candidate={candidate}/>
                                </CardText>
                            <SocialMedia channels={candidate.channels}/>
                        <CardLink className="text-dark" href={candidate.candidateUrl}>Website</CardLink>
                        </CardBody>
                    </Card>
                ))}
            </div>
        )
    } else {
        return (
            <p>there are no candidates here</p>
        )
    }

}

export default ContestDetails