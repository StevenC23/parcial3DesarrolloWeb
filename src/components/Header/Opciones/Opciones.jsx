import React from 'react';
import casa from '../../../utils/imgs/Casa.PNG';
import brujula from '../../../utils/imgs/Brujula.PNG';
import plus from '../../../utils/imgs/icon_plus.PNG';
import mesenger from '../../../utils/imgs/Mesenger.PNG';
import corazon from '../../../utils/imgs/Corazon.PNG';
import ImgProfile from '../../shared/ImgProfile';
import UserPic from '../../../utils/imgs/vic.jpg';

const Opciones = ({ isDesktop }) => {
    return (
        <div style={{ ...styles.containerOpciones, paddingRight: !isDesktop ? '20px' : '0px' }}>
            <img src={casa} width="28" height="28" style={styles.icon} alt="" />
            <img src={mesenger} width="35" height="35" style={{ ...styles.icon, marginBottom: '5px' }} alt="" />
            <img src={plus} width="27" height="27" style={styles.icon} alt="" />
            <img src={brujula} width="30" height="30" style={styles.icon} alt="" />
            <img src={corazon} width="30" height="30" style={styles.icon} alt="" />
            <div style={styles.icon}>
                <ImgProfile image={UserPic} width='25px' height='25px' />
            </div>
        </div>
    );
};

const styles = {
    containerOpciones: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        marginLeft: '15px',
        cursor: 'pointer'
    }
}

export default Opciones;