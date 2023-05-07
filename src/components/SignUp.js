import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useTitle from '../hooks/useTitle.js';
import { isValidForm } from '../functions/validation';
import { notify } from '../functions/notify';
import styles from '../styles/Signup_Login.module.css';

const SignUp = () => {
    useTitle('Sign Up Page');

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false
    });

    useEffect(() => {
        setErrors(isValidForm(data, 'SIGNUP'));
    }, [data, touched]);

    const changeHandler = (event) => {
        if(event.target.name === 'isAccepted')
            setData({...data, [event.target.name]: event.target.checked})
        else 
            setData({...data, [event.target.name]: event.target.value})
    }
    
    const changeFocus = (event) => {
        setTouched({...touched, [event.target.name]: true});
    }

    const submitSignUpForm = (event) => {
        event.preventDefault();
        
        if(Object.keys(errors).length) {
            notify('FAILED', 'Please complete all fields.');

            setTouched({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            });
        } else 
            notify('SUCCESS', 'Login is success.');
    }


    return(
        <div className={styles.container}>
            <form onSubmit={submitSignUpForm} className={styles.formContainer}>
                <h1> Sign Up </h1>
                <div className={styles.formField}>
                    <label> Name </label>
                    <input 
                        type='name' name='name' value={data.name} onChange={changeHandler} onFocus={changeFocus} 
                        className={(errors.name && touched.name) ? styles.unCompleted : styles.formInput} 
                    />
                    { (errors.name && touched.name) && <p> {errors.name} </p> } 
                    
                </div>

                <div className={styles.formField}>
                    <label> Email </label>
                    <input 
                        type='email' name='email' value={data.email} onChange={changeHandler} onFocus={changeFocus}
                        className={(errors.email && touched.email) ? styles.unCompleted : styles.formInput} 
                    />
                    { (errors.email && touched.email) && <p> {errors.email} </p> }
                </div>

                <div className={styles.formField}>
                    <label> Password </label>
                    <input 
                        type='password' name='password' value={data.password} onChange={changeHandler} onFocus={changeFocus} 
                        className={(errors.password && touched.password) ? styles.unCompleted : styles.formInput} 
                    />
                    { (errors.password && touched.password) && <p> {errors.password} </p> }
                </div>

                <div className={styles.formField}>
                    <label> Confirm Password </label>
                    <input 
                        type='password' name='confirmPassword' value={data.confirmPassword} onChange={changeHandler} onFocus={changeFocus} 
                        className={(errors.confirmPassword && touched.confirmPassword) ? styles.unCompleted : styles.formInput} 
                    />
                    { (errors.confirmPassword && touched.confirmPassword) && <p> {errors.confirmPassword} </p> }
                </div>

                <div className={styles.formField}>
                    <div className={styles.checkBoxContainer}>
                        <label> I accept terms of privacy policy. </label>
                        <input 
                            type='checkbox' name='isAccepted' value={data.isAccepted} onChange={changeHandler} onFocus={changeFocus} 
                            className={(errors.isAccepted && touched.isAccepted) ? styles.unCompleted : styles.formInput} 
                        />
                    </div>
                    { (errors.isAccepted && touched.isAccepted) && <p> {errors.isAccepted} </p> }
                </div>

                <div className={styles.formButtons}>
                    <Link to='/login'> Login </Link>
                    <button type='submit'> Sign up </button>
                </div>
            </form>

            <ToastContainer />
        </div>
    );
}

export default SignUp;