import React from 'react';
import { useState } from 'react';
import style from './SignInForm.module.css'

function SignInForm() {
    // declare state variable
    const [cccd, setCCCD] = useState("")
    const [password, setPassword] = useState("")

    // handle change input
    const handleChangeCCCD = (e) => {
        setCCCD(e.target.value)
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    //  handle submit form
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = {
            "cccd": cccd, 
            "password": password
        }
        console.log(formData)
    }
    return (
        <form onSubmit={handleSubmit}>
            {/* ma cccd */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='cccd' className={`${style.label} font-bold mt-8    `}>Mã định danh (CCCD) (*)</label>
                <input className={`${style.input}`} type="text" id='cccd' placeholder='Nhập mã cccd' value={cccd} onChange={handleChangeCCCD}/>
            </div>
    
            {/* Password */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='password' className={`${style.label} font-bold mt-8    `}>Password (*)</label>
                <input className={`${style.input}`} type="password" id='password' placeholder='Nhập mật khẩu' value={password} onChange={handleChangePassword}/>
            </div>

            <div className={`flex items-center justify-center`}>
                <button className={`${style.button} w-1/3 my-8 bg-violet-950`} type='submit'>Đăng nhập</button>
            </div>

        </form>
    );
}

export default SignInForm;