import React from 'react'
import { render} from '@testing-library/react'
import MaterialForm from '../component/material-form'

describe('MaterialForm component', () => {
  test('the MaterialForm can be found in the document', () => {
    render(<MaterialForm />)
    const article = screen.getByRole('article', {email: })
  })
})
