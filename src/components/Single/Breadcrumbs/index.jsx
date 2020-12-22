import React, { PureComponent } from 'react';
import './index.css';

class Breadcrumbs extends PureComponent {
  render() {
    return (
      <div className="col">
        {/* Breadcrumbs */}
        <div className="breadcrumbs d-flex flex-row align-items-center">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="categories.html"><i className="fa fa-angle-right" aria-hidden="true" />Men's</a></li>
            <li className="active"><a href="a"><i className="fa fa-angle-right" aria-hidden="true" />Single Product</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Breadcrumbs;