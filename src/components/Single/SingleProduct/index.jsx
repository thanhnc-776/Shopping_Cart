import React, { PureComponent } from 'react';
import './index.css';

class SingleProduct extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-lg-7">
          <div className="single_product_pics">
            <div className="row">
              <div className="col-lg-3 thumbnails_col order-lg-1 order-2">
                <div className="single_product_thumbnails">
                  <ul>
                    <li><img src="images/single_1_thumb.jpg" alt="" data-image="images/single_1.jpg" /></li>
                    <li className="active"><img src="images/single_2_thumb.jpg" alt="" data-image="images/single_2.jpg" /></li>
                    <li><img src="images/single_3_thumb.jpg" alt="" data-image="images/single_3.jpg" /></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9 image_col order-lg-2 order-1">
                <div className="single_product_image">
                  <div className="single_product_image_background" style={{ backgroundImage: 'url(images/single_2.jpg)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="product_details">
            <div className="product_details_title">
              <h2>Pocket cotton sweatshirt</h2>
              <p>Nam tempus turpis at metus scelerisque placerat nulla deumantos solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis ut...</p>
            </div>
            <div className="free_delivery d-flex flex-row align-items-center justify-content-center">
              <span className="ti-truck" /><span>free delivery</span>
            </div>
            <div className="original_price">$629.99</div>
            <div className="product_price">$495.00</div>
            <ul className="star_rating">
              <li><i className="fa fa-star" aria-hidden="true" /></li>
              <li><i className="fa fa-star" aria-hidden="true" /></li>
              <li><i className="fa fa-star" aria-hidden="true" /></li>
              <li><i className="fa fa-star" aria-hidden="true" /></li>
              <li><i className="fa fa-star-o" aria-hidden="true" /></li>
            </ul>
            <div className="product_color">
              <span>Select Color:</span>
              <ul>
                <li style={{ background: '#e54e5d' }} />
                <li style={{ background: '#252525' }} />
                <li style={{ background: '#60b3f3' }} />
              </ul>
            </div>
            <div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
              <span>Quantity:</span>
              <div className="quantity_selector">
                <span className="minus"><i className="fa fa-minus" aria-hidden="true" /></span>
                <span id="quantity_value">1</span>
                <span className="plus"><i className="fa fa-plus" aria-hidden="true" /></span>
              </div>
              <div className="red_button add_to_cart_button"><a href="a">add to cart</a></div>
              <div className="product_favorite d-flex flex-column align-items-center justify-content-center" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProduct;