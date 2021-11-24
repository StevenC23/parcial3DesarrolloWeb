import React from 'react';
import hit from '../../../utils/imgs/hit.PNG';

const UserScroll = () => {
    return (
        <div style={styles.multiColor}>
            <div style={styles.fondo}>
                <img src={hit} width="60" height="60" style={{borderRadius:'100%'}} alt="" />
            </div>
        </div>
    );
};

const styles = {
    multiColor: {
        background: 'linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(236,252,69,1) 100%)',
        width: '70px',
        height: '70px',
        borderRadius: '100%',
        
    },
    fondo: {
        background: 'white',
        width: '66px',
        height: '66px',
        borderRadius: '100%',
        margin: 'auto',
        marginTop: '2px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}
export default UserScroll;