import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function SocialMediaContainer() {
    return (
        <div>
            <h1 className="RankingAnimated">Connect with me</h1>
            <div className="socialContainer">
                <a href="https://www.instagram.com/t3cheshwar/" target="_blank" rel="noreferrer" className="socialLink">
                    <FontAwesomeIcon icon={faInstagram} size="2x"  className='socialmediaIcon'/>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="socialLink">
                    <FontAwesomeIcon icon={faFacebook} size="2x" className='socialmediaIcon'/>
                </a>
                <a href="https://github.com/shailendra-jurel" target="_blank" rel="noreferrer" className="socialLink">
                    <FontAwesomeIcon icon={faGithub} size="2x" className='socialmediaIcon'/>
                </a>
                <a href="https://www.linkedin.com/in/shailendra-jurel/" target="_blank" rel="noreferrer" className="socialLink">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" className='socialmediaIcon'/>
                </a>
            </div>
        </div>
    );
}

export default SocialMediaContainer;
