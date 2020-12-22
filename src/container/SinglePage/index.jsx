import React, { PureComponent } from 'react';
import SingleProduct from '../../components/Single/SingleProduct';
import Tabs from '../../components/Single/Tabs';
import Breadcrumbs from '../../components/Single/Breadcrumbs';
import './index.css';

class SinglePage extends PureComponent {
  render() {
    return (
      <>
        <div className="container single_product_container">
          <Breadcrumbs />
          <SingleProduct />
          <Tabs />
        </div>
      </>
    );
  }
}

export default SinglePage;