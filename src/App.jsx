import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import { products } from './data/products';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <ProductList products={products} />
      </main>
    </div>
  );
}

export default App;