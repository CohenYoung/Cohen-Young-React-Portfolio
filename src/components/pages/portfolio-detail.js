import React, { Component } from "react";
import axios from "axios";



export default class PortfolioDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
        portfolioItem: {}
    }
  }

  componentWillMount() {
    this.getPortfolioItem();
  }

  getPortfolioItem() {
    axios
      .get(
        `https://cohenyoung.devcamp.space/portfolio/portfolio_items/${this.props.match.params.slug}`,
        { withCredentials: true 
      })
      .then(response => {
          this.setState({
              portfolioItem: response.data.portfolio_item
          })
      })
      .catch(error => {
        console.log("getportfolioitem error", error);
      });
  }

  render() {
      const {
            banner_image_url,
            category,
            column_names_merged_with_images,
            description,
            logo_url,
            name,
            position,
            thumb_image_url,
            url
      } = this.state.portfolioItem;
    return (
      <div className="portfolio-detail-wrapper">
            <div className="right-column" style={{
                backgroundImage: `url(${thumb_image_url})`,
            }}>

                <div className="logo-title">
                    <div className="logo">
                        <img src={logo_url}/>
                    </div>
                    <div className="title">
                        <h2>{name}</h2>
                    </div>
                </div>
            </div>

          <div className="left-column">
              <div className="description">
                <p>{description}</p>
              </div>
          </div>
      </div>
    );
  }
}