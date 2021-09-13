import React, { Component } from 'react';
import ProductList from '../product-list/productList'
import MetaData from '../meta-data/metada'
import './product.css';
import axios from 'axios';


class product extends Component {
  _isMounted = false;
  constructor() {
    super();
    this.state = {
      productsData: [],
      totalItem:'',
      query:'',
      currentPage:'',
      totalPage:'',
      sortValue:'asc',
      productsDataSorted:[]
    };
    this.sortProduct = this.sortProduct.bind(this);
  } 

  componentDidMount(){
    this._isMounted = true;

    axios.get('http://catch-code-challenge.s3-website-ap-southeast-2.amazonaws.com/challenge-3/response.json')
    .then((res) => {
    
      const productsData = res.data.results.map( product =>  {
        if(product.quantityAvailable === 0){
          product.quantityAvailable = 'sold out'
        }
       return {
         ...product,
         retailPrice: product.retailPrice/100,
         salePrice: product.salePrice/100,
       }
      })
      if(this._isMounted){
        this.setState({
          productsData : productsData,
          query: res.data.metadata.query,
          totalItem: res.data.metadata.total,
          currentPage: res.data.metadata.page,
          totalPage: res.data.metadata.pages,
        }) 
      }
    })
  };

  componentWillUnmount() {
    this._isMounted = false;
  }

  sortProduct(){
    if (this.state.sortValue === 'asc'){
      const sorted = [...this.state.productsData].sort((a,b)=>a.salePrice > b.salePrice ? 1 : -1);
      this.setState({
        productsData : sorted,
        sortValue :'desc'
       }) 
    } 
    if (this.state.sortValue === 'desc'){
      const sorted = [...this.state.productsData].sort((a,b)=>a.salePrice < b.salePrice ? 1 : -1);
      this.setState({
        productsData : sorted,
        sortValue :'asc'
       }) 
    }
  }

  handleChange(event) {
    this.setState({sortValue: event.target.value});
  }

  render() {  
    return (
      <div>
        <div className="header">
          <img className="catch-logo" src="https://s.catch.com.au/static/catch/images/logo-83d9b21199.svg" alt="catch-logo"/>
          <div  className="sort" >
            <select data-testid="sort" className="optionInput" value={this.state.sortValue} onChange={()=>this.sortProduct(this.state.sortValue)}>
            <option value="asc">Highest Price</option>
            <option value="desc">Lowest Price</option>
          </select>
          </div>
        </div>
        <MetaData
        totalItem={this.state.totalItem}
        query={this.state.query}
        currentPage={this.state.currentPage}
        totalPage={this.state.totalPage}
        />
        <div className="row">
          {             
             this.state.productsData.map(
               product => <ProductList 
               key={product.id} 
               name={product.name} 
               imageUrl={product.imageUrl} 
               salePrice={product.salePrice} 
               retailPrice={product.retailPrice} 
               quantityAvailable={product.quantityAvailable} 
               />)
          }
        </div>
      </div>
    );
  }
}

export default product; 