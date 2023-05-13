import {React, useState, useEffect} from 'react';
import style from './SignUpForm.module.css'
import axios from 'axios';

function SignUpForm() {
    const [submitForm, setSubmitForm] = useState({})
    const [cccd, setCCCD] = useState("")
    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState("")


    

    //  handle submit form
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = {
            "cccd": cccd, 
            "name": name,
            "dob": dob,
            "address": address,
            "email": email,
            "password": password
        }
        try{
            const res = await axios.post("http://localhost:3001/add_user", formData)
            console.log(res.data)
        }
        catch (e){
            console.log(e)
        }
        
    }

    
        
    // console.log(submitForm)
    // handle change input
    const handleChangeCCCD = (e) => {
        setCCCD(e.target.value)
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeDob = (e) => {
        setDob(e.target.value)
    }

    const handleChangeAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }
    
    

    return (
        <form onSubmit={handleSubmit}>
            {/* ma cccd */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='cccd' className={`${style.label} font-bold mt-8    `}>Mã định danh (CCCD) (*)</label>
                <input className={`${style.input}`} type="text" id='cccd' placeholder='Nhập mã cccd' value={cccd} onChange={handleChangeCCCD} />
            </div>
            {/* ho va ten */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='name' className={`${style.label} font-bold mt-8    `}>Họ và tên(*)</label>
                <input className={`${style.input}`} type="text" id='name' placeholder='Nhập họ và tên' value={name} onChange={handleChangeName}/>
            </div>
            {/* ngay thang nam sinh */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='dob' className={`${style.label} font-bold mt-8    `}>Ngày tháng năm sinh (*)</label>
                <input className={`${style.input}`} type="date" id='dob' value={dob} onChange={handleChangeDob}/>
            </div>

            {/* Dia chi */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='address' className={`${style.label} font-bold mt-8    `}>Địa chỉ</label>
                <input className={`${style.input}`} type="text" id='address' placeholder='Nhập địa chỉ' value={address} onChange={handleChangeAddress}/>
            </div>

            {/* Email */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='email' className={`${style.label} font-bold mt-8    `}>Email(*)</label>
                <input className={`${style.input}`} type="text" id='email' placeholder='Nhập email' value={email} onChange={handleChangeEmail}/>
            </div>

            {/* Password */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='password' className={`${style.label} font-bold mt-8    `}>Password (*)</label>
                <input className={`${style.input}`} type="password" id='password' placeholder='Nhập mật khẩu' value={password} onChange={handleChangePassword}/>
            </div>

            {/* Confirm password
            <div className={`${style.inputContainer} w-full my-4`}>
                <label className={`${style.label} font-bold mt-8    `}>Xác nhận mật khẩu (*)</label>
                <input className={`${style.input}`} type="password" placeholder='Nhập lại mật khẩu' />
            </div> */}

            <div className={`flex items-center justify-center`}>
                <button className={`${style.button} w-1/3 my-8 bg-violet-950`}>Đăng ký</button>
            </div>
        </form>
    );
}

export default SignUpForm;