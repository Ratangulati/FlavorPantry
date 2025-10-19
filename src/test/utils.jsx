// src/test/utils.jsx - Testing utilities
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

// Custom render function that includes providers
export const renderWithRouter = (ui, options = {}) => {
  const Wrapper = ({ children }) => <BrowserRouter>{children}</BrowserRouter>;

  return render(ui, { wrapper: Wrapper, ...options });
};

// Mock data for tests
export const mockRecipes = [
  {
    idMeal: '1',
    strMeal: 'Test Recipe 1',
    strMealThumb: 'https://example.com/image1.jpg',
  },
  {
    idMeal: '2',
    strMeal: 'Test Recipe 2',
    strMealThumb: 'https://example.com/image2.jpg',
  },
];

export const mockApiResponse = {
  meals: mockRecipes,
};

// src/test/mocks/api.js - API mocks
export const mockFetch = (data, ok = true) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok,
      json: () => Promise.resolve(data),
    })
  );
};

export const mockFetchError = () => {
  global.fetch = vi.fn(() => Promise.reject(new Error('API Error')));
};
