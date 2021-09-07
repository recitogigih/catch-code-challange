

import React, { Component } from 'react' ;
import Product from './components/product/Product'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container">
        <Product/>
      </div>
    );
  }
}

export default App;