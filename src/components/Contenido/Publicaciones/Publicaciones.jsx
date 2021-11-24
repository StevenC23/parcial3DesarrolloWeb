import React from 'react';
import Publicacion from './Publicacion/Publicacion';
import Historias from './Historias/Historias';

const Publicaciones = ({ isDesktop }) => {
    return (
        <div style={isDesktop ? styles.publicaciones : styles.publicacionesTablet} className='publicaciones'>
            <Historias />
            <div style={styles.publicacioness}>
                <Publicacion img='https://picsum.photos/400/400' />
                <Publicacion img='https://picsum.photos/400/400' />
                <Publicacion img='https://picsum.photos/400/400' />
                <Publicacion img='https://picsum.photos/400/400' />
                <Publicacion img='https://picsum.photos/400/400' />
                <Publicacion img='https://picsum.photos/400/400' />
                <Publicacion img='https://picsum.photos/400/400' />
                <Publicacion img='https://picsum.photos/400/400' />
            </div>
        </div>
    );
};

const styles = {
    publicaciones: {
        minWidth: '600px',
        height: '100%',
        overflow: 'auto',
        whiteSpace: 'nowrap',
    },
    publicacionesTablet: {
        width: '690px',
        minWidth: '690px',
        height: '100%',
        overflow: 'auto',
        whiteSpace: 'nowrap',
    },
    publicacioness: {
        flexDirection: 'column',
    }
}

export default Publicaciones;