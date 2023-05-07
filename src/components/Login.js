import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import useTitle from '../hooks/useTitle';
import { notify } from '../functions/notify';
import { isValidForm } from '../functions/validation';
import styles from '../styles/Signup_Login.module.css';

const Login = () => {
    useTitle('Login Page');

    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const changeInputs = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const changeFocusInputs = (event) => {
        setTouched({...touched, [event.target.name]: true});
    }

    const submitLoginForm = (event) => {
        event.preventDefault();

        if(Object.keys(errors).length) {
            notify('FAILED', 'Login is failed.');
            setTouched({
                email: true,
                password: true
            })
        } else 
            notify('SUCCESS', 'Login is success.');
    }

    useEffect(() => {
        setErrors(isValidForm(data));
    }, [data]);

    return(
        <div className={styles.container}>
            <form className={styles.formContainer} onSubmit={submitLoginForm}>
                <h1> Login </h1>

                <div className={styles.formField}>
                    <label> Email </label>
                    <input 
                        type='text' name='email' value={data.email} onChange={changeInputs} onFocus={changeFocusInputs}  
                        className={(errors.email && touched.email)? styles.unCompleted : styles.formInput}
                    />
                    { (errors.email && touched.email) && <p> {errors.email} </p>}
                </div>

                <div className={styles.formField}>
                    <label> Password </label>
                    <input 
                        type='password' name='password' value={data.password} onChange={changeInputs} onFocus={changeFocusInputs}  
                        className={(errors.password && touched.password)? styles.unCompleted : styles.formInput}
                    />
                    { (errors.password && touched.password) && <p> {errors.password} </p> }
                </div>

                <div className={styles.formButtons}>
                    <Link to='/signup'> Sign up </Link>
                    <button> Login </button>
                </div>
            </form>

            <ToastContainer />
        </div>
    );
}

export default Login;