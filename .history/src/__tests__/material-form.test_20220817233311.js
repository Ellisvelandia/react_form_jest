import React from 'react'
import { render, screen } from '@testing-library/react'
import MaterialForm from '../component/material-form'

describe('MaterialForm component', () => {

  let button;
  beforeEach(() => {
    render(<MaterialForm />)
    const button = screen.getByRole('button', { text: 'Sign up' })
  })

  test('the MaterialForm can be found in the document', () => {
    expect(button).toBeInTheDocument()
  });

  test('the button has a color', () => {
    render(<MaterialForm />)
    const button = screen.getByRole('button', { text: 'Sign up' })
    expect(button).toBeInTheDocument({
      color: 'primary'
    });
  })
})
