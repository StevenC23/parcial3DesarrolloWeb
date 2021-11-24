import React from 'react';
import ImgProfile from '../../../../shared/ImgProfile';

const Sugerencia = (props) => {
    return (
        <div style={styles.sugerencia}>
            <div style={{ display: 'flex', cursor: 'pointer' }}>
                <ImgProfile width='40px' height='40px' image={props.image} />
            </div>
            <div style={styles.nombre}>
                <div style={styles.nombreLink} >
                    <span style={{cursor:'pointer'}} className='nombreLink'>{props.nombre}</span>
                </div>
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
    }
}

export default Sugerencia;