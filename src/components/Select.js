import React from 'react'
import {Field, ErrorMessage} from 'formik';
import { Label } from 'reactstrap';
import TextError from './TextError';

function Select({label, name, options, ...rest}) {
    return (
        <div className="form-control">
            <Label for={name}>{label}</Label>
            <Field as='select' {...rest} name={name} id={name}>
            {options.map(option => {
                return (
                    <option key={option.value} value={option.value}>{option.key}</option>
                );
            })}
            </Field>
            <ErrorMessage component={TextError} name={name}/>            
        </div>
    )
}

export default Select
