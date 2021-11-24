import React from 'react';
import logo from '../../../utils/imgs/Logo-Instagram.jpg';

const Logo = () => {
    return (
        <div style={{cursor:'pointer'}}>
            <img src={logo} width="100" height="100%" alt="" />
        </div>
    );
};

export default Logo;