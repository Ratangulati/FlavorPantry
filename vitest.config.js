// vitest.config.js
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html', 'lcov'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.config.js',
        '**/*.config.ts',
        'dist/',
        'coverage/',
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.spec.{js,jsx,ts,tsx}',
      ],
      thresholds: {
        global: {
          branches: 70,
          functions: 70,
          lines: 70,
          statements: 70
        }
      }
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})

// src/test/setup.js
import '@testing-library/jest-dom'
import { expect, afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'

// Mock IntersectionObserver
global.IntersectionObserver = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

// Mock ResizeObserver
global.ResizeObserver = vi.fn(() => ({
  disconnect: vi.fn(),
  observe: vi.fn(),
  unobserve: vi.fn(),
}))

// Mock fetch
global.fetch = vi.fn()

// Mock localStorage
const localStorageMock = {
  getItem: vi.fn(),
  setItem: vi.fn(),
  removeItem: vi.fn(),
  clear: vi.fn(),
}
global.localStorage = localStorageMock

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Cleanup after each test case
afterEach(() => {
  cleanup()
  vi.clearAllMocks()
})

// src/test/utils.jsx - Testing utilities
import React from 'react'
// import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

// Custom render function that includes providers
export const renderWithRouter = (ui, options = {}) => {
  const Wrapper = ({ children }) => (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )

  return render(ui, { wrapper: Wrapper, ...options })
}

// Mock data for tests
export const mockRecipes = [
  {
    idMeal: '1',
    strMeal: 'Test Recipe 1',
    strMealThumb: 'https://example.com/image1.jpg'
  },
  {
    idMeal: '2', 
    strMeal: 'Test Recipe 2',
    strMealThumb: 'https://example.com/image2.jpg'
  }
]

export const mockApiResponse = {
  meals: mockRecipes
}

// src/test/mocks/api.js - API mocks
export const mockFetch = (data, ok = true) => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      ok,
      json: () => Promise.resolve(data),
    })
  )
}

export const mockFetchError = () => {
  global.fetch = vi.fn(() => Promise.reject(new Error('API Error')))
}

// Example test files:

// src/components/__tests__/Navbar.test.jsx
import { describe, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { renderWithRouter } from '../../test/utils'
import Navbar from '../FlavorPantry/src/components/Navbar.jsx'

describe('Navbar Component', () => {
  it('renders logo and brand name', () => {
    renderWithRouter(<Navbar />)
    
    expect(screen.getByText('FlavorPantry')).toBeInTheDocument()
    expect(screen.getByAltText('FlavorPantry Logo')).toBeInTheDocument()
  })
  
  it('has proper styling classes', () => {
    renderWithRouter(<Navbar />)
    
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveClass('fixed', 'top-0', 'w-full')
  })
})

// src/components/__tests__/Hero.test.jsx  
import {  expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { renderWithRouter } from '../../test/utils'
import Hero from '../FlavorPantry/src/components/Hero.jsx'

// Mock useNavigate
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => mockNavigate
  }
})

describe('Hero Component', () => {
  it('renders main heading and description', () => {
    renderWithRouter(<Hero />)
    
    expect(screen.getByText('Find Recipes With What You Have!')).toBeInTheDocument()
    expect(screen.getByText(/Enter ingredients from your pantry/)).toBeInTheDocument()
  })
  
  it('navigates to recipes page when button is clicked', () => {
    renderWithRouter(<Hero />)
    
    const button = screen.getByText('Check Recipes')
    fireEvent.click(button)
    
    expect(mockNavigate).toHaveBeenCalledWith('/recipes')
  })
})

// src/pages/__tests__/Recipes.test.jsx
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '../../test/utils'
// import { mockFetch, mockApiResponse } from '../../test/mocks/api'
import Recipes from '../FlavorPantry/src/pages/Recipes.jsx'

describe('Recipes Page', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('renders page title and description', () => {
    renderWithRouter(<Recipes />)
    
    expect(screen.getByText('Cook It Now')).toBeInTheDocument()
    expect(screen.getByText('Find recipes with ingredients you already have')).toBeInTheDocument()
  })
  
  it('allows adding ingredients', async () => {
    const user = userEvent.setup()
    renderWithRouter(<Recipes />)
    
    const input = screen.getByPlaceholderText(/Add ingredient/)
    const addButton = screen.getByText('Add')
    
    await user.type(input, 'chicken')
    await user.click(addButton)
    
    expect(screen.getByText('chicken')).toBeInTheDocument()
  })
  
  it('fetches and displays recipes', async () => {
    mockFetch(mockApiResponse)
    const user = userEvent.setup()
    renderWithRouter(<Recipes />)
    
    // Add ingredient
    const input = screen.getByPlaceholderText(/Add ingredient/)
    const addButton = screen.getByText('Add')
    await user.type(input, 'chicken')
    await user.click(addButton)
    
    // Find recipes
    const findButton = screen.getByText('Find Recipes')
    await user.click(findButton)
    
    await waitFor(() => {
      expect(screen.getByText('Test Recipe 1')).toBeInTheDocument()
      expect(screen.getByText('Test Recipe 2')).toBeInTheDocument()
    })
  })
  
  it('handles API errors gracefully', async () => {
    mockFetch({ meals: null })
    const user = userEvent.setup()
    renderWithRouter(<Recipes />)
    
    // Add ingredient and search
    const input = screen.getByPlaceholderText(/Add ingredient/)
    await user.type(input, 'chicken')
    await user.click(screen.getByText('Add'))
    await user.click(screen.getByText('Find Recipes'))
    
    await waitFor(() => {
      expect(screen.getByText('No recipes found.')).toBeInTheDocument()
    })
  })
})