import React from 'react';
import Publicacion from './Publicacion/Publicacion';
import Historias from './Historias/Historias';

const Publicaciones = () => {
    return (
        <div style={styles.publicaciones} className='publicaciones'>
            <Historias />
            <div style={styles.publicacioness}>
                <Publicacion img='https://picsum.photos/400/650' />
                <Publicacion img='https://picsum.photos/400/650' />
                <Publicacion img='https://picsum.photos/400/650' />
                <Publicacion img='https://picsum.photos/400/650' />
                <Publicacion img='https://picsum.photos/400/650' />
                <Publicacion img='https://picsum.photos/400/650' />
                <Publicacion img='https://picsum.photos/400/650' />
                <Publicacion img='https://picsum.photos/400/650' />
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
    publicacioness: {
        flexDirection: 'column',
    }
}

export default Publicaciones;