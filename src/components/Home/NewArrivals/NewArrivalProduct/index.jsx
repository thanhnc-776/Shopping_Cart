import React, { PureComponent } from 'react';

class NewArrivalProduct extends PureComponent {
  render() {
    const { productList } = this.props;
    return (
      <div className="row">
        <div className="col">
          <div className="product-grid" data-isotope="{ &quot;itemSelector&quot;: &quot;.product-item&quot;, &quot;layoutMode&quot;: &quot;fitRows&quot; }">
            {productList.map(product => {
              return (
                <div className="product-item men" key={product.id}>
                  <div className="product discount product_filter">
                    <div className="product_image">
                      <img src={product.images[0]} alt="" />
                    </div>
                    <div className="favorite favorite_left" />
                    <div className="product_bubble product_bubble_right product_bubble_red d-flex flex-column align-items-center">
                      <span>-${product.promotionPercent}</span></div>
                    <div className="product_info">
                      <h6 className="product_name"><a href="single.html">{product.name}</a></h6>
                      <div className="product_price">{product.salePrice}đ<span>{product.originalPrice}đ</span></div>
                    </div>
                  </div>
                  <div className="red_button add_to_cart_button"><a href="a">add to cart</a></div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default NewArrivalProduct;