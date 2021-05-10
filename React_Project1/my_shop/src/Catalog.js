import React from 'react';
import './Catalog.css';
import ProductList from './ProductList'
import logo from './logo.svg';
class Catalog extends React.Component {
    render() {
    let title = "The Catalog of today " + new Date().toDateString();

    return <div>
        <h2>{title}</h2>
        <ProductList />
    
        <img src={logo} className="App-logo" alt="logo" />
        </div>;
    }
}
export default Catalog;
