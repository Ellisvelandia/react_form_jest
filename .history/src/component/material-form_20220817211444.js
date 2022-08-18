import { Button, Box, TextField } from '@material-ui/core'
import { Field, Form, Formik } from 'formik'
import { object, String } from 'yup'

const MaterialForm = () => {
  return (
    <div>
      <Formik>
        {() => (
          <Form>
            <Field />
            <Field />
            <Field />
            <Button>S</Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default MaterialForm
