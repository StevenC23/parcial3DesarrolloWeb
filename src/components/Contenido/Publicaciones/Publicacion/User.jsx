import React from 'react';
import UserPic from '../../../../utils/imgs/vic.jpg';

const User = () => {
    return (
        <div style={styles.multiColor}>
            <div style={styles.fondo}>
                <img src={UserPic} width="30" height="30" style={styles.img} alt="" />
            </div>
        </div>
    );
};

const styles = {
    multiColor: {
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(236,252,69,1) 100%)',
        width: '40px',
        height: '40px',
        borderRadius: '100%',
        cursor: 'pointer'
    },
    fondo: {
        background: 'white',
        width: '36px',
        height: '36px',
        borderRadius: '100%',
        margin: 'auto',
        marginTop: '2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        borderRadius: '100%'
    }
}



export default User;