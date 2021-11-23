import React from 'react';
import SugerenciasBox from './Sugerencias-Box/SugerenciasBox';
import Publicaciones from './Publicaciones/Publicaciones';

const Contenido = ({ isDesktop }) => {
    return (
        <div style={styles.containerSecundario}>
            <div style={styles.containerr}>
                <Publicaciones />
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
    }
}

export default Contenido;