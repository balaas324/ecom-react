// src/components/Header.tsx
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Header = () => {
    const { cart } = useCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const totalPrice = cart
        .reduce((total, item) => total + item.quantity * item.price, 0)
        .toFixed(2);

  return (
    <header className="bg-stone-700 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tight text-blue-600 hover:text-blue-700">
            🛍️ MyStore
          </Link>

          {/* Navigation Links */}
          <nav className="space-x-6 text-sm font-medium">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 underline underline-offset-4'
                  : 'text-gray-400 hover:text-blue-600 transition'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive
                  ? 'text-blue-600 underline underline-offset-4'
                  : 'text-gray-400 hover:text-blue-600 transition'
              }
            >
                <span>🛒 Cart</span>
                <span className="flex items-center gap-1 text-sm text-gray-400">
                    <span>({cartCount} item{cartCount > 1 ? 's' : ''})</span>
                    <span>•</span>
                    <span>${totalPrice}</span>
                </span>
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

