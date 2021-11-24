import React from 'react';
import logo from '../../../utils/imgs/logo_identico.png';

const Logo = ({ isDesktop }) => {
    return (
        <div style={{ ...styles.logo, paddingLeft: !isDesktop ? '20px' : '0px' }}>
            <img src={logo} alt="" />
        </div>
    );
};

const styles = {
    logo: {
        cursor: 'pointer',
        paddingTop: '15px'
    }
};

export default Logo;