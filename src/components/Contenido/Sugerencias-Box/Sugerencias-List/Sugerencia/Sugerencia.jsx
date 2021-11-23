import React from 'react';
import ImgProfile from '../../../../shared/ImgProfile';

const Sugerencia = (props) => {
    return (
        <div style={styles.sugerencia}>
            <div style={{ display: 'flex', cursor: 'pointer' }}>
                <ImgProfile width='40px' height='40px' />
            </div>
            <div style={styles.nombre}>
                <span style={styles.nombreLink} className='nombreLink'>{props.nombre}</span>
                <span style={{ fontSize: '12px', color: 'grey' }}>Nuevo en instagram</span>
            </div>
            <div style={{ color: 'rgb(57, 157, 238)', cursor: 'pointer', }}><strong>Seguir</strong></div>
        </div>
    );
};

const styles = {
    sugerencia: {
        display: 'flex',
        flexDirection: 'row',
        padding: '5px',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom: '0px',
        marginTop: '0px'

    },
    nombre: {
        width: '100%',
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'column'
    },
    nombreLink: {
        display: 'flex',
        cursor: 'pointer',
        border: '1px solid white',
        // borderBottom: '1px solid black'
    }
}

export default Sugerencia;