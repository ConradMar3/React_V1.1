import React from 'react';
import './Catalog.css';
import ProductList from './ProductList'
import logo from './logo.svg';
class Catalog extends React.Component {
    render() {
    let title = "The Catalog of " + new Date().toDateString();

    return <div>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
        <ProductList />
        </div>;
    }
}
export default Catalog;
