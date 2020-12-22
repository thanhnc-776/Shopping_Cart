import React from 'react';
import './App.css';
import HomePage from './container/HomePage';
import ShopPage from './container/ShopPage';
import Header from './components/Common/Header';
import Benefit from './components/Common/Benefit';
import Footer from './components/Common/Footer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ContactPage from './container/ContactPage';
import SinglePage from './container/SinglePage';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/products/:productId" component={SinglePage} />
        </Switch>
        <Benefit />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
