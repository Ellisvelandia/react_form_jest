import { Button, Box, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

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
          email: string()
            .required('Please enter Email')
            .email('Invalid Email'),
          name: string()
            .required('Please enter Name')
            .min(2, 'Name too short'),
          password: string()
            .required('Please enter Password')
            .min(7, 'Password should be minium 7 characters')
        })}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            <Field
              name='email'
              type='email'
              as={TextField}
              variant='outlined'
              color='primary'
              label='email'
              fullwidth
              error={Boolean(errors.email) && Boolean(touched.email)}
              helperText={Boolean(touched.email) && errors.email}
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
               error={Boolean(errors.name) && Boolean(touched.name)}
              helperText={Boolean(touched.name) && errors.name}
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
              error={Boolean(errors.password) && Boolean(touched.password)}
              helperText={Boolean(touched.password) && errors.password}
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
