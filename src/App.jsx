import { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartSidebar from './components/CartSidebar';
import { products } from './data/products';
import './styles/App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);

      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item.id !== productId);
      }

      return prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  const toggleCart = () => {
    setIsCartOpen(prev => !prev);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="app">

      <Header 
        cartItemCount={getTotalItems()} 
        onCartClick={toggleCart}
      />

      <main className="main-content">
        <ProductList 
          products={products} 
          onAddToCart={addToCart}
        />
      </main>

      <CartSidebar 
        isOpen={isCartOpen}
        onClose={toggleCart}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />

    </div>
  );
}

export default App;