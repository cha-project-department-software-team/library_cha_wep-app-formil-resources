import React from 'react';
import {Field, ErrorMessage} from 'formik';
import { Input, Label } from 'reactstrap';
import TextError from './TextError';

function CheckboxGroup({label,name,options,...rest}) {
    return (
        <div className ="form-control">
            <Label>{label}</Label>
            <Field id={name} name={name} {...rest}>
                {({field})=>{
                    return options.map(option => {
                        return (
                            <React.Fragment key={option.key}>
                                <Input
                                type='checkbox'
                                id ={option.value}
                                {...rest}
                                {...field}
                                value={option.value}
                                checked={field.value.includes(option.value)}
                                />
                                <Label for={option.value}>{option.key}</Label>
                            </React.Fragment>
                        );
                    })
                }}
            </Field>
            <ErrorMessage name={name} component ={TextError}/>
        </div>
    )
}

export default CheckboxGroup
/*
import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function RadioButtons (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className='form-control'>
      <label>{label}</label>
      <Field name={name} >
        {({ field }) => {
          return options.map(option => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type='radio'
                  id={option.value}
                  {...field}
                  {...rest}
                  value={option.value}
                  checked={field.value === option.value}
                />
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            )
          })
        }}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default RadioButtons
*/