import React from 'react';
import {Field, ErrorMessage} from 'formik';
import { Label } from 'reactstrap';
import TextError from './TextError';

function Input(props) {
    const {label, name, ...rest} = props;
    return (
        <div className="form-control">
            <Label for ={name}>{label}</Label>
            <Field id ={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/> 
        </div>
    )
}

export default Input;
