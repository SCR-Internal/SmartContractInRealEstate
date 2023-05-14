import React from 'react';
import { useNavigate } from "react-router-dom";
import style from './SuccessPage.module.css'

function SuccessPage(props) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/add_contract")
    }
    return (
        <div>
            <h2 className="text-xl my-8 font-bold text-center">Thành công</h2>
            <button onClick={handleClick} className={`${style.button}`}>Tạo hợp đồng</button>
        </div>
    );
}

export default SuccessPage;