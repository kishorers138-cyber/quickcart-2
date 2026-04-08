import '../styles/CartSidebar.css';

function CartSidebar({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem }) {

  const total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button onClick={onClose}>X</button>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map(item => (
            <div key={item.id} className="cart-item">
              
              <img src={item.image} alt={item.name} width="50" />

              <div>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>

              <div>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                {item.quantity}
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              <button onClick={() => onRemoveItem(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-footer">
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
}

export default CartSidebar;