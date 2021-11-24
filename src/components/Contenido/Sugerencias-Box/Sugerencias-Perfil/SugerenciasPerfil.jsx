import React from 'react';
import UserScroll from '../../shared/UserScroll';
import UserPic from '../../../../utils/imgs/vic.jpg';

const Perfil = () => {
    return (
        <div style={styles.perfil}>
            <div style={{ display: 'Flex', flexDirection: 'row' }}>
                <div style={styles.userScroll}>
                    <UserScroll image={UserPic} />
                </div>
                <div style={styles.cuenta}>
                    <span style={{ fontSize: '12px', cursor: 'pointer', fontWeight: 'bold', color: '#343434' }}>victoria.gomez96</span>
                    <span style={{ fontSize: '12px', color: 'grey' }}>Victoria Gomez</span>
                </div>
            </div>
            <span style={{ color: 'rgb(57, 157, 238)', cursor: 'pointer' }}><strong>Cambiar</strong></span>
        </div>
    );
};

const styles = {
    perfil: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    userScroll: {
        display: 'flex',
        margin: '10px',
        cursor: 'pointer'
    },
    cuenta: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
}

export default Perfil;