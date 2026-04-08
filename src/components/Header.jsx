function Header({ cartItemCount, onCartClick }) {
  <button className="cart-icon-btn" onClick={onCartClick}>
  🛒
  {cartItemCount > 0 && (
    <span className="cart-badge">{cartItemCount}</span>
  )}
</button>