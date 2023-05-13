import React from 'react';
import style from "./Home.module.css"

function Home() {
    return (
        <div className={`${style.container} flex px-8 py-8 gap-10 justify-around`}>
            <div className={`${style.description} w-1/2 mt-16`}>
                <p className={`text-xl mb-8`}>Giải pháp ứng dụng <br />
                    Blockchain trong giao dịch Bất động sản</p>
                <h1 className={`text-4xl font-bold mb-8`}>SCR - SMART CONTRACT <br />
                IN REAL ESTATE</h1>
                <div className={`text-xl`}>SCR là giải pháp ứng dụng công nghệ blockchain trong quá trình giao dịch bất động sản. Chúng tôi hỗ trợ bạn các hoàn thành các thủ tục khi giao dịch bất động sản đảm bảo rút ngắn thời gian thủ tục, bảo mật thông tin khách hàng</div>
            </div>
            <div className={`w-1/3 `}>
                <div className={`${style.homeImage}`}></div>
            </div>
        </div>
    );
}

export default Home;