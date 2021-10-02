import React from 'react'
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from '../components/FormikControl';
import { Button } from 'reactstrap';


function LoginForm() {
    const initialValues={
        email:'',
        password:'',
    }
    const onSubmit = values => {console.log('Form Submit', values)}

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        password: Yup.string().required('Required')
    })
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            {formik => {
            return (
            <Form>
                <FormikControl control='input' type="email" name="email" label='Email'/>
                <FormikControl control='input' type="password" name="password" label='Password'/>
                <Button type="submit" disabled = {!formik.isValid}> Submit</Button>
            </Form> 
            )}}           
        </Formik>
    )
}

export default LoginForm
/*
import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function LoginForm () {
  const initialValues = {
    email: '',
    password: ''
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email format')
      .required('Required'),
    password: Yup.string().required('Required')
  })

  const onSubmit = values => {
    console.log('Form data', values)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => {
        return (
          <Form>
            <FormikControl
              control='input'
              // control='chakraInput'
              type='email'
              label='Email'
              name='email'
            />
            <FormikControl
              control='input'
              type='password'
              label='Password'
              name='password'
            />
            <button type='submit' disabled={!formik.isValid}>Submit</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default LoginForm
*/