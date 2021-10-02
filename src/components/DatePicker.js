import React from 'react'
import DateView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {Field,ErrorMessage} from 'formik';
import { Label } from 'reactstrap';
import TextError from './TextError';
function DatePicker (props) {
    const {name,label,...rest} = props;
    return (
        <div className="form-control">
            <Label for={name}>{label}</Label>
            <Field name ={name}>
                {({form,field}) => {
                    const {setFieldValue} = form;
                    const {value} = field;
                    return <DateView {...field} id={name}  {...rest} selected ={value} onChange={val => setFieldValue(name,val)} />
                }}
            </Field>
            <ErrorMessage name ={name} component={TextError}/>
        </div>
    )
}

export default DatePicker