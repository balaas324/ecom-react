import type { Product } from '../types/Product';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent <Link> navigation
    addToCart(product);
  };

  return (
    <Link
      to={`/product/${product.id}`}
      className="block m-2 rounded-2xl border bg-white p-5 shadow hover:shadow-md transition duration-200"
    >
      <div className="flex flex-col h-full">
        <img
          src={product.image}
          alt={product.title}
          className="h-40 object-contain mb-4 mx-auto"
        />
        <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
        <p className="text-gray-500 mb-3">{product.price} USD</p>
        <button
          onClick={handleAddToCart}
          className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
};

