/* eslint-disable no-unused-vars */
import React from 'react';
import style from './SignUp.module.css' 
import SignUpForm from '../../components/SignUpForm/SignUpForm';

function SignUp() {
    return (
        <div>
            <div className={`${style.container}`}>
            <h1 className={`text-4xl font-bold text-center pt-8`}>Đăng ký</h1>
            <SignUpForm />
            
            </div>
        </div>
    );
}

export default SignUp;