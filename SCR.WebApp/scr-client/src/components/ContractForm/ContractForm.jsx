import React, { useState } from 'react';
import style from "./ContractForm.module.css"
import axios from 'axios';
import PreviewContract from '../../pages/PreviewContract/PreviewContract';


function ContractForm(props) {
    // state of seller
    const [cccd, setCCCD] = useState("")
    const [name, setName] = useState("")
    const [dob, setDob] = useState("")
    const [address, setAddress] = useState("")

    // state of buyer
    const [cccd2, setCCCD2] = useState("")
    const [name2, setName2] = useState("")
    const [dob2, setDob2] = useState("")
    const [address2, setAddress2] = useState("")

    // state of real estate
    const [price, setPrice] = useState(0)
    const [payment, setPayment] = useState("")
    const [executeDay, setExecuteDay] = useState("")
    const [address3, setAddress3] = useState("")

    // state of contract rules
    const [rules, setRules] = useState("")

    const [formSubmit, setFormSubmit] = useState({})

    //  handle submit form
    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = {
            "seller": {
                "cccd": cccd, 
                "name": name,
                "dob": dob,
                "address": address,
            },
            "buyer": {
                "cccd": cccd2, 
                "name": name2,
                "dob": dob2,
                "address": address2,
            },
            "realEstate":{
                "price": price,
                "payment": payment,
                "executeDay": executeDay,
                "address": address3
            },
            "rules": rules
        }
        try{
            const res = await axios.post("http://localhost:3001/add_contract", formData)
            console.log(res.data)
            // setFormSubmit(formData)
        }
        catch (e){
            console.log(e)
        }
        
        // console.log(formData)
        
    }

    // handle preview
    const handlePreview = () => {
        const formData = {
            "seller": {
                "cccd": cccd, 
                "name": name,
                "dob": dob,
                "address": address,
            },
            "buyer": {
                "cccd": cccd2, 
                "name": name2,
                "dob": dob2,
                "address": address2,
            },
            "realEstate":{
                "price": price,
                "payment": payment,
                "executeDay": executeDay,
                "address": address3
            },
            "rules": rules
        }
        setFormSubmit(formData)
        // console.log(formSubmit)
    }

    
        
    // console.log(submitForm)
    // handle change input seller
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

    // handle change input buyer
    const handleChangeCCCD2 = (e) => {
        setCCCD2(e.target.value)
    }

    const handleChangeName2 = (e) => {
        setName2(e.target.value)
    }

    const handleChangeDob2 = (e) => {
        setDob2(e.target.value)
    }

    const handleChangeAddress2 = (e) => {
        setAddress2(e.target.value)
    }

    // real estate
    const handleChangePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleChangePayment = (e) => {
        setPayment(e.target.value)
    }
    
    const handleChangeExecuteDay = (e) => {
        setExecuteDay(e.target.value)
    }

    const handleChangeAddress3 = (e) => {
        setAddress3(e.target.value)
    }

    // rules
    const handleChangeRules = (e) => {
        setRules(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <h2 className={`${style.partName} text-center mt-4 font-bold text-xl`}>Thông tin người bán</h2>
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


            <h2 className={`${style.partName} text-center mt-4 font-bold text-xl`}>Thông tin người mua</h2>
            {/* ma cccd */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='cccd2' className={`${style.label} font-bold mt-8    `}>Mã định danh (CCCD) (*)</label>
                <input className={`${style.input}`} type="text" id='cccd2' placeholder='Nhập mã cccd' value={cccd2} onChange={handleChangeCCCD2} />
            </div>
            {/* ho va ten */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='name2' className={`${style.label} font-bold mt-8    `}>Họ và tên(*)</label>
                <input className={`${style.input}`} type="text" id='name2' placeholder='Nhập họ và tên' value={name2} onChange={handleChangeName2}/>
            </div>
            {/* ngay thang nam sinh */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='dob2' className={`${style.label} font-bold mt-8    `}>Ngày tháng năm sinh (*)</label>
                <input className={`${style.input}`} type="date" id='dob2' value={dob2} onChange={handleChangeDob2}/>
            </div>

            {/* Dia chi */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='address2' className={`${style.label} font-bold mt-8    `}>Địa chỉ</label>
                <input className={`${style.input}`} type="text" id='address2' placeholder='Nhập địa chỉ' value={address2} onChange={handleChangeAddress2}/>
            </div>

            {/* Real estate */}
                <h2 className={`${style.partName} text-center mt-4 font-bold text-xl`}>Thông tin BĐS giao dịch</h2>
             {/* Price */}
             <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='price' className={`${style.label} font-bold mt-8    `}>Giá tài sản</label>
                <input className={`${style.input}`} type="text" id='price' placeholder='Nhập giá tài sản' value={price} onChange={handleChangePrice}/>
            </div>

            {/* Payment */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='payment' className={`${style.label} font-bold mt-8    `}>Phương thức thanh toán</label>
                <input className={`${style.input}`} type="text" id='payment' placeholder='Nhập phương thức thanh toán' value={payment} onChange={handleChangePayment}/>
            </div>

            {/* Execute day */}
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='executeDay' className={`${style.label} font-bold mt-8    `}>Ngày giao nhận tài sản</label>
                <input className={`${style.input}`} type="date" id='executeDay' placeholder='Nhập ngày giao nhận' value={executeDay} onChange={handleChangeExecuteDay}/>
            </div>

            {/* Dia chi */}
             <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='address3' className={`${style.label} font-bold mt-8    `}>Địa chỉ</label>
                <input className={`${style.input}`} type="text" id='address3' placeholder='Nhập địa chỉ' value={address3} onChange={handleChangeAddress3}/>
            </div>

            {/* Rules of Contract */}
            <h2 className={`${style.partName} text-center mt-4 font-bold text-xl`}>Điều khoản hợp đồng</h2>
            <div className={`${style.inputContainer} w-full my-4`}>
                <label htmlFor='rules' className={`${style.label} font-bold mt-8    `}>Điều khoản hợp đồng</label>
                <textarea className={`${style.textarea}`} type="text" id='rules' placeholder='Nhập điều khoản hợp đồng' value={rules} onChange={handleChangeRules}/>
            </div>
            
            <h2 className={`${style.preview} text-center mt-4 font-bold text-xl`} onClick={handlePreview}>Xem trước hợp đồng</h2>
            <PreviewContract data={formSubmit}/>
            <div className={`flex items-center justify-center`}>
                <button className={`${style.button} w-1/3 my-8 bg-violet-950`}>Tạo hợp đồng</button>
            </div>
        </form>
    );
}

export default ContractForm;