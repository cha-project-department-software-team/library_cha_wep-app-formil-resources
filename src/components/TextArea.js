import React from 'react'
import {Field, ErrorMessage} from 'formik';
import { Label } from 'reactstrap';
import TextError from './TextError';

function TextArea(props) {
    const {label, name, ...rest} = props
    return (
        <div className="form-control">
            <Label for={name}>{label}</Label>
            <Field id={name} name={name} as="textarea" {...rest}/>
            <ErrorMessage name={name} component={TextError}/>   
        </div>
    )
}

export default TextArea
