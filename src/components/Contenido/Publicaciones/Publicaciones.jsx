import React from 'react';
import Publicacion from './Publicacion/Publicacion';
import Historias from './Historias/Historias';

const Publicaciones = ({ isDesktop }) => {
    return (
        <div style={isDesktop ? styles.publicaciones : styles.publicacionesTablet} className='publicaciones'>
            <Historias />
            <div style={styles.publicacioness}>
                <Publicacion img='https://picsum.photos/399/399' />
                <Publicacion img='https://picsum.photos/399/398' />
                <Publicacion img='https://picsum.photos/398/398' />
                <Publicacion img='https://picsum.photos/398/399' />
                <Publicacion img='https://picsum.photos/397/398' />
                <Publicacion img='https://picsum.photos/399/397' />
                <Publicacion img='https://picsum.photos/397/399' />
                <Publicacion img='https://picsum.photos/398/397' />
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