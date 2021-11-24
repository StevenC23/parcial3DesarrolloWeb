import React from 'react';
import Sugerencia from './Sugerencia/Sugerencia';

const SugerenciasList = () => {
    return (
        <div style={styles.sugerencias}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'grey' }}>Sugerencias para ti</span>
                <span style={{ cursor: 'pointer' }}>Ver todo</span>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Sugerencia nombre={'Daniel Ceron'} image='https://picsum.photos/500/500' />
                <Sugerencia nombre={'Camilo Cesto'} image='https://picsum.photos/501/500' />
                <Sugerencia nombre={'Harry Styles'} image='https://picsum.photos/501/499' />
                <Sugerencia nombre={'Dwayine Jhonson'} image='https://picsum.photos/502/502' />
                <Sugerencia nombre={'Megan fox'} image='https://picsum.photos/503/503' />
            </div>
        </div>
    );
};

const styles = {
    sugerencias: {
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    }
}

export default SugerenciasList;