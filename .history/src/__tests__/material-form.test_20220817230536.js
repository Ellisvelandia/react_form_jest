import React from 'react'
import { render, screen} from '@testing-library/react'
import MaterialForm from '../component/material-form'

describe('MaterialForm component', () => {
  test('the MaterialForm can be found in the document', () => {
    render(<MaterialForm />)
    const button = screen.getByRole('button', {email: 'Sign up'});
    expect(button).toBeInTheDocument();
  })
})
