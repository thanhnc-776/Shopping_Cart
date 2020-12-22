import React, { Component } from 'react';
import Breadcrumbs from '../../components/Shop/Breadcrumbs';
import MainContent from '../../components/Shop/MainContent';
import SideBar from '../../components/Shop/SideBar';
import productApi from '../../api/productApi';
import './index.css';

class ShopPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productGrid: [],
      filter: {
        _page: 1,
        _limit: 6,
        _sort: 'originalPrice',
        _order: 'asc',
        salePrice_gte: 50000,
        salePrice_lte: 500000
      },

      pagination: {
        _page: 1,
        _limit: 6,
        _totalRows: 1
      }
    }
  }

  async componentDidMount() {
    try {
      const productGrid = await productApi.getAllProducts(this.state.filter);
      this.setState({ productGrid: productGrid.data, pagination: productGrid.pagination });
    } catch (error) {
      console.log('Failed to fetch data', error.message);
    }
  }

  handleChangeSort = async (newFilter) => {
    try {
      const filterPrice = await productApi.getAllProducts(newFilter);
      this.setState({ filter: newFilter, productGrid: filterPrice.data, pagination: filterPrice.pagination });
    } catch (error) {
      console.log('Failed to fetch data', error.message);
    }
  }

  handleChangeLimit = async (newFilter) => {
    try {
      const newSort = await productApi.getAllProducts(newFilter);
      this.setState({ filter: newFilter, productGrid: newSort.data, pagination: newSort.pagination });
    } catch (error) {
      console.log('Failed to fetch data', error.message);
    }
  }

  handleChangePrice = async (newFilter) => {
    try {
      const newSort = await productApi.getAllProducts(newFilter);
      this.setState({ filter: newFilter, productGrid: newSort.data, pagination: newSort.pagination });
    } catch (error) {
      console.log('Failed to fetch data', error.message);
    }
  }

  render() {
    const { filter, productGrid, pagination } = this.state;
    return (
      <div className="container product_section_container">
        <div className="row">
          <div className="col product_section clearfix">
            <Breadcrumbs />
            <SideBar
              filter={filter}
              productGrid={productGrid}
              onChangePrice={this.handleChangePrice}
            />
            <MainContent
              filter={filter}
              productGrid={productGrid}
              pagination={pagination}
              onChangeSort={this.handleChangeSort}
              onChangeLimit={this.handleChangeLimit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ShopPage;