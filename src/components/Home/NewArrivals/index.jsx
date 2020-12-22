import React, { PureComponent } from 'react';
import './index.css';
import NewArrivalList from './NewArrivalList';
import NewArrivalProduct from './NewArrivalProduct';
import categoriesApi from '../../../api/categoriesApi';
import productApi from '../../../api/productApi';

class NewArrivals extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: '32a63859-293f-4e5b-817e-968e28bf309d',
      categories: [],
      productList: []
    }
  }

  async componentDidMount() {
    try {
      const categories = await categoriesApi.getAllCategories();
      this.setState({ categories: categories.data });

      const productList = await productApi.getById(categories.data[0].id);
      this.setState({ productList: productList });
    } catch (error) {
      console.log('Failed fetch to data', error.message);
    }
  }

  handleChangeCategory = async (category) => {
    this.setState({ activeCategory: category.id })
    try {
      const productList = await productApi.getById(category.id);
      this.setState({ productList: productList })
    } catch (error) {
      console.log('Failed fetch to data', error.message);
    }
  }

  render() {
    const { categories, activeCategory, productList } = this.state;
    return (
      <div className="new_arrivals">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="section_title new_arrivals_title">
                <h2>New Arrivals</h2>
              </div>
            </div>
          </div>

          <NewArrivalList
            categories={categories}
            activeCategory={activeCategory}
            onActiveCategory={this.handleChangeCategory}
          />

          <NewArrivalProduct
            productList={productList}
          />

        </div>
      </div>
    );
  }
}

export default NewArrivals;