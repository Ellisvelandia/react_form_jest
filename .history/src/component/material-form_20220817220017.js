import { Button, Box, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { object, String } from 'yup'

const initialValues = {
  email: '',
  name: '',
  password: ''
}

const MaterialForm = () => {
  return (
    <div className='MaterialForm'>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, formikHelpers) => {
          console.log(values)
          formikHelpers.resetForm()
        }}
        validationSchema={object({
          email : string()
        })}
      >
        {() => (
          <Form>
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
            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='large'
            >
              Sign up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default MaterialForm
