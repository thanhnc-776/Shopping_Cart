import React, { Component } from 'react';
import './index.css';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      salePrice_gte: 10000,
      salePrice_lte: 15000000
    }
  }

  handleChangePrice = (value) => {
    this.setState({ salePrice_gte: value[0], salePrice_lte: value[1] });
  }

  handleChangeFilter = (salePrice_gte, salePrice_lte, filter) => {
    const newFilter = {
      ...filter,
      _page: 1,
      _limit: 6,
      salePrice_lte: salePrice_lte,
      salePrice_gte: salePrice_gte
    }
    const { onChangePrice } = this.props;
    if (onChangePrice) {
      onChangePrice(newFilter);
    }
  }

  render() {
    const { filter, salePrice_gte, salePrice_lte } = this.state;
    return (
      <div className="sidebar">
        <div className="sidebar_section">
          <div className="sidebar_title">
            <h5>Product Category</h5>
          </div>
          <ul className="sidebar_categories">
            <li><a href="a">Men</a></li>
            <li className="active"><a href="a"><span><i className="fa fa-angle-double-right" aria-hidden="true" /></span>Women</a></li>
            <li><a href="a">Accessories</a></li>
            <li><a href="a">New Arrivals</a></li>
            <li><a href="a">Collection</a></li>
            <li><a href="categories.html">shop</a></li>
          </ul>
        </div>

        <div className="sidebar_section">
          <div className="sidebar_title">
            <h5>Filter by Price</h5>
          </div>

          <p>
            {salePrice_gte}đ - {salePrice_lte}đ
          </p>

          <div id="slider-range">
            <Range
              min={0}
              max={25000000}
              defaultValue={[salePrice_gte, salePrice_lte]}
              tipFormatter={value => `${value}đ`}
              onAfterChange={this.handleChangePrice}
              step={1000}
            />
          </div>
          <div className="filter_button" onClick={() => this.handleChangeFilter(salePrice_gte, salePrice_lte, filter)}><span>filter</span></div>
        </div>
      </div>
    );
  }
}

export default SideBar;