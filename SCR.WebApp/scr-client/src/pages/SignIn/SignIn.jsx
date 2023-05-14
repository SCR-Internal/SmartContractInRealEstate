import React from 'react';
import style from "./SignIn.module.css"
import SignInForm from '../../components/SignInForm/SignInForm';

function SignIn() {
    return (
        <div className={`${style.container}`}>
            <h1 className={`text-4xl font-bold text-center pt-8`}>Đăng nhập</h1>
            <SignInForm />
            
        </div>
    );
}

export default SignIn;