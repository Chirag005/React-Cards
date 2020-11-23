import React from 'react';
import './c-sty.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const Card = props => {
    return(
        <div className="card text-center">
            <div className="overflow">
                <div className="circle.mx-auto.my-3 shadow">
                    <img class="rounded" src={props.imgsrc} alt="Image 1" className='card-img-top'/>
                </div>
            </div>
            <div className="card-body text-dark">
                <h6 className="card-title"><strong>{props.title}</strong></h6>
                <h6 className="card-text text-secondary">{props.text}</h6>
                <div>
                    <div class="social">
                        <a href="https://anamii.com/" className="Facebook">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="https://anamii.com/" className="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="https://anamii.com/" className="Linkedin">
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a href="https://anamii.com/" className="Twitter">
                            <FontAwesomeIcon icon={faTwitter} size="2x" />
                        </a>     
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;