import React from 'react'
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import { Button } from 'reactstrap';
import FormikControl from './FormikControl';

function FormikContainer() {
    const DROPDOWN_OPTIONS =[
        {key: 'Select an option', value:''},
        {value: 'option1',key:'Motor'},
        {value: 'option2',key:'Bicycle'},
        {value: 'option3',key:'Car'},
        {value: 'option4',key:'On foot'},
    ]

    const RADIO_OPTIONS =[
        {value: 'option5',key:'Motor'},
        {value: 'option6',key:'Bicycle'},
        {value: 'option7',key:'Car'},
        {value: 'option8',key:'On foot'},
    ]

    const CHECKBOX_OPTIONS =[
        {value: 'coption5',key:'Motor'},
        {value: 'coption6',key:'Bicycle'},
        {value: 'coption7',key:'Car'},
        {value: 'coption8',key:'On foot'},
    ]

    const initialValues ={
        email: '',
        description: '',
        selectOption: '',
        radioOption:'',
        checkboxOption: [],
        birthDate: null
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOption: Yup.string().required('Required'),
        checkboxOption: Yup.array().required('Required'),
        birthDate: Yup.date().required('Required').nullable()
    });
    const onSubmit = values => {
        console.log('Form values', values);
    }
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
            {formik => {
                return (
                    <Form>
                    <FormikControl control='input' name='email' type ='email' label ='Email'/>
                    <FormikControl control='textarea' name='description' label ='Description'/>
                    <FormikControl control='select' name='selectOption' label='Select an option' options={DROPDOWN_OPTIONS} />
                    <FormikControl control='radio' name='radioOption' label='Radio topic' options={RADIO_OPTIONS} />
                    <FormikControl control='checkbox' name='checkboxOption' label='Checkbox topic' options={CHECKBOX_OPTIONS} />
                    <FormikControl control='date' name='birthDate' label='Birth Date'/>
                    
                        <Button type="submit">Submit</Button>
                    </Form>
                )
            }}           
        </Formik>
    )
}

export default FormikContainer
