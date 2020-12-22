import React, { PureComponent } from "react";
import "./index.css";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Header extends PureComponent {
  render() {
    return (
      <>
        <header className="header trans_300">
          {/* Top Navigation */}
          <div className="top_nav">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="top_nav_left">
                    free shipping on all u.s orders over $50
                  </div>
                </div>
                <div className="col-md-6 text-right">
                  <div className="top_nav_right">
                    <ul className="top_nav_menu">
                      {/* Currency / Language / My Account */}
                      <li className="language">
                        <a href="a">
                          English
                          <i className="fa fa-angle-down" />
                        </a>
                        <ul className="language_selection">
                          <li>
                            <a href="a">French</a>
                          </li>
                          <li>
                            <a href="a">Italian</a>
                          </li>
                          <li>
                            <a href="a">German</a>
                          </li>
                          <li>
                            <a href="a">Spanish</a>
                          </li>
                        </ul>
                      </li>
                      <li className="account">
                        <a href="a">
                          My Account
                          <i className="fa fa-angle-down" />
                        </a>
                        <ul className="account_selection">
                          <li>
                            <a href="a">
                              <i className="fa fa-sign-in" aria-hidden="true" />
                              Sign In
                            </a>
                          </li>
                          <li>
                            <a href="a">
                              <i
                                className="fa fa-user-plus"
                                aria-hidden="true"
                              />
                              Register
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Main Navigation */}
          <div className="main_nav_container">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 text-right">
                  <div className="logo_container">
                    <a href="a">
                      Nordic<span>Shop</span>
                    </a>
                  </div>
                  <nav className="navbar">
                    <ul className="navbar_menu">
                      <li>
                        <NavLink to="/" exact>
                          home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/shop">shop</NavLink>
                      </li>
                      <li>
                        <NavLink to="/promotion">promotion</NavLink>
                      </li>
                      <li>
                        <a href="https://nordiccoder.com/blog" target="blank">
                          blog
                        </a>
                      </li>
                      <li>
                        <NavLink to="/contact">contact</NavLink>
                      </li>
                    </ul>
                    <ul className="navbar_user">
                      <li className="checkout">
                        <a href="a">
                          <i
                            className="fa fa-shopping-cart"
                            aria-hidden="true"
                          />
                          <span id="checkout_items" className="checkout_items">
                            0
                          </span>
                        </a>
                      </li>
                    </ul>
                    <div className="hamburger_container">
                      <i className="fa fa-bars" aria-hidden="true" />
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="fs_menu_overlay" />
        <div className="hamburger_menu">
          <div className="hamburger_close">
            <i className="fa fa-times" aria-hidden="true" />
          </div>
          <div className="hamburger_menu_content text-right">
            <ul className="menu_top_nav">
              <li className="menu_item has-children">
                <a href="a">
                  usd
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="menu_selection">
                  <li>
                    <a href="a">cad</a>
                  </li>
                  <li>
                    <a href="a">aud</a>
                  </li>
                  <li>
                    <a href="a">eur</a>
                  </li>
                  <li>
                    <a href="a">gbp</a>
                  </li>
                </ul>
              </li>
              <li className="menu_item has-children">
                <a href="a">
                  English
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="menu_selection">
                  <li>
                    <a href="a">French</a>
                  </li>
                  <li>
                    <a href="a">Italian</a>
                  </li>
                  <li>
                    <a href="a">German</a>
                  </li>
                  <li>
                    <a href="a">Spanish</a>
                  </li>
                </ul>
              </li>
              <li className="menu_item has-children">
                <a href="a">
                  My Account
                  <i className="fa fa-angle-down" />
                </a>
                <ul className="menu_selection">
                  <li>
                    <a href="a">
                      <i className="fa fa-sign-in" aria-hidden="true" />
                      Sign In
                    </a>
                  </li>
                  <li>
                    <a href="a">
                      <i className="fa fa-user-plus" aria-hidden="true" />
                      Register
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu_item">
                <a href="a">home</a>
              </li>
              <li className="menu_item">
                <a href="categories.html">shop</a>
              </li>
              <li className="menu_item">
                <a href="a">promotion</a>
              </li>
              <li className="menu_item">
                <a href="a">pages</a>
              </li>
              <li className="menu_item">
                <a href="https://nordiccoder.com/blog" target="blank">
                  blog
                </a>
              </li>
              <li className="menu_item">
                <a href="a">contact</a>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    quantity: state.quantity,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
