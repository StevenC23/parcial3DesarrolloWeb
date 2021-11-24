import React from 'react';
import SugerenciasBox from './Sugerencias-Box/SugerenciasBox';
import Publicaciones from './Publicaciones/Publicaciones';

const Contenido = ({ isDesktop }) => {
    return (
        <div style={styles.containerSecundario}>
            <div style={isDesktop ? styles.containerr : styles.containerrTablet}>
                <Publicaciones isDesktop={isDesktop} />
                <SugerenciasBox isDesktop={isDesktop} />
            </div>
        </div>
    );
};

const styles = {
    containerSecundario: {
        width: '100%',
        height: '95vh',
        justifyContent: 'center',
        display: 'flex'
    },
    containerr: {
        width: '100%',
        maxWidth: '935px',
        display: 'flex',
        flexDirection: 'row',
    },
    containerrTablet: {
        width: '100%',
        maxWidth: '935px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    }
}

export default Contenido;