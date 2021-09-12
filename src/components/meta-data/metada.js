import React, { Component } from 'react';
import './metadata.css';
import '../../App.css';

class metada extends Component {
  render() {
    return (
      <div className="metadata">
        <p data-testid="meta-data"> showing: {this.props.totalItem}  {this.props.query} items | page {this.props.currentPage} of {this.props.totalPage} </p>
      </div>
    );
  }
}

export default metada;