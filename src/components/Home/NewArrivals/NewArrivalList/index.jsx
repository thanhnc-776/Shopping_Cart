import React, { PureComponent } from 'react';

class NewArrivalList extends PureComponent {

  handleChangeCategory = (category) => {
    const { onActiveCategory } = this.props;
    if (onActiveCategory) {
      onActiveCategory(category);
    }
  };

  render() {
    const { categories, activeCategory } = this.props;
    return (
      <div className="row align-items-center">
        <div className="col text-center">
          <div className="new_arrivals_sorting">
            <ul className="arrivals_grid_sorting clearfix button-group filters-button-group">
              {categories.map(category => {
                const isActive = category.id === activeCategory;
                return (
                  <li
                    key={category.id}
                    onClick={() => this.handleChangeCategory(category)}
                    className={isActive ?
                      'grid_sorting_button button d-flex flex-column justify-content-center align-items-center active' :
                      'grid_sorting_button button d-flex flex-column justify-content-center align-items-center'}
                  >
                    {category.name}
                  </li>
                )
              })
              }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NewArrivalList;
