import { render, screen, fireEvent } from '@testing-library/react';
import { ProductCard } from '../../components/ProductCard';
import { MemoryRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import type { Product } from '../../types/Product';
import { vi } from 'vitest';


const product: Product = {
  id: 1,
  title: 'Test Product',
  description: 'A sample product',
  price: 29.99,
  image: 'https://via.placeholder.com/150',
  category: 'test',
};

const mockProduct: Product = {
  id: 1,
  title: 'Test Product',
  description: 'Test description',
  price: 49.99,
  image: '/assets/test.jpg',
  category: 'test-category',
};

const mockAddToCart = vi.fn();

function renderWithProviders() {
  return render(
    <CartContext.Provider value={{ cart: [], addToCart: mockAddToCart, removeFromCart: () => {}, clearCart: () => {} }}>
      <BrowserRouter>
        <ProductCard product={product} />
      </BrowserRouter>
    </CartContext.Provider>
  );
}

describe('ProductCard', () => {
  it('renders product title and price', () => {
    renderWithProviders();
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('29.99 USD')).toBeInTheDocument();
  });

  it('calls addToCart on button click', () => {
    renderWithProviders();
    const button = screen.getByText(/add to cart/i);
    fireEvent.click(button);
    expect(mockAddToCart).toHaveBeenCalledWith(product);
  });
});

describe('ProductCard', () => {
  it('renders product title and price', () => {
    render(
      <MemoryRouter>
        <CartContext.Provider value={{ cart: [], addToCart: () => {}, removeFromCart: () => {}, clearCart: () => {} }}>
          <ProductCard product={mockProduct} />
        </CartContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText(/49.99/i)).toBeInTheDocument();
  });
});