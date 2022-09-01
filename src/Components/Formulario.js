import React from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import Swal from 'sweetalert2'
const Formulario = () => {
    const handleSubmit = (data) => {
        Swal.fire(`${JSON.stringify(data)}`)
    }

    return (
        <>
        <div className='container contenedor__form w-100'>
            
            <Formik

                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    textArea:''

                }}
                validate={(valores) => {
                    let errors = {}
                    /* Errores para el nombre */
                    if (!valores.name) errors.name = 'Please enter your name';
                    else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name))
                    errors.name = 'The name can only contain letters';

                    /* Errores para el email*/
                    if (!valores.email) errors.email = 'please enter your email';
                    else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email))
                     errors.email = `please enter your email correctly`;

                    /* Errores para el pass */
                    if (!valores.password) errors.password = 'Please enter your password';

                    return errors;
                }}

                onSubmit={(valores, { resetForm }) => {
                    handleSubmit(valores)
                    resetForm();
                }}
            >
                {({ errors }) => (


                    <div className=' col-12 d-flex flex-column align-items-center justify-content-center  '>
                         <div className='col-md-10 h1__form'>
                             <h1 className=''>Form</h1>
                        </div>
                        <Form className=" forms rounded col-md-12 d-flex 
                          flex-column justify-content-center align-items-center " >

                            <div className='col-md-10 my-4'>
                                <label htmlFor='name'>Name</label>
                                <Field
                                    type="text"
                                    name='name'
                                    placeholder=' write you name'
                                    className='form-control'
                                />

                                <ErrorMessage name='name'
                                    component={() => (<div className='errores__form text-danger'>{errors.name}</div> )}
                                />
                            </div>

                            <div className='col-md-10 my-4'>
                                <label htmlFor='email'>Email</label>
                                <Field
                                    type="email"
                                    name='email'
                                    placeholder='email@email.com'
                                    className='form-control '
                                />
                                <ErrorMessage name='email'
                                    component={() => (<div className='errores__form text-danger'>{errors.email}</div>)}
                                />

                            </div>

                            <div className='col-md-10 my-4'>
                                <label htmlFor='cel'>Password</label>
                                <Field
                                    type="password"
                                    name='password'
                                    placeholder=' write you password'
                                    className='form-control '

                                />
                                <ErrorMessage name='password' 
                                component={() => (<div className='errores__form text-danger'>{errors.password}</div>)} />
                            </div>
                            <div className='col-md-10 my-4'>
                                <label htmlFor='cel'>Text Area</label>
                                <Field
                                    type="text"
                                    name='textArea'
                                    className='form-control '

                                />
                            </div>

                            <div className='col-md-10 my-2'>
                                <button className=' btn btn-secondary btn__submit my-1 'type='submit'>
                                    Submit
                                </button>
                                
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
        </>
    )
}

export default Formulario