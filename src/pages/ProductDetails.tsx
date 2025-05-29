// src/pages/ProductDetails.tsx
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import type { Product } from '../types/Product';
import { useCart } from '../context/CartContext';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data: Product[]) => {
        const found = data.find((p) => p.id === Number(id));
        setProduct(found || null);
      });
  }, [id]);

  if (!product) {
    return <div className="p-8">Product not found.</div>;
  }

  return (
    <div className="p-8 grid md:grid-cols-2 gap-8">
      <img src={product.image} alt={product.title} className="rounded-lg shadow-lg" />
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-2xl font-semibold mb-4">${product.price.toFixed(2)}</p>
        <button
          className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        <div className="mt-6">
          <Link to="/" className="text-blue-500 underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
