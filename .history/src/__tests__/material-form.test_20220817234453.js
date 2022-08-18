import React from 'react'
import { render, screen } from '@testing-library/react'
import MaterialForm from '../component/material-form'

describe('MaterialForm component', () => {

  let button;
  let <Formik></Formik>;
  beforeEach(() => {
    render(<MaterialForm />)
    button = screen.getByRole('button', { text: 'Sign up' })
    <Formik></Formik>  = screen.getByRole('<Formik></Formik>', { label: 'Email' })
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
    expect(<Formik></Formik>).toHaveValue({
      label:'email'
    })
  });
});
