import React, { PureComponent } from 'react';
import Banner from '../../components/Home/Banner';
import NewArrivals from '../../components/Home/NewArrivals';
import Slider from '../../components/Home/Slider';
import './index.css';

class HomePage extends PureComponent {
  render() {
    return (
      <div>
        <Slider />
        <Banner />
        <NewArrivals />
      </div>
    );
  }
}

export default HomePage;