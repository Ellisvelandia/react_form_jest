import React from 'react'
import { render, screen } from '@testing-library/react'
import MaterialForm from '../component/material-form'

describe('MaterialForm component', () => {

  let button;
  let <div></div>;
  beforeEach(() => {
    render(<MaterialForm />)
    button = screen.getByRole('button', { text: 'Sign up' })
    <div></div>  = screen.getByRole('<div></div>', { label: 'Email' })
  })

  test('the MaterialForm can be found in the document', () => {
    expect(button).toBeInTheDocument()
  });

  test('the button has a color', () => {
    expect(button).toBeInTheDocument({
      color: 'primary'
    });
  });
  test('the MaterialForm can be found in the document', () => {
    expect(<div></div>).toHaveValue({
      label:'email'
    })
  });
});
