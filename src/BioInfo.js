import React, { useState, useEffect } from 'react';
import wiki from 'wikijs';


const BioInfo = (props) => {
    const candidate = props.candidate;
    const [summary, setSummary] = useState('');


    const checkSummary = (str) => {
        let start = str.slice(candidate.name.length, candidate.name.length+4);
        if(start === " may"){
            return (
                <p>No summary found</p>
            )
        } else {
            return summary
        }
    }

    useEffect(() => {
        wiki()
        .page(candidate.name)
        .then(page => page.summary())
        .then((summary) => (
            setSummary(summary)))
        .catch(err => console.log(err))
    }, [])
   

    return (
        <span>{checkSummary(summary)}
        </span>
    )
}

export default BioInfo 
 

