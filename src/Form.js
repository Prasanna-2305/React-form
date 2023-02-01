import React, { useEffect, useState } from 'react'
import './style.css'
import Validate from './Validate'
const Form = ({ submitForm }) => {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        password: "",

    })
    const [errors, setErrors] = useState({});
    const [dataIsCorrect, setDataIsCorrect] = useState(false);
    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setErrors(Validate(values));
        setDataIsCorrect(true);
    };
    useEffect(() => {
        if (dataIsCorrect) {
            submitForm(true);
        }
    }, [errors]);
    return (
        <div className='container'>
            <div className='app-wrapper'>
                <div>
                    <h2 className='title'>Registration</h2>
                </div>
                <form className='form-wrapper'>
                    <div className='name'>
                        <input
                            data-testid='handleFirst'
                            className='input'
                            type='text'
                            placeholder='Name'
                            name='fullname'
                            value={values.fullname}
                            onChange={handleChange}
                        />
                        {errors.fullname && <p className='error'>{errors.fullname}</p>}
                    </div>

                    <div className='email'>
                        <input className='input'
                            data-testid='handleFirst2'
                            type='email'
                            placeholder='Email'
                            name='email'
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.email && <p className='error'>{errors.email}</p>}
                    </div>

                    <div className='password'>
                        <input className='input'
                            data-testid='handleFirst3'
                            type='password'
                            placeholder='Pasword'
                            name='password'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p className='error'>{errors.password}</p>}
                    </div>

                    <div>
                        <button data-testid='handleSubmit' className='submit' onClick={handleFormSubmit}>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form