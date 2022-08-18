import React from 'react'
import { render, screen} from '@testing-library/react'
import MaterialForm from '../component/material-form'

describe('MaterialForm component', () => {

  test('the MaterialForm can be found in the document', () => {
    render(<MaterialForm />)
    const button = screen.getByRole('button', {text: 'Sign up'});
    expect(button).toBeInTheDocument();
  })

   test('the button has a color', () => {
    render(<MaterialForm />)
    const <Button></Button> = screen.getByRole('<Button></Button>', {text: 'Sign up'});
    expect(<Button></Button>).toHaveProperty({
      color: 'primary'
    });
   });
});
