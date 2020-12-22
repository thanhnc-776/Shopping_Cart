import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

class MainContent extends Component {

  handleChangeSort = (sort, filter) => {
    const newFilter = {
      ...filter,
      _sort: sort,
    }
    const { onChangeSort } = this.props;
    if (onChangeSort) {
      onChangeSort(newFilter);
    }
  }

  handleChangeLimit = (limit, filter) => {
    const newFilter = {
      ...filter,
      _limit: limit,
    }
    const { onChangeLimit } = this.props;
    if (onChangeLimit) {
      onChangeLimit(newFilter);
    }
  }

  render() {
    const { filter, productGrid, pagination } = this.props;
    const totalPage = Math.ceil(pagination._totalRows / pagination._limit);

    const sortingText = `${(filter._sort === 'originalPrice') ? 'Default Sorting' : ''
      || (filter._sort === 'salePrice') ? 'Price' : ''
        || (filter._sort === 'name') ? 'Product Name' : ''}`

    const sort = {
      originalPrice: 'originalPrice',
      salePrice: 'salePrice',
      name: 'name'
    }

    const limit = {
      show6: 6,
      show12: 12,
      show24: 24
    }

    return (
      <div className="main_content">
        {/* Products */}
        <div className="products_iso">
          <div className="row">
            <div className="col">
              {/* Product Sorting */}
              <div className="product_sorting_container product_sorting_container_top">
                <ul className="product_sorting">
                  <li>
                    <span className="type_sorting_text">{sortingText}</span>
                    <i className="fa fa-angle-down" />
                    <ul className="sorting_type">
                      <li className="type_sorting_btn"
                        data-isotope-option='{ "sortBy": "originalPrice" }'
                        onClick={() => this.handleChangeSort(sort.originalPrice, filter)}
                      ><span>Default Sorting</span></li>
                      <li className="type_sorting_btn"
                        data-isotope-option='{ "sortBy": "salePrice" }'
                        onClick={() => this.handleChangeSort(sort.salePrice, filter)}
                      ><span>Price</span></li>
                      <li className="type_sorting_btn"
                        data-isotope-option='{ "sortBy": "name" }'
                        onClick={() => this.handleChangeSort(sort.name, filter)}
                      ><span>Product Name</span></li>
                    </ul>
                  </li>
                  <li>
                    <span>Show</span>
                    <span className="num_sorting_text">{filter._limit}</span>
                    <i className="fa fa-angle-down" />
                    <ul className="sorting_num">
                      <li className="num_sorting_btn"
                        onClick={() => this.handleChangeLimit(limit.show6, filter)}
                      ><span>6</span></li>
                      <li className="num_sorting_btn"
                        onClick={() => this.handleChangeLimit(limit.show12, filter)}
                      ><span>12</span></li>
                      <li className="num_sorting_btn"
                        onClick={() => this.handleChangeLimit(limit.show24, filter)}
                      ><span>24</span></li>
                    </ul>
                  </li>
                </ul>
                <div className="pages d-flex flex-row align-items-center">
                  <div className="page_current">
                    <span>1</span>
                    <ul className="page_selection">
                      <li><a href="a">1</a></li>
                      <li><a href="a">2</a></li>
                      <li><a href="a">3</a></li>
                    </ul>
                  </div>
                  <div className="page_total"><span>of</span>{totalPage}</div>
                  <div id="next_page" className="page_next"><a href="a"><i className="fa fa-long-arrow-right" aria-hidden="true" /> </a></div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="product-grid">
                {productGrid.map(product => {
                  return (
                    <div className="product-item men" key={product.id}>
                      <div className="product discount product_filter">
                        <Link to={`/products/${product.id}`}>
                          <div className="product_image">
                            <img src={product.images[0]} alt="" />
                          </div>
                          <div className="favorite favorite_left" />
                          <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center"><span>-{product.promotionPercent}%</span></div>
                          <div className="product_info">
                            <h6 className="product_name">{product.name}</h6>
                            <div className="product_price">{product.salePrice}đ<span>{product.originalPrice}đ</span></div>
                          </div>
                        </Link>
                      </div>
                      <div className="red_button add_to_cart_button"><a href="a">add to cart</a></div>
                    </div>

                  )
                })}
              </div>

              {/* Product Sorting */}
              <div className="product_sorting_container product_sorting_container_bottom clearfix">
                <ul className="product_sorting">
                  <li>
                    <span>Show:</span>
                    <span className="num_sorting_text">01</span>
                    <i className="fa fa-angle-down" />
                    <ul className="sorting_num">
                      <li className="num_sorting_btn"><span>01</span></li>
                      <li className="num_sorting_btn"><span>02</span></li>
                      <li className="num_sorting_btn"><span>03</span></li>
                    </ul>
                  </li>
                </ul>
                <span className="showing_results">Showing {pagination._page}–{totalPage} of {pagination._totalRows} results</span>
                <div className="pages d-flex flex-row align-items-center">
                  <div className="page_current">
                    <span>1</span>
                    <ul className="page_selection">
                      <li><a href="a">1</a></li>
                      <li><a href="a">2</a></li>
                      <li><a href="a">3</a></li>
                    </ul>
                  </div>
                  <div className="page_total"><span>of</span>{totalPage}</div>
                  <div id="next_page_1" className="page_next"><a href="a"><i className="fa fa-long-arrow-right" aria-hidden="true" /> </a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
}

export default MainContent;