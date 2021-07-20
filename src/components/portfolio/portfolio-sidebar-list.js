import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PortfolioSidebarList = (props) => {
    const portfolioList = props.data.map(portfolioItem => {
        return (
            <div key={portfolioItem.id}className="portfolio-sidebar-item">
                <div className="portfolio-sidebar-image">
                    <img src={portfolioItem.thumb_image_url}></img>
                </div>
                <div className="title-icon-wrapper">
                    <div className="title">{portfolioItem.name}</div>

                    <div className="actions">
                        <a className="action-icon" onClick={() => props.handleEditClick(portfolioItem)}>
                                <FontAwesomeIcon icon="edit" />
                        </a>
                        <a className="action-icon" onClick={() => props.handleDeleteClick(portfolioItem)}>
                            <FontAwesomeIcon icon="trash" />
                        </a>
                    </div>
                </div>
            </div>
        )
    })


    return <div className="portfolio-sidebar-wrapper">{portfolioList}</div>
}

export default PortfolioSidebarList