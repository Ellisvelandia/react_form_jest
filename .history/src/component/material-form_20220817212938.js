import { Button, Box, TextField } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { object, String } from 'yup'

const MaterialForm = () => {
  return (
    <div className='MaterialForm'>
      <Formik>
        {() => (
          <Form>
            <Box height={14} />
            <Field
              name='email'
              type='email'
              as={TextField}
              variant='outlined'
              color='primary'
              label='email'
              fullwidth
            />
            <Box height={14} />
            <Field
              name='name'
              type='name'
              as={TextField}
              variant='outlined'
              color='primary'
              label='name'
              fullwidth
            />
            <Box height={14} />
            <Field
              name='password'
              type='password'
              as={TextField}
              variant='outlined'
              color='primary'
              label='password'
              fullwidth
            />
            <Box height={14} />
            <Button>Sign up</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default MaterialForm
