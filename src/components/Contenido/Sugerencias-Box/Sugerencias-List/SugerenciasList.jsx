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
                <Sugerencia nombre={'Daniel Ceron'} />
                <Sugerencia nombre={'Camilo Cesto'} />
                <Sugerencia nombre={'Harry Styles'} />
                <Sugerencia nombre={'Dwayine Jhonson'} />
                <Sugerencia nombre={'Megan fox'} />
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