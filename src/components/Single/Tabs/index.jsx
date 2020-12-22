import React, { PureComponent } from 'react';
import Description from './Description';
import Additional from './Additional';
import Reviews from './Reviews';
import './index.css';

class Tabs extends PureComponent {
  render() {
    return (
      <div className="tabs_section_container">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="tabs_container">
                <ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
                  <li className="tab active" data-active-tab="tab_1"><span>Description</span></li>
                  <li className="tab" data-active-tab="tab_2"><span>Additional Information</span></li>
                  <li className="tab" data-active-tab="tab_3"><span>Reviews (2)</span></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">

              <Description />

              <Additional />

              <Reviews />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabs;