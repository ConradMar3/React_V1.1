import React from 'react';
import './Catalog.css';
import ProductList from './ProductList'
import logo from './logo.svg';
class Catalog extends React.Component {
    render() {
    let title = "Catalog";

    return <div>
        <h2>Catalog</h2>
        <ProductList />
    
        <img src={logo} className="App-logo" alt="logo" />
        </div>;
    }
}
export default Catalog;
