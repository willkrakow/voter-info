import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaUser } from 'react-icons/fa';
import { CardLink } from 'reactstrap';

const SocialMedia = (props) => {


    const getSocialType = (channel) => {
        switch (channel.type) {
            case "Facebook":
                return <FaFacebook className="fa-3x" />
            case "Twitter":
                return <FaTwitter className="fa-3x" />
            case "YouTube":
                return <FaYoutube className="fa-3x" />
            default:
                return <FaUser className="fa-3x" />

        }
    }
    if (props.channels) {
        return (
            <React.Fragment>
                {props.channels.map((channel, index) => (
                    <CardLink href={channel.id} key={index} className="text-secondary">
                        {getSocialType(channel)}
                    </CardLink>
                ))}
            </React.Fragment>
        )
    } else {
        return (<p>No social media found</p>)
    }

}

export default SocialMedia