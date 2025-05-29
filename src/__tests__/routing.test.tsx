/// <reference types="vitest" />
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import { ProductCard } from '../components/ProductCard';
import { CartContext } from '../context/CartContext';
import userEvent from '@testing-library/user-event';

const mockProduct = {
  id: 1,
  title: 'Test Product',
  description: 'Product details...',
  price: 100,
  image: '/test.jpg',
  category: 'test',
};

describe('Routing', () => {
  it('navigates to product detail when clicking product', async () => {
    const user = userEvent.setup();

    render(
      <CartContext.Provider
        value={{
          cart: [],
          addToCart: () => {},
          removeFromCart: () => {},
          clearCart: () => {},
        }}
      >
        <MemoryRouter initialEntries={['/']}>
          <Routes>
            <Route
              path="/"
              element={<ProductCard product={mockProduct} />}
            />
            <Route
              path="/product/:id"
              element={<div>Product Detail Page</div>}
            />
          </Routes>
        </MemoryRouter>
      </CartContext.Provider>
    );

    const card = screen.getByRole('link');
    await user.click(card);

    expect(screen.getByText('Product Detail Page')).toBeInTheDocument();
  });
});
