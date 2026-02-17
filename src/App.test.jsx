import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  // App.jsxの中に存在するはずのテキストを探す
  const linkElement = screen.getByText(/学習時間管理/i) 
  expect(linkElement).toBeInTheDocument()
})