import React from 'react';
import {Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import TextError from './TextError';
import {Label, Button} from 'reactstrap';
import { useState } from 'react';

const initialValues ={
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    phNumbers: ['']
};

const savedValues ={
    name: 'Tri Hoang Minh',
    email: 'm@example.com',
    channel: 'Trí Hoàng',
    comments: 'asd',
    address: '122 Klahsad Assiua',
    phNumbers: ['123']
};

const onSubmit = (values, submitProps) => {
  console.log('Form data', values)
  console.log('submitProps', submitProps)
  submitProps.setSubmitting(false)
  submitProps.resetForm()
}

const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required'),
  comments: Yup.string().required('Required'),
  address: Yup.string().required('Required')
})

const FormPage = () => {
    const [savedData, setSavedData] = useState(null);
    return (
        <Formik 
        initialValues={savedData || initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        //disable nút submit ngay từ đầu
        // validateOnMount={true}
        enableReinitialize={true}
        >
        {formik=>{
            console.log('Formik props', formik);
            return (
                 <Form>
                <div className="form-control">
                <Label for = "name">Name</Label>
                <Field 
                type ="text" 
                name="name" 
                id ="name"
                />
                <ErrorMessage component={TextError} name="name"/>
                </div>

                <div className="form-control">
                <Label for = "email">Email</Label>
                <Field 
                type ="email" 
                name="email" 
                id ="email"
                />
                <ErrorMessage component={TextError} name="email"/>
                </div>

                <div className="form-control">
                <Label for = "channel">Channel</Label>
                <Field 
                type ="text" 
                name="channel" 
                id ="channel"
                />
                <ErrorMessage component={TextError} name="channel"/>
                </div>
                
                <div className="form-control">
                <Label for = "comments">Comments</Label>
                <Field as ="textarea" id ="comments" name="comments"/>
                <ErrorMessage component={TextError} name="comments"/>
                </div>

                <div className="form-control">
                    <Label for = "address">Address</Label>
                    <Field name="address" >
                        {props=>{
                            // eslint-disable-next-line
                            const {field, form, meta} = props;
                            return (
                                <div>
                                <input type="text" id="address" {...field}/>
                                {meta.touched && meta.error ?<div className="error">{meta.error}</div>:null}
                                </div>
                            );
                        }}
                    </Field>
                </div>
                <div className="form-control">
                    <Label for = "street">List of phone numbers</Label>
                    <FieldArray name="phNumbers">
                        {fieldArrayProps => {
                            const {push,remove,form} = fieldArrayProps;
                            const {values} = form;
                            const {phNumbers} = values;
                            return <div>
                                {phNumbers.map((phNumbers,index) =>{
                                    return (
                                        <div key={index}>
                                            <Field type="text" name = {`phNumbers[${index}]`} />
                                            {index > 0 && 
                                            <Button type ="button" onClick={()=>{remove(index)}}> - </Button>
                                            }
                                            <Button type ="button" onClick={()=>{push('')}}> + </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        }}
                    </FieldArray>
                </div>
                {/* dirty: chỉ ra nếu có ít nhất 1 trường bị thay đổi
                @return [boolean] */}
                <Button color="primary" type="button" onClick={()=>{setSavedData(savedValues)}}>Load saved data</Button>
                <Button type ="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</Button>
                <Button type="reset">Reset</Button>
            </Form>
            );
        }}
           
        </Formik>
    );
};

export default FormPage;