import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import MaterialForm from '../component/material-form'
import user from '@testing-library/user-event'

describe('MaterialForm component', () => {
  test('the MaterialForm can be found in the document', () => {
    render(<MaterialForm />)
  })
})
