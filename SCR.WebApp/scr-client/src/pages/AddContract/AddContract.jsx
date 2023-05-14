import React from 'react';
import style from "./AddContract.module.css"
import ContractForm from '../../components/ContractForm/ContractForm';

function AddContract(props) {
    return (
        <div>
             <div className={`${style.container}`}>
            <h1 className={`text-4xl font-bold text-center pt-8`}>TẠO HỢP ĐỒNG</h1>
            <ContractForm />
            </div>
        </div>
    );
}

export default AddContract;