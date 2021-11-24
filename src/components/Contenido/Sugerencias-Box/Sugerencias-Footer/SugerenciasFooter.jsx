import React from 'react';

const SugerenciasFooter = () => {
    return (
        <div style={{ paddingTop: '25px' }}>
            <div style={styles.data}>
                Informacion · Ayuda · Prensa · API · Empleo · Privacidad · Condiciones · Ubicacion · Cuentas destacadas · Hashtags · Idioma
            </div>
            <div style={styles.data2}>
                @ 2021 INSTAGRAM FROM META
            </div>
        </div>
    );
};

const styles = {
    data: {
        margin: '10px',
        fontSize: '10px',
        color: 'rgba(128, 128, 128, 0.5)',
        cursor: 'pointer'
    },
    data2: {
        margin: '10px',
        fontSize: '10px',
        color: 'rgba(128, 128, 128, 0.5)',
    }
}

export default SugerenciasFooter;