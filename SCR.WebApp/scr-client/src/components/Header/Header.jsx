/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import style from "./Header.module.css"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from '../../pages/Home/Home';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/SignUp/SignUp';

Header.propTypes = {
    
};

function Header(props) {
    return (
        <Router>
        <div className={`${style.header}`}>

            <ul className={`${style.header_list} flex justify-around font-bold w-2/3`}>
                <li>
                    <Link to="/">Về chúng tôi</Link>
                </li>
                <li>Dịch vụ</li>
                <li>Liên hệ</li>
                <li>
                    <Link to="/signup">Đăng ký</Link>
                </li>
                <li>
                    <Link to="/signin">Đăng nhập</Link>
                </li>

            </ul>
            
        </div>
        <Routes>
                <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/signin' element={< SignIn />}></Route>
                 <Route exact path='/signup' element={< SignUp />}></Route>
        </Routes>
        </Router>
    );
}

export default Header;