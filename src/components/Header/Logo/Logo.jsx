import React from 'react';
import logo from '../../../utils/imgs/Logo-Instagram.jpg';

const Logo = () => {
    return (
        <div style={styles.containerLogo}>
            <img src={logo} width="100" height="100%" alt="" />
        </div>
    );
};

const styles = {
    containerLogo: {
        cursor: 'pointer'
    }
}

export default Logo;