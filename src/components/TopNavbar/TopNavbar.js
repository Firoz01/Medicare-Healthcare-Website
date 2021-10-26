import { faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './TopNavbar.css'

const TopNavbar = () => {
    return (
        <div className="top-Navbar">
            <div className="top-details mt-2">
                <p><FontAwesomeIcon icon={faPhoneAlt} /> 1-677-124-4422 </p>
                <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Los Angeles, 1230 Bariasl
                </p>
            </div>
            <div className="social-icon">
                {/* <button className="btn btn-login"><FontAwesomeIcon icon={faSignInAlt} /> Log In</button>
                <button className="btn"><FontAwesomeIcon icon={faSignOutAlt} /> Log Out</button> */}
                
                    {/* <FontAwesomeIcon className="icon" icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon className="icon" icon={faTwitter}></FontAwesomeIcon>
                    <FontAwesomeIcon className="icon" icon={faInstagram}></FontAwesomeIcon>
                    <FontAwesomeIcon className="icon" icon={faLinkedin}></FontAwesomeIcon> */}
                
            </div>
      </div>
    );
};

export default TopNavbar;