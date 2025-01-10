import React from 'react'
import App from '@/web/lib/Counter1/App.jsx'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe(
  'Initial state',
  () => {
    it(
      'should be 0',
      async () => {
        render(<App/>)
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 0')
      }
    )
  }
)
describe(
  'Increment by 1',
  () => {
    it(
      'should increment by 1',
      async () => {
        render(<App/>)
        await userEvent.click(screen.getByText('+1'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 1')
        await userEvent.click(screen.getByText('+1'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 2')
        await userEvent.click(screen.getByText('+1'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 3')
      }
    )
  }
)
describe(
  'Increment by 10',
  () => {
    it(
      'should increment by 10',
      async () => {
        render(<App/>)
        await userEvent.click(screen.getByText('+10'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 10')
        await userEvent.click(screen.getByText('+10'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 20')
        await userEvent.click(screen.getByText('+10'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 30')
      }
    )
  }
)
describe(
  'Decrement by 1',
  () => {
    it(
      'should decrement by 1',
      async () => {
        render(<App/>)
        await userEvent.click(screen.getByText('+10'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 10')
        await userEvent.click(screen.getByText('-1'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 9')
        await userEvent.click(screen.getByText('-1'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 8')
      }
    )
  }
)
describe(
  'Decrement by 10',
  () => {
    it(
      'should decrement by 10',
      async () => {
        render(<App/>)
        await userEvent.click(screen.getByText('+1'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is 1')
        await userEvent.click(screen.getByText('-10'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is -9')
        await userEvent.click(screen.getByText('-10'))
        expect(screen.getByText(/The current count is/))
          .toHaveTextContent('The current count is -19')
      }
    )
  }
)