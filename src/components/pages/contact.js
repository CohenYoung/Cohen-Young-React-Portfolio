import React from 'react';
import contactImg from "../../../static/assets/images/contact/seattle.jpg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function() {
    return (
        <div className="contact-page-wrapper">
            <div className="left-column" style={{
                backgroundImage: `url(${contactImg})`}}>
            </div>

            <div className="right-column">
                <div className="info-icon">
                <div className="icon">
                        <FontAwesomeIcon icon="phone"/>
                    </div>
                    <div className="info">
                        000-000-0000
                    </div>
                   
                </div>
                <div className="info-icon">
                <div className="icon">
                        <FontAwesomeIcon icon="map"/>
                    </div>
                    <div className="info">
                        000 W 000 S, Utah
                    </div>
                </div>
                <div className="info-icon">
                    <div className="icon">
                        <FontAwesomeIcon icon="envelope"/>
                    </div>
                    <div className="info">
                        cohen.y@google.com
                    </div>
                </div>
            </div>

        </div>
    )
}