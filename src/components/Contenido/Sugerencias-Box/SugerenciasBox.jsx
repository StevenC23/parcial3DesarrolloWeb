import React from 'react';
import SugerenciasFooter from './Sugerencias-Footer/SugerenciasFooter';
import SugerenciasPerfil from './Sugerencias-Perfil/SugerenciasPerfil';
import SugerenciasList from './Sugerencias-List/SugerenciasList';

const SugerenciasBox = ({ isDesktop }) => {
    return (
        <div style={{ ...styles.perfilSugerencias, display: isDesktop ? 'flex' : 'none' }} className='perfilSugerencias'>
            <SugerenciasPerfil />
            <SugerenciasList />
            <SugerenciasFooter />
        </div>
    );
};

const styles = {
    perfilSugerencias: {
        width: '100%',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20px'
    }
}

export default SugerenciasBox;