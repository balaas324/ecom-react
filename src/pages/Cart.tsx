import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

export const Cart = () => {
  const { cart, removeFromCart } = useCart();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty 🛒</h2>
        <Link to="/" className="text-blue-500 underline">Back to shopping</Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-black rounded-lg shadow"
          >
            <div>
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p>
                {item.quantity} × ${item.price.toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right text-xl font-semibold">
        Total: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
};
